const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    portada: { type: String },  // URL imagen
    contenido: { type: String },
    robotkit_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Kit", 
        required: true 
    }
}, { timestamps: true });

module.exports = mongoose.model('Course', CourseSchema);
