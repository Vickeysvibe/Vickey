// Every image in src/photos/ shows up in the Photography section; no code
// changes needed. Name files like "01-marina-beach-sunset.jpg": the optional
// leading number sets the order and the rest becomes the caption
// ("Marina beach sunset").

import sizes from "./photo-sizes.json"; // written by scripts/photo-sizes.js

// webpack bundles every matching file; Jest has no require.context, so
// setupTests.js mocks this module.
const context = require.context(
  "../photos",
  false,
  /\.(jpe?g|png|webp|avif)$/i,
);

// Camera defaults like DSC_4877 or IMG_0123 aren't captions.
const CAMERA_NAME = /^(dsc|dscf|dscn|img|pxl|_dsc|gopr)[-_ ]?\d+$/i;

const toCaption = (key) => {
  const name = key.replace(/^\.\//, "").replace(/\.[^.]+$/, "");
  if (CAMERA_NAME.test(name)) return "";
  const words = name
    .replace(/^\d+[-_ ]*/, "")
    .replace(/[-_]+/g, " ")
    .trim();
  return words && words[0].toUpperCase() + words.slice(1);
};

const photos = context
  .keys()
  .sort()
  .map((key) => {
    // Fallback shape for a photo added since the last start/build
    const [width, height] = sizes[key.replace(/^\.\//, "")] ?? [4, 3];
    return { src: context(key), caption: toCaption(key), width, height };
  });

export default photos;
