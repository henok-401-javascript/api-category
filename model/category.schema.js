'use strict';


const mongoose = require('mongoose');


const schema = mongoose.Schema({
count:{type:'number' , require:true},
category: [{ type: 'String', required: true}],
currentCategory:{type:'string' , require:true},
image:{type:'string' , require:true}
}) 

let model = mongoose.model('categories' , schema);

module.exports = model;

