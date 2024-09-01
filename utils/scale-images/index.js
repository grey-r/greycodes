const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

// Define the sizes you want to generate
const sizes = [480, 800, 1280, 1600, 1920, 2160];

// Input and output directories
const inputDir = "../../pages/greycodes.net/public/assets/gallery-test";
const outputDir = "./out";

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Function to resize an image
const resizeImage = async (filePath, fileName, ext) => {
  const image = sharp(filePath);
  const metadata = await image.metadata();

  for (const size of sizes) {
    const outputFileName = `${fileName}-${size}-${
      metadata.width > metadata.height ? "w" : "h"
    }.${ext}`;
    const outputPath = path.join(outputDir, outputFileName);

    await image
      .resize({
        width: metadata.width > metadata.height ? size : null,
        height: metadata.width > metadata.height ? null : size,
        fit: sharp.fit.inside,
        withoutEnlargement: true,
      })
      .toFile(outputPath);

    console.log(`Generated: ${outputFileName}`);
  }
};

// Iterate through the images in the input directory
fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error("Error reading input directory:", err);
    return;
  }

  files.forEach((file) => {
    const ext = path.extname(file).slice(1);
    const fileName = path.basename(file, path.extname(file));
    const filePath = path.join(inputDir, file);

    resizeImage(filePath, fileName, ext).catch((err) => {
      console.error("Error resizing image:", err);
    });
  });
});
