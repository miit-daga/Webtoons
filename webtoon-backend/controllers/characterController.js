const Character = require('../models/characterModel');

// @desc    Get all characters
// @route   GET /characters
const getAllCharacters = async (req, res) => {
    try {
        const characters = await Character.find();
        res.status(200).json(characters);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Add a new character
// @route   POST /characters
const addCharacter = async (req, res) => {
    const { name, description, role } = req.body;
    try {
        const character = new Character({
            name,
            description,
            role,
        });
        const savedCharacter = await character.save();
        res.status(201).json(savedCharacter);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllCharacters,
    addCharacter,
};
