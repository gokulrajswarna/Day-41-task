const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name : {
        required: true,
        type: String,
        trim: true,
    },

    email : {
        required: true,
        type: String,
        trim: true,
        unique: true,
    },

    assigned_mentor : {
        require: true,
        type: String,
    },
});

module.exports = mongoose.model("Students", studentSchema);