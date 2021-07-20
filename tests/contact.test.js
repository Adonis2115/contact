const request = require('supertest')
const app = require('../index')
const Contact = require('../models/contact')

const contactOne = {
    name: 'Lalit',
    phone: 9876976012,       
    email: 'ankita07@example.com',
}

test('Should create a new contact', async () => {
     await request(app)
    .post('/add')
    .send({
        name: contactOne.name,
        phone: contactOne.phone,
        email: contactOne.email
    })
    .expect((res) => {id = res.body._id})
    .expect(200)
})