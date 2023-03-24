const State = require('../models/State')


module.exports = {
    new: newState,
    create,
    index
}

function newState(req, res) {
    console.log('this is now working')
    res.render('states/new', { title: 'Add A State' })
}

function create (req, res){
    State.create(req.body).then(function(newState){
        console.log(newState)
      res.redirect('/states')
 }) 
console.log(req.body)
}

function index(req, res) {
    State.find({})
        .then(function (states) {
            res.render('states/index', { states, title: 'All States' })
        })
        .catch(function (err) {
            console.log(err) // log the error for debugging or redirect to error page 
            res.redirect('/')
        })
}


