const express = require('express');
const router = express.Router();
const Story = require('../../model/storySchema');

router.get('/', async (req, res) => {
    try {
        const data = await Story.find();
        if(!data) {
            res.status(404).json({success: false, message: "Empty"});
        }
        else{
            res.status(200).json({success: true, message: data});
        }
    } catch (error) {
        res.status(500).json({success: false, errro: error.message})
    }
})

module.exports=  router;