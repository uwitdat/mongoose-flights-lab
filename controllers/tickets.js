const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

const { render } = require('ejs')

module.exports = {
newTicket,
createTicket,
}

function newTicket(req, res){
  Flight.findById(req.params.id,function(err, flight){
    res.render('tickets/new', {flightId: req.params.id, flight})
  })
}

function createTicket(req, res) {
    req.body.flight = req.params.id;
    const ticket = new Ticket(req.body);
    ticket.save().then((ticket) => {
      console.log(ticket)
      res.redirect(`/flights/${ticket.flight}/show`);
    });
  }
