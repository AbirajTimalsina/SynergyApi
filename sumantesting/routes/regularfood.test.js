const axios = require('axios');
const baseurl = 'http://localhost:3000/regularfood';

describe ('Regular food test',() =>{
    test('regular food item',async () => {
        let regularfood = await axios.post(baseurl,{
            'regularfoodname':'Friedrice',
            'regularfoodprice':'100',
            'regularfoodpicture':'image-1592552904200.png'
        })
        expect(regularfood.data.regularfoodname).toBe('Friedrice');
        expect(regularfood.data.regularfoodprice).toBe('100');
        expect(regularfood.data.regularfoodpicture).toBe('image-1592552904200.png');
    })
    
})