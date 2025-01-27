#! /usr/bin/env node
import { program } from "commander";
import { init } from "./actions/init.ts";
import { createMigrationFile } from "./actions/createFile.ts";
import { connectToMongo } from "./actions/connectDB.ts";
program
    .command('init')
    .description("mkdir migrations/ & setup.ts")
    .action(() => {
    init();
});
//create migration file
program
    .command('create <fileName>')
    .description("Create a migration file")
    .action((fileName) => {
    createMigrationFile(fileName);
    connectToMongo();
});
program
    .name('mongo-migrate')
    .description('CLI for performing mongo migration')
    .version('0.0.0');
program.parse(process.argv);
