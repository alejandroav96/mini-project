const { Router } = require('express');
const profileController = require('../controllers/profile-controller');

module.exports = Router()
    // Get profile data
    .get('/', profileController.get)

    // Update profile data
    .put('/', profileController.update)

