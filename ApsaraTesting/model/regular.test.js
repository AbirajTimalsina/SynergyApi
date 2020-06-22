const regular = require('../../models/regular');
 
 
 
 
 
const mongoose = require('mongoose');
 
 
const testDb = 'mongodb://127.0.0.1/HappyBelly_test'
 
 
 
 
 
beforeAll( async ()=>{
 
 
await mongoose.connect(testDb,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false})
 
 
 
 
 
})
 
 
 
 
 
afterAll(async ()=>{
 
 
await mongoose.connection.dropDatabase();
 
 
await mongoose.connection.close();
 
 
})
 
 
 
 
 
 
 
 
describe('test of regular Schema', ()=>{
 
 
 
 
 
test('should regular',()=>{
 
 
return regular.create({
    regularfoodpicture:'',
    regularfoodname:'momo',
    regularfoodprice:'150',
 

 
 
}).then((response)=>{
 
    expect(response.regularfoodpicture).toBe('');
expect(response.regularfoodname).toBe('momo');
 
expect(response.regularfoodprice).toBe('150');
 
})
 
 
})
})