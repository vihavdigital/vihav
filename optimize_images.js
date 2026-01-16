const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const targetDir = path.join(__dirname, 'public/images/project-images/project-tiles');
const MAX_WIDTH = 1200;
const QUALITY = 50; // Dropping to 50 to force compression

// Ensure target directory exists
if (!fs.existsSync(targetDir)) {
    console.error(`Directory not found: ${targetDir}`);
    process.exit(1);
}

const files = fs.readdirSync(targetDir);

console.log(`Processing images in ${targetDir}...`);
console.log(`Target: Max Width ${MAX_WIDTH}px, Quality ${QUALITY}%`);

let totalOriginalSize = 0;
let totalNewSize = 0;

files.forEach(file => {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
        const filePath = path.join(targetDir, file);
        const stats = fs.statSync(filePath);
        const originalSize = stats.size;
        totalOriginalSize += originalSize;

        try {
            // Simplified command: just resize and set quality
            // Trying to delete profile specifically if possible, otherwise just resize/quality
            execSync(`sips -Z ${MAX_WIDTH} --setProperty formatOptions ${QUALITY} "${filePath}"`, { stdio: 'ignore' });

            const newStats = fs.statSync(filePath);
            const newSize = newStats.size;
            totalNewSize += newSize;

            console.log(`Optimized ${file}: ${Math.round(originalSize / 1024)}KB -> ${Math.round(newSize / 1024)}KB`);

        } catch (error) {
            console.error(`Error processing ${file}:`, error.message);
            // Count original size as new size if failed
            totalNewSize += originalSize;
        }
    }
});

console.log('------------------------------------------------');
console.log(`Total Original Size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
console.log(`Total New Size:      ${(totalNewSize / 1024 / 1024).toFixed(2)} MB`);
console.log(`Space Saved:         ${((totalOriginalSize - totalNewSize) / 1024 / 1024).toFixed(2)} MB`);
