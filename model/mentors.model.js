const mongoose = require('mongoose');

const mentorSchema = mongoose.Schema({
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

    assigned_student : [String],
});

module.exports = mongoose.model("Mentors", mentorSchema);