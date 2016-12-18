'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  apiTokens () {
    return this.hasMany('App/Model/Token')
  }

  tickets () {
    return this.hasMany('App/Model/Ticket')
  }

}

module.exports = User
