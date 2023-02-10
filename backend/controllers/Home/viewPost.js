const express = require('express');
const router = express.Router();
const Story = require('../../model/storySchema');

router.get('/:id', async (req, res) => {
    try {
        const data = await Story.findById({_id: req.params.id});
        if(!data){
            res.status(404).json({success: false, message: "Not Found"})
        }
        else{
            res.status(200).json({success: true, message: data});
        }
    } catch (error) {
        res.status(500).json({success: false, errro: error.message})
    }
})

module.exports = router;