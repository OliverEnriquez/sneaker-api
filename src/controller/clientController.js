const Client = require('../models/Client');
const Sneaker = require('../models/Sneaker');

exports.getClient = async (req, res) => {
    try {
        const client = await Client.findAll();
        res.status(200).json(client);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

exports.getClientById = async (req, res) => {
    try {
        const { client_id } = req.params;
        const client = await Client.findByPk(client_id);
        res.status(200).json(client);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.createClient = async (req, res) => {
    try {
        const newClient = await Client.create(req.body);
        res.status(201).json(newClient);
    } catch (error) {
        res.status(500).json({ success: false, message: "Client created successfully" });
    }
}

// exports.updatedClient = async (req, res) => {
//     const { client_id } = req.params;
//     const { name, contact_info } = req.body;

//     try {
//         const client = Client.findByPk(client_id);
//         if (!client) return res.status(404).json({ success: false, message: "Client not found" });
//         client.name = name || client.name;
//         client.contact_info = contact_info || client.contact_info;
//         res.status(200).json(client);

//         await client.save();

//         res.status(201).json({ success: true, message: 'Client updated successfully' });
//     } catch (error) {
//         res.status(500).json({ success: false, error: error.message })
//     }

// };

// exports.deleteClient = async (req, res) => {
//     const { client_id } = req.params;

//     try {
//         await Sneaker.destroy({ where: { client_id: client_id } });

//         // Elimina el cliente
//         const client = await Client.findByPk(client_id);
//         if (!client) {
//             return res.status(404).json({ success: false, error: 'Client not found' });
//         }

//         await client.destroy();

//         res.status(200).json({ success: true, message: 'Client deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ success: false, error: error.message })
//     }
// }