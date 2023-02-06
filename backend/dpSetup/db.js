const mongoose = require('mongoose');
const dbURI = "mongodb://localhost:27017/storyCollaboration"

const connectdb = async () => {
    mongoose.set('strictQuery', false);
    await mongoose.connect(dbURI).then(() => console.log("Database connected successfully")).catch((error) => console.log("Error in connecting", error
    ))
}

module.exports = connectdb;