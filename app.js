const express = require('express');
const path = require('path');
const env = require('dotenv').config();

const constant = require('./app/config/constant');

const routes = require(constant.path.app + 'config/routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

module.exports = app;
