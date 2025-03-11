const mongoose = require('mongoose');

const CourseGroupSchema = new mongoose.Schema({
    grupo_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Group", 
        required: true 
    },
    curso_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Course", 
        required: true 
    }
}, { timestamps: true });

module.exports = mongoose.model('CourseGroup', CourseGroupSchema);
