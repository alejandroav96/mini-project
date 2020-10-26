const { createError, errorCodes } = require('../errors');

module.exports = {
  notFound: (req, res) => {
    throw createError(
      `Not found ${req.method} on ${req.path}`,
      errorCodes.NOT_FOUND
    );
  },
};
