const User = require('../models/User');


exports.getUsers = async (req, res) => {
    try {
        const user = await User.findAll();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}


exports.getUserById = async (req, res) => {
    try {
        const {user_id} = req.params;
        const user = await User.findByPk(user_id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({ success: true, message: 'User created successfully' });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
}

exports.updateUser = async (req, res) => {
    const { user_id } = req.params;
    const { username, password, role } = req.body;

    try {
        const user = await User.findByPk(user_id);


        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        user.username = username || user.username;
        user.password = password || user.password;
        user.role = role || user.role;

        res.status(200).json({ success: true, message: 'User updated successfully' });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }


}

exports.detletUser = async  (req, res) => {
    const { user_id } = req.params;

    try {
        const user = await User.findByPk(user_id);
        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        user.destroy();
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, error: err.message });

    }
}