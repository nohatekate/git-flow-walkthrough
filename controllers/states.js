const State = require('../models/State')


module.exports = {
    new: newState,
    create,
}

function newState(req, res) {
    console.log('this is now working')
    res.render('states/new', { title: 'Add A State' })
}

function create (req, res){
    State.create(req.body).then(function(newState){
        console.log(newState)
      res.redirect('/')
 }) 
console.log(req.body)
}



