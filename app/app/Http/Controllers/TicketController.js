'use strict'

class TicketController {

  * index (request, response) {
    yield response.sendView('home')
  }

  * getNew (request, response) {
    yield response.sendView('new')
  }

  * getList (request, response) {
    yield response.sendView('list')
  }

  * getEdit (request, response) {
    yield response.sendView('edit')
  }
}

module.exports = TicketController
