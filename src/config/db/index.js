const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connect successfully!");
    } catch (err) {
        console.log("Connect failure!");
        console.log("Error: ", err);
    }
}

module.exports = { connect };
