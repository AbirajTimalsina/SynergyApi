const axios = require('axios');
const baseurl = 'http://localhost:3000/users';


// Register Router Testing

// creating function for route
describe('Users Route Test', () => {
    test('sign up of new user', () => {
       
    }) 
})

//checking  route connection
describe('Users Route Test', () => {
    let token;
    test('sign up of new user', () => {
        return axios.post(baseurl + '/signup', {
        }).then((response) => {
        }).catch((err) => {    
        })
    })
 
})

// creating Register function of User
describe('Users Route Test', () => {
    let token;
    test('sign up of new user', () => {
        return axios.post(baseurl + '/signup', {
            fullname: 'sabin123',
            phonenumber: '9860560147',
            email:'sabin12aaa4@gmail.com',
            password:'1234567'
 
        }).then((response) => {
            expect(response.data.status).toMatch('Signup Success!');
        }).catch((err) => {
             expect(err.response.status).toBe(500);
            expect(err.response.data.status).toMatch('This email has been already used');
        })
    })
})

 // Login Route Testing

 // creating function for route
 const axios = require('axios');
 const baseurl = 'http://localhost:3000/users';
 test('login of existing user', () => {

})

//checking  route connection
test('login of existing user', () => {
    return axios.post(baseurl + '/login', {
    }).then((response) => {
    }).catch((err) => {

    })
})

// creating Login function of User

test('login of existing user', () => {
    return axios.post(baseurl + '/login', {
        phonenumber: '9860560148',
        password: '1234567'
    }).then((response) => {
        token = response.data.token;
        expect(response.status).toBe(200);
        expect(response.data.status).toMatch('Successfully logged in');
    }).catch((err) => {
        expect(err.response.status).toBe(500);
    })
})

