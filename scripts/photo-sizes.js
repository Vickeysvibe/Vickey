// Records each photo's width/height in src/data/photo-sizes.json so the
// gallery can reserve the right shape (and show a skeleton) before the image
// loads. Runs automatically before `npm start` and `npm run build`.
const fs = require("fs");
const path = require("path");
const sizeOf = require("image-size");

const PHOTOS_DIR = path.join(__dirname, "../src/photos");
const OUT_FILE = path.join(__dirname, "../src/data/photo-sizes.json");

const sizes = {};
for (const file of fs.readdirSync(PHOTOS_DIR).sort()) {
  if (!/\.(jpe?g|png|webp|avif)$/i.test(file)) continue;
  try {
    const { width, height, orientation } = sizeOf(path.join(PHOTOS_DIR, file));
    // EXIF orientations 5-8 are rotated 90°, so the displayed shape is swapped.
    sizes[file] = orientation >= 5 ? [height, width] : [width, height];
  } catch (err) {
    console.warn(`photo-sizes: skipping ${file} (${err.message})`);
  }
}

fs.writeFileSync(OUT_FILE, `${JSON.stringify(sizes, null, 2)}\n`);
console.log(`photo-sizes: recorded ${Object.keys(sizes).length} photos`);
