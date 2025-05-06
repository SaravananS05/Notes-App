const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : String,
    email: {
        type: String,
        required: true,
        unique: [true, 'user with email already exists'],
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    }
},{
    timestamps : true
});

const userModel = mongoose.model('users',userSchema);
module.exports = userModel;