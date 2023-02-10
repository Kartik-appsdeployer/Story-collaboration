const express = require('express');
const router = express.Router();
const Story = require('../../model/storySchema');
const upload = require('../upload_fiiles');

router.post('/', upload, async (req, res) => {
    try {
        const {authorName,author, story_title, story_description, story_image} = req.body;
        Story.create({
            authorName: authorName,
            author: author,
            story_title: story_title,
            story_description: story_description,
            story_image: story_image
        }).then((obj) => {
            res.status(201).json({success: true, status: "Added Your Story!", message: obj});
        }).catch((err) => {
            res.status(400).json({success: false, message: err.message})
        })
    } catch (error) {
        res.status(500).json({success: false, errro: error.message})
    }
})

module.exports = router;