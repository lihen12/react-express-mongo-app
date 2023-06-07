const User = require('../src/User.model')
const mongoose = require('mongoose')

// get all users
const getUsers = async (req, res) => {
    const users = await User.find({}).sort({createdAt: -1})
    try {
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// get single user
const getUser = async (req, res) => {
    const {id} = req.params

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({error: 'No such user'})
        }
    
        const user = await User.findById(id)
    
        if (!user) {
            return res.status(404).json({error: 'No such user'})
        }
    
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// create new user
const createUser = async (req, res) => {
    const {username, value} = req.body

    try {
        const user = await User.create({username, value})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getUsers,
    getUser,
    createUser
}