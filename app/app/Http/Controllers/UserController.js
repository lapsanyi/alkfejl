'use strict'

class UserController {
  * getRegister (request, response) {
    yield response.sendView('register')
  }

  * getLogin (request, response) {
    yield response.sendView('login')
  }
}

module.exports = UserController
