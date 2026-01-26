const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const TARGET_DIR = path.join(__dirname, '../public/images');
const MAX_WIDTH_MOBILE = 1080;
const QUALITY = 80;

let stats = { processed: 0, savedBytes: 0 };

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
    // Only target files with 'mobile' in the path or name
    if (!filePath.toLowerCase().includes('mobile')) return;

    const ext = path.extname(filePath).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) return;

    try {
        const originalBuffer = fs.readFileSync(filePath);
        const originalSize = originalBuffer.length;

        const image = sharp(originalBuffer);
        const metadata = await image.metadata();

        // If it's already small enough in width, maybe just recompress?
        // Enforce 1080px width for mobile assets
        let pipeline = image;
        if (metadata.width > MAX_WIDTH_MOBILE) {
            pipeline = pipeline.resize({ width: MAX_WIDTH_MOBILE, withoutEnlargement: true });
        }

        if (ext === '.webp') {
            pipeline = pipeline.webp({ quality: QUALITY, effort: 4 });
        } else if (ext === '.jpg' || ext === '.jpeg') {
            pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true });
        } else if (ext === '.png') {
            pipeline = pipeline.png({ quality: QUALITY, compressionLevel: 8, palette: true });
        }

        const newBuffer = await pipeline.toBuffer();
        const newSize = newBuffer.length;

        // For mobile, we enforce the resize even if size grows (unlikely with resize)
        // But usually we want to save space.
        if (newSize < originalSize || metadata.width > MAX_WIDTH_MOBILE) {
            fs.writeFileSync(filePath, newBuffer);
            stats.savedBytes += (originalSize - newSize);
            stats.processed++;
            console.log(`✓ Optimized Mobile: ${path.relative(TARGET_DIR, filePath)} | ${(originalSize / 1024).toFixed(1)}KB -> ${(newSize / 1024).toFixed(1)}KB`);
        }

    } catch (error) {
        console.error(`Error: ${filePath}`, error.message);
    }
}

async function main() {
    console.log(`Starting Mobile Asset Optimization (Max Width: ${MAX_WIDTH_MOBILE}px)...`);
    for (const filePath of walkSync(TARGET_DIR)) {
        await processImage(filePath);
    }
    console.log(`Total Space Saved: ${(stats.savedBytes / 1024 / 1024).toFixed(2)} MB`);
}

main();
