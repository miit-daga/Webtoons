const Webtoon = require('../models/webtoonModel');

// @desc    Get all webtoons
// @route   GET /webtoons
const getAllWebtoons = async (req, res) => {
    try {
        const webtoons = await Webtoon.find().populate('characters');
        res.status(200).json(webtoons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get a specific webtoon by ID
// @route   GET /webtoons/:id
const getWebtoonById = async (req, res) => {
    try {
        const webtoon = await Webtoon.findById(req.params.id).populate('characters');
        if (!webtoon) {
            return res.status(404).json({ message: 'Webtoon not found' });
        }
        res.status(200).json(webtoon);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Add a new webtoon
// @route   POST /webtoons
const addWebtoon = async (req, res) => {
    const { title, description, characters } = req.body;
    try {
        const webtoon = new Webtoon({
            title,
            description,
            characters,
        });
        const savedWebtoon = await webtoon.save();
        res.status(201).json(savedWebtoon);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete a webtoon by ID
// @route   DELETE /webtoons/:id
const deleteWebtoon = async (req, res) => {
    try {
        const webtoon = await Webtoon.findByIdAndDelete(req.params.id);
        if (!webtoon) {
            return res.status(404).json({ message: 'Webtoon not found' });
        }
        res.status(200).json({ message: 'Webtoon deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllWebtoons,
    getWebtoonById,
    addWebtoon,
    deleteWebtoon,
};
