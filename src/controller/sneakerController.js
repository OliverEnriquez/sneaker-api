const Sneaker = require('../models/Sneaker');

exports.getSneaker = async (req, res) => {
    try {
        const sneaker = await Sneaker.findAll();
        res.status(200).json(sneaker);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

exports.createSneaker = async (req, res) => {
    try {
        const newSneaker = await Sneaker.create(req.body);
        res.status(201).json({success: true, message: 'Sneaker created successfully'});
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
}

exports.getSneakerById = async (req, res) => {
    try {
        const {id} = req.params;
        const sneaker = await Sneaker.findByPk(id);
        res.status(200).json(sneaker);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.updateSneaker = async (req, res) => {
    const { id } = req.params;
    const { client_id, brand, model } = req.body;

    try {
        const sneaker = await Sneaker.findByPk(id);

        if (!sneaker) {
            return res.status(404).json({ success: false, error: 'Sneaker not found' });
        }

        sneaker.client_id = client_id || sneaker.client_id;
        sneaker.brand = brand || sneaker.brand;
        sneaker.model = model || sneaker.model;

        await sneaker.save();

        res.status(201).json({success: true, message: 'Sneaker updated successfully'});

    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}

exports.deleteSneaker = async (req, res) => {
    const { id } = req.params;

    try {
        const sneaker = await Sneaker.findByPk(id);

        if (!sneaker) {
            return res.status(404).json({ success: false, error: 'Sneaker not found' });
        }

        await sneaker.destroy();

        res.status(200).json({ success: true, message: 'Sneaker deleted successfully' });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};