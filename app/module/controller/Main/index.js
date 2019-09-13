const constant = require('../../../config/constant');
const logger = require(constant.path.app + 'core/logger');
const router = require('express').Router({
    strict : true,
    caseSensitive : true
});

router.get(
    '/',
    (req, res, next) => {logger.info("GET authentication"); next();},
    (req, res, next) => {logger.error("GET middleware"); next();},
    (req, res, next) => {logger.debug("GET controller"); next();},
    (req, res) => {
        // console.log()
        const search = req.query.value || 0;
        let a = 5;
        if(search) {
            a = a * 50;
        } else {
            a = a * 10;
        }
        res.json({success: "GET", data: a})
    },
);


// router.post(
//     '/',
//     (req, res, next) => {logger.info("POST authentication"); next();},
//     (req, res, next) => {logger.info("POST middleware"); next();},
//     (req, res, next) => {logger.info("POST controller"); next();},
//     (req, res) => {res.json({success: "POST"})},
// );


module.exports = {
    router
};
