const express = require('express')
const router = express.Router()
const MOCK_ROOMS = require('../data/mock_rooms')

router.get('/', (req, res) => {
    res.json('test')
})

router.get('/api/mock-rooms', (req, res) => {
    const limitParams = req.query.limit
    
    if(!limitParams){
        return res.json({
            message: "succcess",
            rooms: MOCK_ROOMS
        })   
    }

    const limit = Number(limitParams)
    if(Number.isNaN(limit) || limit < 0){
        return res.status(400).json({ message: "Limit value error" })
    }

    const limitedRoom = MOCK_ROOMS.slice(0, limit)
    return res.json({
        message: "Success",
        rooms: limitedRoom
    })
})

module.exports = router