const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
    nombre: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Group', GroupSchema);
