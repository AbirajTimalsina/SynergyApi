// creating function for route
describe ('Popular food test',() =>{
    test('popular food item',async () => {
       
})
})
//checking  route connection
const axios = require('axios');
const baseurl = 'http://localhost:3000/popularfood';
describe ('Popular food test',() =>{
    test('popular food item',async () => {
        let popularfood = await axios.post(baseurl,{
        })
    })
    
})
// creating post function of Popular Food route

describe ('Popular food test',() =>{
    test('popular food item',async () => {
        let popularfood = await axios.post(baseurl,{
            'popularfoodname':'BuffMomo',
            'popularfoodprice':'130',
            'popularfoodpicture':'image-1592552904200.png'
        })
        expect(popularfood.data.popularfoodname).toBe('BuffMomo');
        expect(popularfood.data.popularfoodprice).toBe('130');
        expect(popularfood.data.popularfoodpicture).toBe('image-1592552904200.png');
    })
    
})