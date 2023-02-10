const express = require('express');
const router = express.Router();
const Story = require('../../model/storySchema');

router.put('/:id', async (req, res) => {
    try {
        const data = Story.findById({_id: req.params.id});
        if(!data) {
            res.status(404).json({success: false, message: "Not Found"});
        }
        else{
            const {id, userName} = req.body;
            Story.findByIdAndUpdate({_id: req.params.id}, {
                $push: {
                    all_request: {id: id, userName: userName}
                }
            }).then(() => {
                res.status(200).json({success: true, message: "Sent Request for collaboration"})
            }).catch((err) => {
                res.status(400).json({success: false, message: err.message})
            });
        }
    } catch (error) {
        res.status(500).json({success: false, errro: error.message})
    }
})

module.exports = router;