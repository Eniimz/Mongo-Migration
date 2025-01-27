
import path from 'path'
import { ConnectionPoolClosedEvent, MongoClient } from "mongodb"

type configType = {
    dbName: string,
    host: string,
    credentials: {
        user: string,
        pw: string
    }
}

export const connectToMongo = async () => {

    const cwd = process.cwd()
    const userDbSetupPath = path.join(cwd, "dbSetup.js")        
    const file = (await import (`${userDbSetupPath}`))
    console.log("The orig import: ", file)
    console.log("The obj: ", file.dbConfig);


    const data: configType = file.dbConfig

    const dbName = data.dbName
    const host = data.host
    const user = data.credentials.user
    const password = data.credentials.pw

    const uri = `mongodb+srv://${user}:${password}@${host}/${dbName}?retryWrites=true&w=majority`


    const client = new MongoClient(uri);

    try{
        await client.connect()
        console.log("connected to The Mongo DB")
    }catch(err){
        console.log("Error connecting to DB: ", err)
    }

}