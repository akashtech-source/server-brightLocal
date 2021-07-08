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
  const reviewCollection = client.db("bright").collection("review");
  const grid1Collection = client.db("bright").collection("grid1");
  const grid2Collection = client.db("bright").collection("grid2");
  const grid3Collection = client.db("bright").collection("grid3");
  const grid4Collection = client.db("bright").collection("grid4");
  const grid5Collection = client.db("bright").collection("grid5");
  const testimonialCollection = client.db("bright").collection("testimonial");
  const starCollection = client.db("bright").collection("star");
  // perform actions on the collection object
  console.log('database connected');

  app.get('/partners', (req, res) => {
    partnerCollection.find()
    .toArray((err, items) => {
        res.send(items)
        console.log('from db', items);
    })
  })

  app.get('/review', (req, res) => {
    reviewCollection.find()
    .toArray((err, items) => {
        res.send(items)
        console.log('from db', items);
    })
  })

  app.get('/grid1', (req, res) => {
    grid1Collection.find()
    .toArray((err, items) => {
        res.send(items)
        console.log('from db', items);
    })
  })

  app.get('/grid2', (req, res) => {
    grid2Collection.find()
    .toArray((err, items) => {
        res.send(items)
        console.log('from db', items);
    })
  })

  app.get('/grid3', (req, res) => {
    grid3Collection.find()
    .toArray((err, items) => {
        res.send(items)
        console.log('from db', items);
    })
  })

  app.get('/grid4', (req, res) => {
    grid4Collection.find()
    .toArray((err, items) => {
        res.send(items)
        console.log('from db', items);
    })
  })

  app.get('/grid5', (req, res) => {
    grid5Collection.find()
    .toArray((err, items) => {
        res.send(items)
        console.log('from db', items);
    })
  })

  app.get('/testimonial', (req, res) => {
    testimonialCollection.find()
    .toArray((err, items) => {
        res.send(items)
        console.log('from db', items);
    })
  })

  app.get('/star', (req, res) => {
    starCollection.find()
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

    app.post('/addReview', (req, res) => {
        const newReview = req.body;
        console.log('adding new review', newReview);
        reviewCollection.insertOne(newReview)
        .then(result => {
            console.log('inserted count',result.insertedCount);
            res.send(result.insertedCount > 0)
        })
    })

    app.post('/addGrid1', (req, res) => {
        const newGrid1 = req.body;
        console.log('adding new review', newGrid1);
        grid1Collection.insertOne(newGrid1)
        .then(result => {
            console.log('inserted count',result.insertedCount);
            res.send(result.insertedCount > 0)
        })
    })

    app.post('/addGrid2', (req, res) => {
        const newGrid2 = req.body;
        console.log('adding new review', newGrid2);
        grid2Collection.insertOne(newGrid2)
        .then(result => {
            console.log('inserted count',result.insertedCount);
            res.send(result.insertedCount > 0)
        })
    })

    app.post('/addGrid3', (req, res) => {
        const newGrid3 = req.body;
        console.log('adding new review', newGrid3);
        grid3Collection.insertOne(newGrid3)
        .then(result => {
            console.log('inserted count',result.insertedCount);
            res.send(result.insertedCount > 0)
        })
    })

    app.post('/addGrid4', (req, res) => {
        const newGrid4 = req.body;
        console.log('adding new review', newGrid4);
        grid4Collection.insertOne(newGrid4)
        .then(result => {
            console.log('inserted count',result.insertedCount);
            res.send(result.insertedCount > 0)
        })
    })

    app.post('/addGrid5', (req, res) => {
        const newGrid5 = req.body;
        console.log('adding new review', newGrid5);
        grid5Collection.insertOne(newGrid5)
        .then(result => {
            console.log('inserted count',result.insertedCount);
            res.send(result.insertedCount > 0)
        })
    })

    app.post('/addTestimonial', (req, res) => {
        const newTestimonial = req.body;
        console.log('adding new review', newTestimonial);
        testimonialCollection.insertOne(newTestimonial)
        .then(result => {
            console.log('inserted count',result.insertedCount);
            res.send(result.insertedCount > 0)
        })
    })

    app.post('/addStar', (req, res) => {
        const newStar = req.body;
        console.log('adding new review', newStar);
        starCollection.insertOne(newStar)
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