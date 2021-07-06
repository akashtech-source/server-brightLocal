const express = require('express')
const { MongoClient } = require('mongodb');
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("This is Brightlocal Server")
  })


  

const uri = "mongodb+srv://brightLocal:Blockchai9@cluster0.apc6x.mongodb.net/bright?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    console.log('connection error', err);
  const partnerCollection = client.db("bright").collection("customer");
  // perform actions on the collection object
  console.log('database connected');

  app.get('/partners', (req, res) => {
    partnerCollection.find()
    .toArray((err, items) => {
        res.send(items)
        console.log('from db', items);
    })
  })

    app.post('/addPartner', (req, res) => {
        const newPartner = req.body;
        console.log('adding new partner', newPartner);
        partnerCollection.insertOne(newPartner)
        .then(result => {
            console.log('inserted count',result.insertedCount);
            res.send(result.insertedCount > 0)
        })
    })

//   client.close();
});


  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })