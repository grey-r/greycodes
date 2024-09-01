const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const folderPath = "../../pages/greycodes.net/public/assets/out"; // Change this to your folder path

fs.readdir(folderPath, async (err, files) => {
  if (err) {
    return console.error("Unable to scan directory: " + err);
  }

  const imageSets = {};

  for (const file of files) {
    const match = file.match(/^(.*?)-(\d+)-(w|h)\.(jpg|jpeg|png)$/);
    if (match) {
      const [_, name, dimension, leadingEdge, format] = match;
      const dimensionInt = parseInt(dimension, 10);
      imageSets[name] ??= {
        name: name,
        sources: [],
        aspectRatio: null,
      };

      const imagePath = path.join(folderPath, file);
      try {
        const metadata = await sharp(imagePath).metadata();
        const aspectRatio = metadata.width / metadata.height;
        imageSets[name].aspectRatio ??= aspectRatio;
        imageSets[name].sources.push({
          path: `${file}`,
          width: metadata.width,
          height: metadata.height,
          megapixels: (
            (metadata.width * metadata.height) /
            1000000
          ).toPrecision(3),
        });
      } catch (error) {
        console.error("Error reading image metadata:", error);
      }
    }
  }

  Object.values(imageSets).forEach((set) => {
    set.sources = set.sources.sort((a, b) => a.megapixels - b.megapixels);
  });

  const result = Object.values(imageSets);
  console.log(JSON.stringify(result, null, 2));
});
