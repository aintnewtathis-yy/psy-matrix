import { MongoClient } from "mongodb";

const MONGO_URL = 'mongodb+srv://ilya:AZ2245688q@squaree.1t6swlt.mongodb.net/';

if (!MONGO_URL) {
    throw new Error("MONGO_URL is not defined in the environment variables.");
}

const client = new MongoClient(MONGO_URL);

export function startMongo(){
    console.log('starting mongo...');
    return client.connect();
}

export default client.db('square');
