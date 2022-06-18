const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    image_array: {
        type: String,
        required: true
    },
    set_id: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Image', userSchema);
