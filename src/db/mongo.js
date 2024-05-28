import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
    throw new Error("MONGO_URL is not defined in the environment variables.");
}

const client = new MongoClient(MONGO_URL);

export function startMongo(){
    console.log('starting mongo...');
    return client.connect();
}

export default client.db('square');
