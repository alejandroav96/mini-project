const express = require('express');
const { authenticatedRoute } = require('../middlewares/auth-token');
const errorsRouter = require('./errors-routes');
const usersRouter = require('./users-routes');
const profileRouter = require('./profile-routes');

module.exports = express.Router()
  .use('/api/users', usersRouter)

  .use('/api/profile', authenticatedRoute, profileRouter)

  .use('/', express.static('public'))
  
  .use(errorsRouter);