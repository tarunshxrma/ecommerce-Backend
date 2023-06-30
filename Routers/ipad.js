const express = require('express')
const iPadApi = require('../apis/ipad')

const iPad = express.Router()
iPad.route('/ipad').get(iPadApi.apiController)

module.exports = iPad
