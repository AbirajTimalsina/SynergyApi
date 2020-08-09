const login = require('../../models/users');

 
 

 
const mongoose = require('mongoose');

 
const testDb = 'mongodb://127.0.0.1/HappyBelly_test'

 
 

 
beforeAll( async ()=>{

 
await mongoose.connect(testDb,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false})

 
 

 
})

 
 

 
afterAll(async ()=>{

 
await mongoose.connection.dropDatabase();

 
await mongoose.connection.close();

 
})

 
 

 
 

 
describe('test of User Schema', ()=>{

 
 

 
test('should login user',()=>{

 
return login.create({

phonenumber:'9874569874',

password:'1234',

 
}).then((response)=>{

  
expect(response.phonenumber).toBe('9874569874');
 
expect(response.password).toBe('1234');
 
})

 
})
})