'use strict'

class TicketController {

  * index (request, response) {
    yield response.sendView('home')
  }

}

module.exports = TicketController
