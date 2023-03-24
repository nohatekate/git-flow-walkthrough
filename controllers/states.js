const State = require('../models/State')


module.exports = {
    new: newState,
    create,
    index,
    show
}

function newState(req, res) {
    console.log('this is now working')
    res.render('states/new', { title: 'Add A State' })
}

function create(req, res) {
    State.create(req.body).then(function (newState) {
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

function show(req, res) {
    State.findById(req.params.id).then(
        function (state) {
            res.render('states/show', { state, title: 'State Details' })
        })
        .catch(function (err) {
            console.log(err)
            res.redirect('/')
        })
    console.log("this function is doing something ")
}


