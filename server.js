const express = require('express')
const server = express()

// Addition function
function add(a, b) {
    return a + b
}

// GET /add?a=5&b=3
server.get('/add', async (req, res) => {
    const a = Number(req.query.a)
    const b = Number(req.query.b)

    const result = add(a, b)

    res.json({
        result: result
    })
})

module.exports = server