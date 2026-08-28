require("dotenv").config();

const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI);

async function main() {
  await client.connect();
  console.log("Connected to MongoDB");
}

main();