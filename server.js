var app = require('./app');
var MongoClient = require('mongoose');
var url = 'mongodb+srv://ramyadav:NQ8gcNc0sfQI2zmZ@cluster0.qg7cj.mongodb.net/db_crypto?retryWrites=true&w=majority';


MongoClient
  .connect(url, {
    useNewUrlParser: true,
    //useCreateIndex: true,
    //useFindAndModify: false
  })
  .then(() => console.log('DB connection successful!'));


 app.listen(3000,()=>{
 	console.log('sever 12is running');
 });