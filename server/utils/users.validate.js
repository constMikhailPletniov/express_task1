const Joi = require('joi');

const { CONFIG } = require('../configuration');

module.exports = {
    userValidate: Joi.object({
        userName: Joi.string().min(CONFIG.NUMBERS.FIVE).max(CONFIG.NUMBERS.FOURTY_TWO).trim()
    })
}