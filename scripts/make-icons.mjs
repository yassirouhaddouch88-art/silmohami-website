// Generates the site favicon + apple touch icon from the brand avatar.
// The avatar (public/silmohami-avatar.webp) is already a square profile
// composition, so we just resize — no cropping needed.
//
// Run:  node scripts/make-icons.mjs
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = path.join(root, "public", "silmohami-avatar.webp");

async function make(size, outFile) {
  await sharp(src)
    .resize(size, size, { fit: "cover", kernel: "lanczos3" })
    .png()
    .toFile(path.join(root, "app", outFile));
  console.log(`✓ app/${outFile} (${size}x${size})`);
}

await make(256, "icon.png");
await make(180, "apple-icon.png");
