const multer = require('multer')
const path = require('path')
let URL = "";
console.log("Haoooooooooooo")
var companyLogoStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads');
    },
    filename: async (req, file, callback) => {
        console.log("File ka name", file.originalname);
        var imageUrl = await file.originalname;
        callback(null, imageUrl);
    }
});
const upload = multer({ storage: companyLogoStorage }).single('story_image');
console.log(URL);
module.exports = upload;