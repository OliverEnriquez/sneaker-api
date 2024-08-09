const express = require('express')
const router = express.Router();
const { getSneaker, createSneaker, updateSneaker, deleteSneaker, getSneakerById } = require('../controller/sneakerController');

router.get('/sneakers', getSneaker);
router.get('/sneaker/:id', getSneakerById)
router.post('/sneaker', createSneaker);
router.put('/sneaker/:id', updateSneaker);
router.delete('/sneaker/:id', deleteSneaker);

module.exports = router;