const express = require('express')
const User = require('../src/User.model');
const router = express.Router()
const {
    getUsers,
    getUser,
    createUser,
} = require('../controllers/userController')

// GET ALL USERS
router.get('/', getUsers)

// GET A SINGLE USER
router.get('/:id', getUser)

// POST A NEW USER
router.post('/', createUser)

// DELETE A USER
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a user'})
})
// UPDATE A USER
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a user'})
})

module.exports = router