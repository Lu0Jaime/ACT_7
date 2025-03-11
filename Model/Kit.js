const mongoose = require('mongoose');

const KitSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    contenido: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Kit', KitSchema);
