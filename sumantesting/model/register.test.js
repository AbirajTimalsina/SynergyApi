const register = require('../../models/users');

 
 

 
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

 
 

 
test('should create a new user',()=>{

 
return register.create({

 
fullname:'Suman Shahi',

 
phonenumber:'9874569874',

 
email:'s123@gmail.com',

 
password:'1234',

profile_image:'image-1592552904200.png',


 
}).then((response)=>{

 
expect(response.fullname).toBe('Suman Shahi');

 
expect(response.phonenumber).toBe('9874569874');

 
expect(response.email).toBe('s123@gmail.com');

 
expect(response.password).toBe('1234');

expect(response.profile_image).toBe('image-1592552904200.png');
 
})

 
})

 
 

 
// test('should update a place',()=>{

 
// return place.findOne({'name' : 'Fewa Lake','location':'Pokhara','description':'This famous place','image':'pic.jpg'})

 
 

 
// .then((place)=>{

 
// place.name = 'Maya Devi Temple',

 
// place.location = 'Lumbini',

 
// place.description = 'This Birth Place of Gautam Buddha',

 
// place.image = 'pic2.jpg';

 
// place.save().then((response)=>{

 
// expect(response.name).toBe('Maya Devi Temple'),

 
// expect(response.location).toBe('Lumbini'),

 
// expect(response.description).toBe('This Birth Place of Gautam Buddha'),

 
// expect(response.image).toBe('pic2.jpg');

 
 

 
// })

 
// })

 
// });

 
 

 
 

 
})