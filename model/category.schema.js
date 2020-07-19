'use strict';


const mongoose = require('mongoose');


const schema = mongoose.Schema({
count:{type:'number' , require:true},
category: { type: 'String', required: true},
currentCategory:{type:'string' , require:true},
categoryDisplayName: { type: 'String', required: true},

}) 


let model = mongoose.model('category' , schema);

module.exports = model;

