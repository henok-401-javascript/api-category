 'use strict';

 const express = require('express');

 const {category} = require ('../model/model.js');
 const router = express.Router();


 router.get('/category' , async (req , res) =>{
  let response = await category.readAll();
  res.send(response);
})

router.post('/category' , async (req , res) =>{
  let response = await category.create();
  res.send(response);
})


 module.exports = router;

