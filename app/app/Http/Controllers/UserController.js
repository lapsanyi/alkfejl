'use strict'

const Hash = use('Hash')
const User = use('App/Model/User')
const Validator = use('Validator')

class UserController {
  /**
   *
   */
  * doLogin (request, response) {
    const username = request.input('username')
    const password = request.input('password')

    console.log('nev:  ',username)
    console.log('pass:  ',password)

    try {
      const login = yield request.auth.attempt(username, password)

      if (login) {
        response.route('login')
        return
      }

      throw new Error('Invalid credentails')
    }
    catch (err) {
      yield request.withAll().andWith({ error: err }).flash()
      response.route('login')
    }
  }

  /**
   *
   */
  * doRegister (request, response) {
    const userData = request.all()

    const validation = yield Validator.validateAll(userData, {
      username: 'required|alpha_numeric|unique:users',
      email: 'required|email|unique:users',
      password: 'required|min:4',
      password_again: 'required|same:password'
    })

    if (validation.fails()) {
      yield request
        .withOut('password', 'password_again')
        .andWith({ errors: validation.messages() })
        .flash()

      response.route('register')
      return;

    }

    const user = new User()
    user.username = userData.username
    user.email = userData.email
    user.nickname = userData.nickname
    user.password = yield Hash.make(userData.password)

    yield user.save()

    yield request.auth.login(user)

    response.route('register')
  }

  /**
   *
   */
  * doLogout (request, response) {
    yield request.auth.logout()
    response.route('main')
  }

  /**
   *
   */
  * login (request, response) {
    if (request.currentUser) {
      response.route('main')
      return
    }

    yield response.sendView('login')
  }

  /**
   *
   */
  * register (request, response) {
    if (request.currentUser) {
      response.route('main')
      return
    }

    yield response.sendView('register')
  }

}

module.exports = UserController
