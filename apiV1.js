const express = require('express');
require('dotenv').config();
const routes = require('./routes/admin');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://manishsolanki1989:manish0123@nodejs.xliaiar.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  } 
});

routes.get('/getAll', (req, res) => {
     
    let userToken = getAll()
       
    userToken.then(function(result) {
      res.send(result) // "Some User token"
    })

    //   return new Promise((resolve, reject) => 
	// { 
    //     const customer =  getAll();
    //     console.log(customer);
    //     resolve(customer);

    // })
      
});


async function getAll(){
    await client.connect();
    const dbName = "sample_analytics";
    const collectionName = "customers";
    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    const userdata = await collection.find({}).toArray();
   
    return userdata;
   


    await client.close();
}

// async function run() {
//     try {
//       // Connect the client to the server	(optional starting in v4.7)
//       await client.connect();
//       // Send a ping to confirm a successful connection
//        const dbName = "sample_analytics";
//        const collectionName = "customers";

//        const database = client.db(dbName);
//        const collection = database.collection(collectionName);

//        const findQuery = { username: "wesley20" };
       
//        const cursor = await collection.findOneAndUpdate(findQuery,{$set:{'address':"yyyyyyyyyyyy"}});  
//       // await cursor.forEach(accounts => {
//         console.log(cursor);
//       // })
//     } finally {
//       // Ensures that the client will close when you finish/error
//       await client.close();
//     }






//   }
//   run().catch(console.dir);

const app = express();
app.use('/api', routes);
app.use(express.json());
app.listen(3000, () => {
    console.log(`Server Started at 3000`)
})

