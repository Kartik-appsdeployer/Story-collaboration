const express = require('express');
const router = express.Router();
const User = require('../../model/userSchema')
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

router.post('/',[body('password', "Password cannot be blank").exists(),
body('email', 'Enter a Valid Email').isEmail()], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {email, password} = req.body;
    try {
        let user = await User.findOne({email: email});
        if(!user){
            return res.status(400).json({error: "Login with correct credentials"});
        }
        const passcompare = await bcryptjs.compare(password, user.password);
        if(!passcompare) {
            return res.status(400).json({error: "Login with correct credentials"});
        }
        data = {
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            }
        }
        const authToken = jwt.sign(data, 'privateKey');
        res.status(200).json({success: true, message: "Logged in!!", authToken: authToken})
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
})

module.exports = router;