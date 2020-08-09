// creating function for route
describe ('Upcoming food test',() =>{
    test('upcoming food item',async () => {
    })
    
})
//checking  route connection
const axios = require('axios');
const baseurl = 'http://localhost:3000/upcomingfood';

describe ('Upcoming food test',() =>{
    test('upcoming food item',async () => {
        let upcomingfood = await axios.post(baseurl,{
        })
    })
    
})
// creating post function of Upcoming Food route

describe ('Upcoming food test',() =>{
    test('upcoming food item',async () => {
        let upcomingfood = await axios.post(baseurl,{
            'upcomingfoodname':'BuffMomo',
            'upcomingfoodprice':'130',
            'upcomingfoodpicture':'image-1592552904200.png'
        })
        expect(upcomingfood.data.upcomingfoodname).toBe('BuffMomo');
        expect(upcomingfood.data.upcomingfoodprice).toBe('130');
        expect(upcomingfood.data.upcomingfoodpicture).toBe('image-1592552904200.png');
    })
    
})