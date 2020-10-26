'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const applyMiddlewares = require('./middlewares');
const router = require('./routes');
const cors = require('cors');

const app = express();

// Middleware to add cors
app.use(cors());

// Middleware to parse requests body
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

// Use app routes
app.use(router);

// Apply after routes middlewares
applyMiddlewares.after(app);



module.exports = app;