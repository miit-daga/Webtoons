const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    role: { type: String, required: true },  // Protagonist, Antagonist, etc.
}, { timestamps: true });

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;
