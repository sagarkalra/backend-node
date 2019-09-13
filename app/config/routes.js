const express = require('express');
const constant = require('./constant');

const app = express.Router();
const logger = require(`${constant.path.app}/core/logger`);

app.use('/', require(constant.path.app + '/module/controller/Main').router);
app.use('/report', express.static(constant.path.base + 'coverage/lcov-report'));

module.exports = app;
