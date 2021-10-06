
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://RimEliot:Bento123@cluster0.hwach.mongodb.net/SDDBDDemo?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("SDDBDDemo").collection("Datamain");
  // perform actions on the collection object
  console.log("Connected to Server");
  client.close();
});
