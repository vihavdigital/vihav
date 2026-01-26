const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const TARGET_DIR = path.join(__dirname, '../public/images'); // Adjust if run from root or scripts folder
const MAX_WIDTH = 2500; // Safe for large 4K screens, prevents massive raw files
const QUALITY = 85; // High production quality

// Stats
let stats = {
    processed: 0,
    skipped: 0,
    errors: 0,
    savedBytes: 0,
    totalOriginalBytes: 0
};

// Recursive file walker
function* walkSync(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    for (const file of files) {
        if (file.isDirectory()) {
            yield* walkSync(path.join(dir, file.name));
        } else {
            yield path.join(dir, file.name);
        }
    }
}

async function processImage(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) return;

    try {
        const originalBuffer = fs.readFileSync(filePath);
        const originalSize = originalBuffer.length;
        stats.totalOriginalBytes += originalSize;

        const image = sharp(originalBuffer);
        const metadata = await image.metadata();

        // Check if optimization is needed (Large dimensions or just re-compress)
        // We will process all to ensure consistent quality/compression settings

        let pipeline = image;

        // Resize if too large
        if (metadata.width > MAX_WIDTH) {
            pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
        }

        // Compress based on format
        if (ext === '.jpg' || ext === '.jpeg') {
            pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true });
        } else if (ext === '.png') {
            pipeline = pipeline.png({ quality: QUALITY, compressionLevel: 8, palette: true });
        } else if (ext === '.webp') {
            pipeline = pipeline.webp({ quality: QUALITY, effort: 4 });
        }

        const newBuffer = await pipeline.toBuffer();
        const newSize = newBuffer.length;

        // Only overwrite if we actually saved space (or resized)
        // If the new file is bigger (can happen with already optimized files), skip overwriting unless it was resized
        if (newSize < originalSize || metadata.width > MAX_WIDTH) {
            fs.writeFileSync(filePath, newBuffer);
            stats.savedBytes += (originalSize - newSize);
            stats.processed++;
            console.log(`✓ Optimized: ${path.relative(TARGET_DIR, filePath)} | ${(originalSize / 1024).toFixed(1)}KB -> ${(newSize / 1024).toFixed(1)}KB`);
        } else {
            stats.skipped++;
            // console.log(`- Skipped (No savings): ${path.relative(TARGET_DIR, filePath)}`);
        }

    } catch (error) {
        console.error(`✗ Error processing ${path.relative(TARGET_DIR, filePath)}:`, error.message);
        stats.errors++;
    }
}

async function main() {
    console.log(`Starting Image Optimization...`);
    console.log(`Target: ${TARGET_DIR}`);
    console.log(`Settings: Max Width ${MAX_WIDTH}px, Quality ${QUALITY}%`);
    console.log('------------------------------------------------');

    // Handle relative path if run from root vs scripts
    const searchDir = fs.existsSync(TARGET_DIR) ? TARGET_DIR : path.join(__dirname, 'public/images');

    if (!fs.existsSync(searchDir)) {
        console.error(`Directory not found: ${searchDir}`);
        return;
    }

    for (const filePath of walkSync(searchDir)) {
        await processImage(filePath);
    }

    console.log('------------------------------------------------');
    console.log(`Summary:`);
    console.log(`Processed: ${stats.processed}`);
    console.log(`Skipped:   ${stats.skipped}`);
    console.log(`Errors:    ${stats.errors}`);
    console.log(`Total Original Size: ${(stats.totalOriginalBytes / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Space Saved:         ${(stats.savedBytes / 1024 / 1024).toFixed(2)} MB`);
}

main();
