// const express = require('express');
// const morgan = require('morgan');
// const mongoose = require('mongoose');
// const app = express();

//     // const dburi = 'mongodb+srv://adilshahid93:adil%401993@firstmongo.asbuc.mongodb.net/?retryWrites=true&w=majority&appName=FirstMongo';
//     // mongoose.connect(dburi, { useNewUrlParser: true, useUnifiedTopology: true })
//     // .then((result)=> console.log('connected to db'))
//     // .catch((err)=>console.log(err));


// app.listen(8383,()=>{
//     console.log("listening on port 8383")
// });

const http = require('http');
const { chunk } = require('lodash');
    let body = '';
const server = http.createServer((req,res)=>{
    req.on('data',chunk=>{
        body += chunk.toString();
        
    })
    req.on('end',()=>{
        
        console.log(body);
        
    })
    
});

server.listen(8383,'localhost',()=>{
    console.log("listening on 8383")
})