'use strict';
const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const {category} = require ('./model/model.js');

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

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


app.get('/category' , async (req , res) =>{
  let response = await category.readAll();
  res.send(response);
})

app.post('/category' , async (req , res) =>{
  console.log('req.body',req.body);
  let response = await category.create(req.body);
  res.send(response);
})

  app.get('/' , (req , res) =>{
    res.send('HOME PAGE');
  })











