const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(process.cwd(), 'public/images/project-images/other-images/favicon_backup.png');
const outputPath = path.join(process.cwd(), 'public/images/project-images/other-images/favicon.png');

async function processFavicon() {
    try {
        console.log(`Processing ${inputPath}...`);

        await sharp(inputPath)
            .resize({
                width: 200,
                height: 200,
                fit: 'contain',
                background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent background
            })
            .toFile(outputPath);

        console.log(`Successfully created transparent favicon at ${outputPath}`);
    } catch (error) {
        console.error('Error processing favicon:', error);
    }
}

processFavicon();
