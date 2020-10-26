'use strict'
const mongoose = require('mongoose');

exports.connect = () => {
  const DEFAULT_CONFIG = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };

  return mongoose.connect(process.env.MONGO_URI, DEFAULT_CONFIG);
};

