const User = require("../models/userModel");

// create user
exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);

        // store the user in the database
        await user.save();

        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getUser = async (req, res) => {
    try {
        const userId = req.params.id.trim();
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
            res.status(400).json({ error: error.message});
        }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);

        if (!users) {
            return res.status(404).json({error: "No users found"});
        }
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
};

exports.updateUser = async (req, res) => {
    try {
        
        const user = await user.findOneAndUpdate(userId, req.body, {
            new: true,
            runValidators: true,
        });

        if (!user) {
            return res.status(404).json({error: "User Not Found"});
        }
        res.status(200).json(user);
        
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
}