'use strict';
const schema = require('./category.schema.js');
class Model{
 constructor(schema){
   this.schema = schema;
 }
 async readAll() {
  let result = await this.schema.find();
  return result;
}
 async create(data){
   console.log('schema',data)
   let result = await this.schema.create(data);
   return result.save();
 }
 async update(){}
 async delete(){}
 
}


module.exports = {
  category : new Model(schema)
}