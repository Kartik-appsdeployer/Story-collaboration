const express = require('express');
const router = express.Router();
const Story = require('../../model/storySchema');

router.delete('/:id', async (req, res) => {
    try {
        const Data = await Story.findById({_id: req.params.id});
        if(!Data) {
            res.status(404).json({success: false, message: "Not Found"});
        }
        else{
            Story.findByIdAndUpdate({_id: req.params.id}, {
                $set: {
                    marks_as_completed: true
                }
            }).then(() => {
                res.status(200).json({success: true, message: "Done"})
            }).catch((err) => {
                res.status(400).json({success: false, message: err.message})
            })
        }
    } catch (error) {
        res.status(500).json({success: false, errro: error.message})
    }
})

module.exports = router;