const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

const dburi = 'mongodb+srv://adilshahid93:adil%401993@firstmongo.asbuc.mongodb.net/?retryWrites=true&w=majority&appName=FirstMongo';
mongoose.connect(dburi, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result)=> console.log('connected to db'))
.catch((err)=>console.log(err));


app.listen(3000);

//mongodb+srv://adilshahid93:adil@1993@firstmongo.asbuc.mongodb.net/?retryWrites=true&w=majority&appName=FirstMongo