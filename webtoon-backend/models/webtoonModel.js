const mongoose = require('mongoose');
const { Schema } = mongoose;

const webtoonSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    characters: [{ type: Schema.Types.ObjectId, ref: 'Character' }],  // Referencing Character model
}, { timestamps: true });

const Webtoon = mongoose.model('Webtoon', webtoonSchema);

module.exports = Webtoon;
