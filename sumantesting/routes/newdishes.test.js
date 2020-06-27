const axios = require('axios');
const baseurl = 'http://localhost:3000/newdishesfood';

describe ('NewDishes food test',() =>{
    test('newdishes food item',async () => {
        let newdishesfood = await axios.post(baseurl,{
            'newdishesname':'BuffMomo',
            'newdishesprice':'130',
            'newdishespicture':'image-1592552904200.png'
        })
        expect(newdishesfood.data.newdishesname).toBe('BuffMomo');
        expect(newdishesfood.data.newdishesprice).toBe('130');
        expect(newdishesfood.data.newdishespicture).toBe('image-1592552904200.png');
    })
    
})