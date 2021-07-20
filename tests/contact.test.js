const request = require('supertest')
const app = require('../index')
const Contact = require('../models/contact')

const contactOne = {
    name: 'Lalit',
    phone: 9876976012,       
    email: 'ankita07@example.com',
}

const contactTwo = {
    name: 'Mangal',
    phone: 9567432879,       
    email: 'mangal@example.com',
}

beforeAll(async () => {
    await Contact.deleteMany()
})

var id

test('Should create a new contact', async () => {
     await request(app)
    .post('/add')
    .send({
        name: contactOne.name,
        phone: contactOne.phone,
        email: contactOne.email
    })
    .expect((res) => {
        id = res.body._id
        })
    .expect(200)
})

test('Should read all contact', async () => {
    const response = await request(app).get('/list')
    .expect(200)
    expect(response.body[0].name).toEqual(contactOne.name)
})

test('Should read a contact', async () => {
    const response = await request(app).get(`/read/${id}`)
    .expect(200)
    expect(response.body.name).toEqual(contactOne.name)
})

test('Should update a contact', async () => {
    const response = await request(app)
    .patch(`/update/${id}`)
    .send({
        name: contactTwo.name,
        phone: contactTwo.phone,
        email: contactTwo.email
    })
    .expect(200)
    expect(response.body.name).toEqual(contactTwo.name)
})

test('Should delete a contact', async () => {
    const response = await request(app).delete(`/delete/${id}`)
    .expect(200)
})