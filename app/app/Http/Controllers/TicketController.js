'use strict'

const Ticket = use('App/Model/Ticket')
const User = use('App/Model/User')

class TicketController {


  * index (request, response) {
    yield response.sendView('home')
  }

  * getNew (request, response) {
    yield response.sendView('new')
  }

  * getList (request, response) {
      const tickets = Ticket.all()

      yield response.sendView('list', { tickets: tickets.toJSON() })
  }

  * getEdit (request, response) {
    yield response.sendView('edit')
  }
}

module.exports = TicketController
