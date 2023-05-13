const express = require('express');
var http = require('http');
const cors = require('cors');
var adminRoutes = require('./routes/admin');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const fs = require('fs');

fs.writeFileSync('readfile.txt','hi this is manish soalnki');
fs.appendFileSync('readfile.txt',' i am good and you');
var app = express();
dotenv.config();


app.use(cors());

app.use('/api/v1/admin',adminRoutes);

app.get("/api/v1/generateToken", (req, res) => {
    // Validate User Here
    // Then generate JWT Token
  
    let jwtSecretKey = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY4MTgyNjM4NywiaWF0IjoxNjgxODI2Mzg3fQ.OD0-ViHwdn1VN6Nt1dYpISUxI8QKRTZlB90OouNIdBg";
    let data = {
        time: Date(),
        userId: 12,
    }
  
    const token = jwt.sign(data, jwtSecretKey);
  
    res.send(token);
});


app.get("/api/v1/validateToken", (req, res) => {
    // Tokens are generally passed in the header of the request
    // Due to security reasons.
  
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY4MTgyNjM4NywiaWF0IjoxNjgxODI2Mzg3fQ.OD0-ViHwdn1VN6Nt1dYpISUxI8QKRTZlB90OouNIdBg";
  console.log(req.headers['authorization']);
    try {
        const token = req.headers['authorization'].split(' ')[1];
   console.log(token);
        const verified = jwt.verify(token, jwtSecretKey);
         console.log(verified);
        if(verified){
            return res.send("Successfully Verified");
        }else{
            // Access Denied
            return res.status(401).send(error);
        }
    } catch (error) {
        // Access Denied
        return res.status(401).send(error);
    }
});


 app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});



module.exports = app;