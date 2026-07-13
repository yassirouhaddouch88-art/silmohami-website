// Generates the site favicon + apple touch icon from the brand portrait.
// The source (public/silmohami.webp) is a tall 1536x2752 portrait, so we crop a
// top-anchored square around the character's head & shoulders before resizing —
// a straight downscale of the full portrait would be unrecognizable at 32px.
//
// Run:  node scripts/make-icons.mjs
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = path.join(root, "public", "silmohami.webp");

// Top-anchored square crop (source is 1536x2752): head + shoulders.
const CROP = { left: 168, top: 560, width: 1200, height: 1200 };

async function make(size, outFile) {
  await sharp(src)
    .extract(CROP)
    .resize(size, size, { fit: "cover" })
    .png()
    .toFile(path.join(root, "app", outFile));
  console.log(`✓ app/${outFile} (${size}x${size})`);
}

await make(512, "icon.png");
await make(180, "apple-icon.png");
