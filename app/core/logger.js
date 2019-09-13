const winston = require('winston');
const moment = require('moment');
const { createLogger, format } = require('winston');

const {
    combine, timestamp, printf,
} = format;

const constant = require('../config/constant');

const logFormat = format.combine(
    format.colorize(),
    format.printf(config => `[${moment().format('YYYY-MM-DD hh:mm:ss')}]`
    + `[${process.env.LOG_LABEL}.${config.level}]: ${
        config.message ? JSON.stringify(config.message) : ''}`)
);

const options = {
    file: {
        level            : process.env.LOG_LEVEL,
        label            : process.env.LOG_LABEL,
        filename         : `${constant.path.base}/logs/app-${moment().format('YYYY-MM-DD')}-${process.env.NODE_ENV}.log`,
        handleExceptions : true,
        json             : true,
        maxsize          : 5242880, // 5MB
        maxFiles         : 5,
        colorize         : false,
        format           : combine(timestamp(), logFormat),
    },
    console: {
        level            : process.env.LOG_LEVEL,
        label            : process.env.LOG_LABEL,
        handleExceptions : true,
        json             : false,
        colorize         : true,
        format           : combine(timestamp(), logFormat),
    },
};

// instantiate a new Winston Logger with the settings defined above
const logger = new createLogger({
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console),
    ],
    exitOnError: false, // do not exit on handled exceptions
});

module.exports = logger;
