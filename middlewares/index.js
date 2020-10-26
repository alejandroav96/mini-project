const { handler: errorHandlerMiddleware } = require('./errors');

module.exports = {
  after: (app) => {
    app.use(errorHandlerMiddleware);
  },
};
