import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
    throw new Error("MONGO_URL is not defined in the environment variables.");
}

const client = new MongoClient(MONGO_URL);

export async function startMongo(){
    console.log('starting mongo...');
    await client.connect();
    return client.db('square');
}

export default startMongo;
