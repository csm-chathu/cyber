import fs from "fs";
import path from "path";


export function readPublicLogo() {
  let imageFileName = process.env?.LOGO_PDF || "";
  const publicDir = path.join(process.cwd(), "public");
  const imagePath = path.join(publicDir, imageFileName);

  try {
    const imageBuffer = fs.readFileSync(imagePath);
    if (imageBuffer) {
      const mimeType = "image/jpeg";
      let dataUrl = `data:${mimeType};base64,${imageBuffer.toString("base64")}`;
      return dataUrl;
    }
  } catch (error) {
    console.error(`Error reading image: ${imageFileName}`, error);
    return null;
  }
}
