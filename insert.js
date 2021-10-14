var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

async function findListingByName(client, propertyName, propertyDescription) {
    const result = await client.db("SDDBDemo").collection("datamain").insertOne({name: propertyName, description: propertyDescription});
    if (result) {
        console.log(`Found a listing in the collection with the name '${propertyName}':`);
        console.log(result);
        var y = result;
        return y;
    } else {
        console.log(`No listings found with the name '${propertyName}'`);
    }
}

app.post("/ruta4", async function (req, res) {
    const uri = "mongodb+srv://newuser:5852@cluster0.akgoo.mongodb.net/SDDBDemo?retryWrites=true&w=majority";
    MongoClient.connect(uri, function(err, db) {
        if (err) throw err;
        var varname = req.query.varname;
        var vardesc = req.query.vardesc;
        var dbo = db.db("SDDBDemo");
        var myobj = { name: varname, address: vardesc };
        dbo.collection("datamain").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
      });
      let x = "se registro con exito";
      res.json(x);
    const client = new MongoClient(uri, {useUnifiedTopology: true});
    
});

app.post("/ruta5", async function (req, res) {
    const uri = "mongodb+srv://newuser:5852@cluster0.akgoo.mongodb.net/SDDBDemo?retryWrites=true&w=majority";
    MongoClient.connect(uri, function(err, db) {
        if (err) throw err;
        var varname = req.query.varname;
        var vardesc = req.query.vardesc;
        var dbo = db.db("SDDBDemo");
        var myobj = { name: varname, description: vardesc };
        dbo.collection("datamain").deleteOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document deleted");
          db.close();
        });
      });
      let x = "se borro con exito";
      res.json(x);
    const client = new MongoClient(uri, {useUnifiedTopology: true});
    
});

app.post("/ruta6", async function (req, res) {
    const uri = "mongodb+srv://newuser:5852@cluster0.akgoo.mongodb.net/SDDBDemo?retryWrites=true&w=majority";
    MongoClient.connect(uri, function(err, db) {
        if (err) throw err;
        var varname = req.query.varname;
        var vardesc = req.query.vardesc;
        var varnamen = req.query.varnamen;
        var vardescn = req.query.vardescn;
        var dbo = db.db("SDDBDemo");
        var myobj = { name: varname, description: vardesc };
        var newvalues = {$set:{name: varnamen, description: vardescn}};
        dbo.collection("datamain").updateOne(myobj, newvalues, function(err, res) {
          if (err) throw err;
          console.log("1 document updated");
          db.close();
        });
      });
      let x = "se actualizo con exito";
      res.json(x);
    const client = new MongoClient(uri, {useUnifiedTopology: true});
    
});


app.listen(3000, function() {
    console.log('AplicaciÃ³n ejemplo, escuchando el puerto 3000!');
});
