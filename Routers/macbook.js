const express = require('express')
const macbookApi = require('../apis/macbook')

const macbook = express.Router()
macbook.route('/macbook').get(macbookApi.apiController)

module.exports = macbook
