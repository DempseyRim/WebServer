const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

async function findOneListingByName(client, propertyName) {
    const result = await client.db("SDDBDDemo").collection("Datamain").findOne({name: propertyName});
    if (result) {
        console.log(`Found a listing in the collection with the name '${propertyName}':`);
        console.log(result);
    } else {
        console.log(`No listings found with the name '${propertyName}'`);
    }
}

async function main(){

    const uri = "mongodb+srv://RimEliot:Bento123@cluster0.hwach.mongodb.net/SDDBDDemo?retryWrites=true&w=majority";

    const client = new MongoClient(uri, {useUnifiedTopology: true});

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        await findOneListingByName(client,'Cerebron');

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
