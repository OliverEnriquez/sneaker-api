const express = require('express')
const router = express.Router();
const { getUsers, createUser, updateUser, detletUser, getUserById } = require('../controller/userController');

router.get('/users', getUsers);
router.get('/user/:user_id', getUserById);
router.post('/user', createUser);
router.put('/user/:user_id', updateUser);
router.delete('/user/:user_id', detletUser);

module.exports = router;