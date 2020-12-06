const crypto = require('crypto');
const express = require('express');
const router = express.Router();
const { User } = require('../models/users.model');
const auth = require("../middleware/auth");




router.post('/register', async (req, res) => {
    const { username, password, role } = req.body;

    let user = await User.findOne({ username });
    if (user) return res.status(400).send("User already registered.");


    user = new User({
        username, password, role
    });
    user.hashPassword();

    try {
        await user.save();
        user = user.toObject();
        delete user.password;
        res.send(user);
    } catch (ex) {
        res.status(400).send(ex.message);
    }

});


router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) return res.status(400).send('Invalid username or password.');

    const result = user.comparePassword(password);
    if (!result) return res.status(400).send('Invalid username or password.');

    const token = user.generateAuthToken();

    res.send(token);

});


module.exports = router;