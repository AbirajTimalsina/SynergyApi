const axios = require('axios');

const baseurl = 'http://localhost:3000/users';

describe('Users Route Test', () => {
    let token;
    test('sign up of new user', () => {
        return axios.post(baseurl + '/signup', {
            fullname: 'sabin123',
            phonenumber: '9860560148',
            email:'sabin12aaa3@gmail.com',
            password:'1234567'

        }).then((response) => {
            expect(response.data.status).toMatch('Signup Success!');
        }).catch((err) => {
             expect(err.response.status).toBe(500);
            expect(err.response.data.status).toMatch('This email has been already used');
        })
    })

    test('login of existing user', () => {
        return axios.post(baseurl + '/login', {
            phonenumber: '9860560109',
            password: '1234'
        }).then((response) => {
            token = response.data.token;
            expect(response.status).toBe(200);
            expect(response.data.status).toMatch('Successfully logged in');
        }).catch((err) => {
            expect(err.response.status).toBe(500);
        })
    })

})