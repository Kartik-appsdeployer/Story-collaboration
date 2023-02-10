const mongoose = require('mongoose');
const {Schema} = mongoose;

const StorySchema = Schema({
    authorName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    author: {
        type: String,
    },
    story_title: {
        type: String,
        required: true
    },
    story_description: {
        type: String,
        required: true
    },
    story_image: {
        type: String
    },
    marks_as_completed: {
        type: Boolean,
        default: false
    },
    accepted_request:[{
        type: String
    }],
    all_request: [{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
        userName: {
            type: String
        }
    }],
    date: {
        type: Date,
        default: Date.now
    }
})


const Story = mongoose.model("story_schema", StorySchema);
module.exports = Story;