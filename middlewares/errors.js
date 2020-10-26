const { createError, errorCodes } = require('../errors');

exports.handler = (error, req, res, next) => {
  console.log(error);

  if (error.name && error.name == 'CastError') {
    return res
      .status(400)
      .send(
        createError(
          'Unvalid values, validate your request',
          errorCodes.BAD_REQUEST
        )
      );
  }

  if (error.message && error.status_code) {
    res.status(error.status_code).send(error);
  } else {
    res.status(500).send(createError());
  }

  next();
};