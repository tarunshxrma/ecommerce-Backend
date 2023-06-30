const express = require('express')
const iPhoneApi = require('../apis/iphone')

const iPhone = express.Router()
iPhone.route('/iphone').get(iPhoneApi.apiController)

module.exports = iPhone
