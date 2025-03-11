const mongoose = require('mongoose');

const StudentGroupSchema = new mongoose.Schema({
    estudiante_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true 
    },
    grupo_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Group", 
        required: true 
    }
}, { timestamps: true });

module.exports = mongoose.model('StudentGroup', StudentGroupSchema);
