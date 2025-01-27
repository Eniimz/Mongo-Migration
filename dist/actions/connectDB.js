var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import path from 'path';
export const connectToMongo = () => __awaiter(void 0, void 0, void 0, function* () {
    const cwd = process.cwd();
    const userDbSetupPath = path.join(cwd, "dbSetup.js");
    const file = (yield import(`${userDbSetupPath}`));
    console.log("The orig import: ", file);
    console.log("The obj: ", file.dbConfig);
});
