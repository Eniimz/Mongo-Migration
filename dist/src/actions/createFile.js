import path from "path";
import fs from 'fs';
export const createMigrationFile = (filename) => {
    const currentDir = process.cwd();
    const MigrationDir = path.join(currentDir, "migrations");
    const templateFilePath = path.join(currentDir, "src/templates/migration.ts");
    const migrationFilePath = path.join(currentDir, `migrations/${filename}_${Date.now()}.ts`);
    if (!MigrationDir)
        return console.log("You need to first initialize mongo-migrate");
    fs.copyFileSync(templateFilePath, migrationFilePath);
    console.log(`Migration file inserted at: ${migrationFilePath}`);
};
