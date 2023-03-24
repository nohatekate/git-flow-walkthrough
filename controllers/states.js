// const State = require('../models/State')


module.exports = {
    new: newState
}

function newState(req, res) {
    console.log('this is now working')
    res.render('states/new', { title: 'Add A State' })
}




