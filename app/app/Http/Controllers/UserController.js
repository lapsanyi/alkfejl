'use strict'

const Hash = use('Hash')
const User = use('App/Model/User')
const Validator = use('Validator')

class UserController {
  /**
   *
   */
  * doLoginnn (request, response) {
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

  * doLogin (request, response) {
    var post = request.post();
    try {
      const user = yield User.findBy('username', post.username);
      const isSame = yield Hash.verify(post.password, user.password);
      if (isSame) {
        yield request.auth.login(user);
        response.redirect('/tickets/list');
      }
      throw new Error();
    } catch (e) {
      yield request
        .with({
          errors: [{
            message: 'A felhasználó név vagy a jelszó helytelen!'
          }]
        })
        .flash()
      yield response.redirect('back');
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
        .with({
          errors: [{
            message: 'Ellenőrizze az adatokat!'
          }]
        })
        .flash()

      response.route('register')
      return;

    }

    const user = new User()
    user.username = userData.username
    user.email = userData.email
    user.password = yield Hash.make(userData.password)
    user.admin = ''

    yield user.save()

    yield response.redirect('login')
  }

  /**
   *
   */
  * doLogout (request, response) {
    yield request.auth.logout()
    response.route('/')
  }

  /**
   *
   */
  * login (request, response) {
    if (request.currentUser) {
      yield response.sendView('home')
      return
    }

    yield response.sendView('login')
  }

  /**
   *
   */
  * register (request, response) {

    yield response.sendView('register')
  }

}

module.exports = UserController
