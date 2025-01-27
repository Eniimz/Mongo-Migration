
import path from 'path'

export const connectToMongo = async () => {

    const cwd = process.cwd()
    const userDbSetupPath = path.join(cwd, "dbSetup.js")        
    const file = (await import (`${userDbSetupPath}`))
    console.log("The orig import: ", file)
    console.log("The obj: ", file.dbConfig);

}