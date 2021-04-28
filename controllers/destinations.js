const Flight = require('../models/flight')

module.exports = {
    createDestination
}

function createDestination(req, res){
    Flight.findById(req.params.id, function(err, flight){
       flight.destinations.push(req.body);
       flight.save(function(err){
           if(err) console.log(err.message)
           res.redirect(`/flights/${flight._id}/show`)
       }) 
    })}
