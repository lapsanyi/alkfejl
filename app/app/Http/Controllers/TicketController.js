'use strict'

const Ticket = use('App/Model/Ticket')
const User = use('App/Model/User')
const Status = use('App/Model/Status')
const Validator = use('Validator')
const Database = use('Database')

class TicketController {


  * index (request, response) {
    yield response.sendView('home')
  }

  * getList (request, response) {
      const tickets = yield Ticket.all()

      yield response.sendView('list', {
        tickets: tickets.toJSON()
      })
  }

  * getEdit (request, response) {
    yield response.sendView('edit')
  }

  * create (request, response) {
      const statuses =  yield Database.select('*').from('status')
      console.log('stat:', statuses )

      yield response.sendView('new', {
        statuses: statuses.toJSON()
      })
  }

  * doCreate (request, response) {
      const ticketData = request.all()
  }
}

module.exports = TicketController
