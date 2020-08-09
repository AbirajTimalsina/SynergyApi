const upcomingfood = require('../../models/upcoming');
 
 
 
 
 
const mongoose = require('mongoose');
 
 
const testDb = 'mongodb://127.0.0.1/HappyBelly_test'
 
 
 
 
 
beforeAll( async ()=>{
 
 
await mongoose.connect(testDb,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false})
 
 
 
 
 
})
 
 
 
 
 
afterAll(async ()=>{
 
 
await mongoose.connection.dropDatabase();
 
 
await mongoose.connection.close();
 
 
})
 
 
 
 
 
 
 
 
describe('test of upcoming Schema', ()=>{
 
 
 
 
 
test('should upcoming',()=>{
 
 
return upcomingfood.create({
    upcomingfoodpicture:'',
    upcomingfoodname:'cheesepasta',
    upcomingfoodprice:'450',
 

 
 
}).then((response)=>{
 
    expect(response.upcomingfoodpicture).toBe('');
expect(response.upcomingfoodname).toBe('cheesepasta');
 
expect(response.upcomingfoodprice).toBe('450');
 
})
 
 
})
})