
//creating function
describe('test of newdishes Schema', ()=>{
test('should newdishes',()=>{
return newdishes.create({ 
})
})
})


//checking connection
const mongoose = require('mongoose');
const testDb = 'mongodb://127.0.0.1/HappyBelly_test'
beforeAll( async ()=>{
await mongoose.connect(testDb,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false}) 
})
afterAll(async ()=>{
await mongoose.connection.dropDatabase();
await mongoose.connection.close();
})
describe('test of newdishes Schema', ()=>{
test('should newdishes',()=>{
return newdishes.create({
})
})
})

// checking function without creating model

const mongoose = require('mongoose');
const testDb = 'mongodb://127.0.0.1/HappyBelly_test'
beforeAll( async ()=>{
await mongoose.connect(testDb,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false}) 
})
afterAll(async ()=>{
await mongoose.connection.dropDatabase();
await mongoose.connection.close();
})
describe('test of newdishes Schema', ()=>{
test('should newdishes',()=>{
return newdishes.create({
    newdishespicture:'',
    newdishesname:'chillifry',
    newdishesprice:'300',
}).then((response)=>{ 
expect(response.newdishespicture).toBe('');
expect(response.newdishesname).toBe('chillifry');
expect(response.newdishesprice).toBe('300');
})
})
})

// function after creating model for new dishes


const newdishes = require('../../models/newdishes');
const mongoose = require('mongoose');
const testDb = 'mongodb://127.0.0.1/HappyBelly_test'
beforeAll( async ()=>{
await mongoose.connect(testDb,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false}) 
})
afterAll(async ()=>{
await mongoose.connection.dropDatabase();
await mongoose.connection.close();
})
describe('test of newdishes Schema', ()=>{

test('should newdishes',()=>{
 
 
return newdishes.create({
    newdishespicture:'',
    newdishesname:'chillifry',
    newdishesprice:'300',
}).then((response)=>{
 
    expect(response.newdishespicture).toBe('');
expect(response.newdishesname).toBe('chillifry');
 
expect(response.newdishesprice).toBe('300');
 
})
})
})