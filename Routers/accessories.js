const express = require('express')
const accessoriesApi = require('../apis/Accessories')

const accessories = express.Router()
accessories.route('/accessories').get(accessoriesApi.apiController)

module.exports = accessories
