const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
    name: {
        type: String

    },
    yearEstablished: {
        type: Number,
        min: 0
    },
    region: {
        type: String,
        enum: ["West", "Midwest", "Southwest", "Southeast", "Northeast"]
    }
})


module.exports = mongoose.model('State', stateSchema)