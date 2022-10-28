const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.getUsers);

router.get('/:id', userController.getUser);

router.post('/create', userController.createUser);

router.put('/update/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;