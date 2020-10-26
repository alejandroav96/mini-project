'use strict'

const firebase = require('../services/firebase');
const { createError, errorCodes } = require('../errors');

module.exports = {
  authenticatedRoute: (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
      return next(
        createError(
          'You must provide an authentication token',
          errorCodes.UNAUTHORIZED
        )
      );
    }

    firebase
      .auth()
      .verifyIdToken(token)
      .then((decoded) => {
        req.uid = decoded.uid;
        req.name = decoded.name;
        req.email = decoded.email;
        req.image = decoded.picture;
        next();
      })
      .catch(() =>
        next(
          createError(
            'You must provide a valid id token.',
            errorCodes.UNAUTHORIZED
          )
        )
      );
  },
};