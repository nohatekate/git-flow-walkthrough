const express = require('express')
const router = express.Router()

const statesController = require('../controllers/states')

router.get('/new', statesController.new)

router.get('/', function(req,res, next){
    res.send()
})

module.exports = router 