const User = require("../models/user.model");

const login = (req, res) => {
    console.log('Auth login');
}
const logout = (req, res) => {
    console.log('Auth logout');
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
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`

        const newUser = new User({
            fullName,
            userName,
            password,
            gender,
            profilePicture: gender === 'male' ? boyProfilePic : girlProfilePic
        })
        await newUser.save()
        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            userName: newUser.userName,
            profilePicture: newUser.profilePicture
        })
    } catch (error) {
        console.log('Error in signing up controller', error.message);
        res.status(500).json({ error: 'Internal server error' })
    }
}

module.exports = { login, logout, signup }