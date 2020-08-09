
// creating function for route
describe('Fastfood Route Test',() =>{
    let fastfood;
    test('fastfood items', async()=>{
        let ffood = await axios.post(baseurl,{
        })
    })
})

//checking  route connection
const axios = require('axios');
const baseurl = 'http://localhost:3000/fastfood';
describe('Fastfood Route Test',() =>{
    let fastfood;
    test('fastfood items', async()=>{
        let ffood = await axios.post(baseurl,{
        })

    })
})

// creating post function of fastfood route
describe('Fastfood Route Test',() =>{
    let fastfood;
    test('fastfood items', async()=>{
        let ffood = await axios.post(baseurl,{
            'fastfoodname':'momo',
            'fastfoodprice': '120',
            'fastfoodpicture': 'image-1592552904200.png'
        })
        expect(ffood.data.fastfoodname).toBe('momo');
        expect(ffood.data.fastfoodprice).toBe('120');
        expect(ffood.data.fastfoodpicture).toBe('image-1592552904200.png');
    })
})