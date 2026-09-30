const request = require('supertest')
const server = require('../server')

describe('GET /add', () => {
    test('should return the addition of two numbers', async () => {
        const response = await request(server)
            .get('/add?a=5&b=3')

        expect(response.statusCode).toBe(200)

        expect(response.body).toEqual({
            result: 8
        })
    })
})