'use strict';
const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const schema = require('./model/category.schema.js');
// const Model = require('./model/model.js');
const categoryHandler = require('./lib/router');

const {category} = require ('./model/model.js');

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const app = express();
app.use(cors());
// app.use('/category' , router);

app.listen(PORT , () =>{
  console.log('server is up at ' , PORT);
})
mongoose.connection.once('open' ,() => {
  console.log('MONGODB IS ON!!');
  
});
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/category' , categoryHandler);

router.get('/category' , async (req , res) =>{
  let response = await category.readAll();
  res.send(response);
})

router.post('/category' , async (req , res) =>{
  let response = await category.create();
  res.send(response);
})
function startHandler(){
  app.get('/' , (req , res) =>{
    res.send('HOME PAGE');
  })
}


module.exports = {
  server:app,
  start: startHandler
}









