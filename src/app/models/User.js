const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
    name: { type: String, maxLength: 255 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = User;
