const bcrypt = require('bcryptjs')
const User = require("../models/user.model");
const generateTokenAndSetCookie = require('../utils/generateToken');

const login = async (req, res) => {
    try {
        const { userName, password } = req.body
        const user = await User.findOne({ userName })
        if (!user) {
            return res.status(400).json({ error: 'Username does not exist!' })
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswordCorrect) {
            return res.status(400).json({ error: 'Password is not correct!' })
        }
        generateTokenAndSetCookie(user._id, res)
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,
            profilePicture: user.profilePicture
        })
    } catch (error) {
        console.log('Error in login controller', error.message);
        res.status(500).json({ error: 'Internal server error' })
    }
}
const logout = async (req, res) => {
    try {
        res.cookie('jwt', '', { maxAge: 0 })
        res.status(200).json({ message: 'Logout successfully!' })
    } catch (error) {
        console.log('Error in logout controller', error.message);
        res.status(500).json({ error: 'Internal server error' })
    }
}
const signup = async (req, res) => {
    try {
        const { fullName, userName, password, confirmedPassword, gender } = req.body
        if (password !== confirmedPassword) {
            res.status(400).json({ error: "Passwords don't match" })
        }
        const user = await User.findOne({ userName })
        if (user) {
            res.status(400).json({ error: "Username already exists" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`

        const newUser = new User({
            fullName,
            userName,
            password: hashedPassword,
            gender,
            profilePicture: gender === 'male' ? boyProfilePic : girlProfilePic
        })
        if (newUser) {
            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save()
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                profilePicture: newUser.profilePicture
            })
        }
        else {
            res.status(400).json({ error: "Invalid user data" })
        }
    } catch (error) {
        console.log('Error in signing up controller', error.message);
        res.status(500).json({ error: 'Internal server error' })
    }
}

module.exports = { login, logout, signup }