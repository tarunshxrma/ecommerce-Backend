const mongoose = require('mongoose');

const user = new mongoose.Schema({
    username: {
        type: String,
        // required:true
    },
    email: {
        type: String,
        // required:true
    },
    password: {
        type: String,
        // required:true
    }
})

const projectModel = mongoose.model('information', user)

module.exports = projectModel;