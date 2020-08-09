const Item = require('../../models/Item');
 
 
 
 
 
const mongoose = require('mongoose');
 
 
const testDb = 'mongodb://127.0.0.1/HappyBelly_test'
 
 
 
 
 
beforeAll( async ()=>{
 
 
await mongoose.connect(testDb,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false})
 
 
 
 
 
})
 
 
 
 
 
afterAll(async ()=>{
 
 
await mongoose.connection.dropDatabase();
 
 
await mongoose.connection.close();
 
 
})
 
 
 
 
 
 
 
 
describe('test of item Schema', ()=>{
 
 
 
 
 
test('should item',()=>{
 
 
return Item.create({
itemname:'puri',
itemprice:'rs:900',
itemingredient:'alutarkari',
itempicture:''
    
}).then((response)=>{
    expect(response.itemname).toBe('puri');
expect(response.itemprice).toBe('rs:900');
expect(response.itemingredient).toBe('alutarkari');
expect(response.itempicture).toBe(''); 
})
 
 
})
})