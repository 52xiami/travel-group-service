const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        trim: true,
    },
    name: {
        type: String,
        trim: true,
        require: true
    },
    email: {
        type: String,
        trim: true,
        require: true
    },
    role: {
        type: String,
        trim: true,
        required: true
    }
}
);

module.exports = mongoose.model('User', userSchema);