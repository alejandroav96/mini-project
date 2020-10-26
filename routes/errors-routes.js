const { Router } = require('express');
const errorsController = require('../controllers/errors-controller');
const path = require('path');

module.exports = Router()

  .get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../public/index.html'));
  })

    /**
   * Default routes fallback
   */
  .all('*', errorsController.notFound);