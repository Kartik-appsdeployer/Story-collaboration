const express = require('express');
const { body } = require('express-validator');
const { validationResult } = require('express-validator/src/validation-result');
const router = express.Router();
const bcrypt = require('bcryptjs')
const User = require('../../model/userSchema');

router.post('/',[
    body('name', 'Enter a valid name').isLength({ min: 1 }),
    body('email', 'enter a valid email').isEmail()
],  async (req, res) => {
    const errors = validationResult(req);
    const { name, email, password } = req.body;
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    else {
        try {
            let user = await User.findOne({ email: email });
            if (user) {
                return res.status(400).json({ success: false, message: "User Already exists with this mail I'd" })
            }
            const salt = await bcrypt.genSaltSync(10);
            const encryptpassword = await bcrypt.hash(password, salt);
            user = await User.create({
                name: name,
                email: email,
                password: encryptpassword
            })
            console.log("User Created");
            res.json({ success: true, message: "Successfully Created User" })
        } catch (error) {
            res.status(400).json({ success: false, error: error.error });
        }
    }
})

module.exports = router;