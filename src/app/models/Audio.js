const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = require('./User');

const Audio = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    fileUrl: { type: String },
    thumbUrl: { type: String },
    author: [User],
    slug: { type: String, slug: 'name', unique: true }
}, {
    timestamps: true
});

module.exports = mongoose.model("Audio", Audio);
