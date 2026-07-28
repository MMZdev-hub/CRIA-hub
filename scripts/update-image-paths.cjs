const fs = require("fs-extra");
const path = require("path");

const SRC_DIR = path.join(__dirname, "..", "src");
const BACKUP_DIR = path.join(__dirname, "..", "backup-src");

const VALID_EXTENSIONS = [
    ".js",
    ".jsx",
    ".ts",
    ".tsx"
];

async function walk(dir) {

    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {

        const full = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            await walk(full);
            continue;
        }

        if (!VALID_EXTENSIONS.includes(path.extname(entry.name)))
            continue;

        let content = await fs.readFile(full, "utf8");

        const original = content;

        // "/foto.jpg" -> "/optimized/foto.webp"
        content = content.replace(
            /(['"`])\/(?!optimized\/)([^'"`]+?)\.(jpg|jpeg|png)(['"`])/gi,
            '$1/optimized/$2.webp$4'
        );

        if (content !== original) {

            const backupFile = path.join(
                BACKUP_DIR,
                path.relative(SRC_DIR, full)
            );

            await fs.ensureDir(path.dirname(backupFile));

            if (!(await fs.pathExists(backupFile))) {
                await fs.copy(full, backupFile);
            }

            await fs.writeFile(full, content);

            console.log("✔ Atualizado:", path.relative(SRC_DIR, full));
        }

    }
}

(async () => {

    console.log("\nCriando backup...\n");

    await fs.ensureDir(BACKUP_DIR);

    await walk(SRC_DIR);

    console.log("\nConcluído!");
    console.log("Backup salvo em:");
    console.log("backup-src");

})();