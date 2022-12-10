const express = require('express');
const bcrypt = require('bcrypt');
const user = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = "thisiswebtokensecret";

var jwt = require('jsonwebtoken');

//Creating a user using POST /api/auth/signup request.
router.post('/get_hotels', async (req, res) => {
    let success = false;
    
    try {
        let exist = await user.findOne({ email: req.body.email });
        if (exist) {
            return res.status(400).json({success,  error: "Sorry a user with this email already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        let newuser = await user.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        });
        const data = {
            user: {
                id: newuser._id
            }
        }
        success = true
        const token = jwt.sign(data, JWT_SECRET);
        res.send({success, token});
    } catch (error) {
        res.status(500).send("Internal Server Error Occurred. Please Try Again.")
    }
})


module.exports = router