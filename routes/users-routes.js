const { Router } = require('express');
const usersController = require('../controllers/users-controller');

module.exports = Router()
    // Get all users
    .get('/', usersController.getAll)

    // Save data users
    .post('/', usersController.save)

