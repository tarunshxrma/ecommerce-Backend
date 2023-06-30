const express  = require('express')
const bestSellerAPI  = require('../apis/bestSeller')

const bestSeller = express.Router()
bestSeller.route('/bestseller').get(bestSellerAPI.apiController)

module.exports = bestSeller
