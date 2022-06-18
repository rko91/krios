const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    file: {
        type: String,
        require: true
    },
    created: {
        type: Date,
        required: true
    },
    set_id: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Image', imageSchema);
