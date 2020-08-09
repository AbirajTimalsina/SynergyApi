
// creating function for route
describe ('Item food test',() =>{
    test('item food item',async () => {
        let itemfood = await axios.post(baseurl,{
        })
    })
    
})
//checking  route connection
const axios = require('axios');
const baseurl = 'http://localhost:3000/item';

describe ('Item food test',() =>{
    test('item food item',async () => {
        let itemfood = await axios.post(baseurl,{
  
        })

    })
    
})
// creating post function of Item route
describe ('Item food test',() =>{
    test('item food item',async () => {
        let itemfood = await axios.post(baseurl,{
            'itemname':'BuffMomo',
            'itemprice':'130',
            'itemingredient':'Buffmins',
            'itempicture':'image-1592552904200.png'
        })
        expect(itemfood.data.itemname).toBe('BuffMomo');
        expect(itemfood.data.itemprice).toBe('130');
        expect(itemfood.data.itemingredient).toBe('Buffmins');
        expect(itemfood.data.itempicture).toBe('image-1592552904200.png');
    })
    
})