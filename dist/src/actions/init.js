import path from "path";
import fs from 'fs';
const createMigrationsDir = () => {
    const currentDir = process.cwd();
    const MigrationsDir = path.join(currentDir, 'migrations');
    if (!fs.existsSync(MigrationsDir)) {
        fs.mkdirSync(MigrationsDir);
        console.log("Migration Dir created");
    }
    else {
        console.log("Migration Dir already exits");
    }
};
const createDbConfigFile = () => {
    const currentDir = process.cwd();
    const dbConfigPath = path.join(currentDir, "dbSetup.ts");
    const templateFilePath = path.join(currentDir, "src/templates/dbConfig.ts");
    if (!fs.existsSync(dbConfigPath)) {
        fs.copyFileSync(templateFilePath, dbConfigPath); //copying the template to user's directory
        console.log(`Created config file at ${dbConfigPath}`);
        console.log("Update the file");
    }
    else {
        console.log("Couldnt create config for DB");
    }
};
export const init = () => {
    createMigrationsDir();
    createDbConfigFile();
};
