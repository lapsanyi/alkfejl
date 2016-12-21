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
      const users = yield User.all()
      const statuses = yield Status.all()

      yield response.sendView('list', {
        tickets: tickets.toJSON(),
        users: users.toJSON(),
        statuses: statuses.toJSON()
      })
  }

  * doEdit (request, response) {
    var post = request.post()
    var ticketId = request.param('id')

    var ticket = yield Ticket.findBy('id', ticketId)


    ticket.status_id = post.status
    ticket.description = post.description
    ticket.user_id = post.user_id

    yield ticket.save()
    yield request
      .with({
        success: [{
          message: 'A ticket módosítása sikeres!'
        }]
      })
      .flash()
    yield response.redirect('/tickets/list')
  }

  * edit (request, response) {
    var ticketId = request.param('id')
    var oldTicket = yield Ticket.findBy('id', ticketId)

    const statuses =  yield Status.all()
    const users = yield User.all()

    yield response.sendView('edit', {
      statuses: statuses.toJSON(),
      users: users.toJSON(),
      ticket: oldTicket.toJSON()
    })
  }

  * create (request, response) {
      const statuses =  yield Status.all()

      const users = yield User.all()
      console.log('---------------------------------users: ', users)

      yield response.sendView('new', {
        statuses: statuses.toJSON(),
        users: users.toJSON()
      })
  }

  * doCreate (request, response) {
    const post = request.post()
    var utc = new Date().toJSON().slice(0,10);

    var ticketData = {
      status_id: post.status,
      description: post.description,
      user_id: post.user_id,
      created_at: utc,
      updated_at: ''
    }
    console.log('inputs: ',ticketData)

    var ticket = yield Ticket.create(ticketData)
    yield ticket.save()
    yield response.redirect('list')
  }

  * doDelete (request, response) {
    var ticketId = request.param('id')
    var ticket = yield Ticket.findBy('id', ticketId)
    console.log('*********************************törlöm: ', ticket)

    yield ticket.delete()

    yield request
      .with({
        success: [{
          message: 'A ticket törlése sikeres!'
        }]
      })
      .flash()
    yield response.redirect('back')
   }
}

module.exports = TicketController
