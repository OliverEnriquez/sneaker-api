const express = require('express');
const router = express.Router();
const { getClient, getClientById, createClient, updatedClient, deleteClient } = require('../controller/clientController');

router.get('/clients', getClient);
router.get('/client/:client_id', getClientById);
router.post('/client', createClient);
router.put('/client/:client_id', updatedClient);
router.delete('/client/:client_id', deleteClient);
module.exports = router;