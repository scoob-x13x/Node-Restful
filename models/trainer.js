const mongoose = require('mongoose')
const Schema = mongoose.Schema; 

const trainerSchema = new Schema({
    Title: { type: String },
    Firstname: { type: String },
    Lastname: { type: String },
    Street: { type: String },
    Postcode: { type: Number },
    City: { type: String },
    Phone: { type: String },
    Mobile: { type: String },
    Mail: { type: String },
    Internet: { type: String },
    Trainerinfo: { type: String }
});
module.exports = mongoose.model('trainer', trainerSchema)