// const State = require('../models/State')


module.exports = {
    new: newState,
    create
}

function newState(req, res) {
    console.log('this is now working')
    res.render('states/new', { title: 'Add A State' })
}

function create (req, res){
res.render('/states', {title: 'All States'})
}



