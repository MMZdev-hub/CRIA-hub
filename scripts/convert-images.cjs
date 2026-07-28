const sharp = require("sharp");
const fs = require("fs-extra");
const path = require("path");

const INPUT_DIR = path.join(__dirname, "..", "public");
const OUTPUT_DIR = path.join(INPUT_DIR, "optimized");

const MAX_WIDTH = 1600;
const QUALITY = 72;

const VALID_EXTENSIONS = [".jpg", ".jpeg", ".png"];

let originalTotal = 0;
let optimizedTotal = 0;
let converted = 0;

async function walk(directory) {
    const files = await fs.readdir(directory);

    for (const file of files) {

        const fullPath = path.join(directory, file);

        const stat = await fs.stat(fullPath);

        if (stat.isDirectory()) {

            if (fullPath.includes("optimized")) continue;

            await walk(fullPath);
            continue;
        }

        const ext = path.extname(file).toLowerCase();

        if (!VALID_EXTENSIONS.includes(ext))
            continue;

        const relative = path.relative(INPUT_DIR, fullPath);

        const destination = path.join(
            OUTPUT_DIR,
            relative.replace(/\.(jpg|jpeg|png)$/i, ".webp")
        );

        await fs.ensureDir(path.dirname(destination));

        try {

            const metadata = await sharp(fullPath).metadata();

            let image = sharp(fullPath)
                .rotate();

            if (metadata.width > MAX_WIDTH) {
                image = image.resize({
                    width: MAX_WIDTH,
                    withoutEnlargement: true
                });
            }

            await image
                .webp({
                    quality: QUALITY,
                    effort: 6
                })
                .toFile(destination);

            const before = (await fs.stat(fullPath)).size;
            const after = (await fs.stat(destination)).size;

            originalTotal += before;
            optimizedTotal += after;
            converted++;

            const reduction =
                (((before - after) / before) * 100).toFixed(1);

            console.log(
                `✔ ${relative}
   ${(before / 1024 / 1024).toFixed(2)} MB → ${(after / 1024).toFixed(0)} KB
   Economia: ${reduction}%\n`
            );

        } catch (err) {
            console.log(`Erro em ${relative}`);
            console.log(err.message);
        }
    }
}

(async () => {

    console.log("\nIniciando conversão...\n");

    await fs.remove(OUTPUT_DIR);

    await walk(INPUT_DIR);

    console.log("======================================");

    console.log(`Imagens convertidas : ${converted}`);

    console.log(
        `Original : ${(originalTotal / 1024 / 1024).toFixed(2)} MB`
    );

    console.log(
        `WebP     : ${(optimizedTotal / 1024 / 1024).toFixed(2)} MB`
    );

    const reduction =
        (((originalTotal - optimizedTotal) / originalTotal) * 100).toFixed(1);

    console.log(`Economia : ${reduction}%`);

    console.log("\nArquivos salvos em:");
    console.log("public/optimized");

})();