const Flight = require('../models/flight');
const Ticket = require('../models/ticket');


module.exports = {
    getIndex,
    getNew,
    create,
    getOne,
}

function getOne(req, res){
    Flight.findById(req.params.id, async function(err, flight){
    let ticket = await Ticket.find({flight: flight._id})
        res.render('flights/show', { title: `Flight Details`, flight, ticket})
    });
}

function getIndex(req, res){
    Flight.find({}, function(err, flights){
        res.render('flights/index', { title: 'All Flights', flights});
    })
}

function getNew(req, res){
    res.render('flights/new');
}

function create(req, res){
    const flight = new Flight(req.body);
    flight.save(function(err){
        if (err) res.redirect('/flights/new');        
        console.log(flight);
        res.redirect('/flights');
    })
}

