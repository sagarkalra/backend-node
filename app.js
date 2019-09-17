const express = require('express');
const path = require('path');
const env = require('dotenv').config();
const morgan = require('morgan');

const constant = require('./app/config/constant');
const logger = require(`${constant.path.app}/core/logger`);

const routes = require(constant.path.app + 'config/routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan('combined', { "stream": logger.stream }));

app.use(routes);

module.exports = app;
