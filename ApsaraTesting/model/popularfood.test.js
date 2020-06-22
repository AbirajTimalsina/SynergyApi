const popularfood = require('../../models/popularfood');
 
 
 
 
 
const mongoose = require('mongoose');
 
 
const testDb = 'mongodb://127.0.0.1/HappyBelly_test'
 
 
 
 
 
beforeAll( async ()=>{
 
 
await mongoose.connect(testDb,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false})
 
 
 
 
 
})
 
 
 
 
 
afterAll(async ()=>{
 
 
await mongoose.connection.dropDatabase();
 
 
await mongoose.connection.close();
 
 
})
 
 
 
 
 
 
 
 
describe('test of popularfood Schema', ()=>{
 
 
 
 
 
test('should popularfood',()=>{
 
 
return popularfood.create({
    popularfoodpicture:'',
    popularfoodname:'pizza',
    popularfoodprice:'250',
 

 
 
}).then((response)=>{
 
    expect(response.popularfoodpicture).toBe('');
expect(response.popularfoodname).toBe('pizza');
 
expect(response.popularfoodprice).toBe('250');
 
})
 
 
})
})