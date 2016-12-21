'use strict'

const Lucid = use('Lucid')
const Hash = use('Hash')

class User extends Lucid {

  apiTokens () {
    return this.hasMany('App/Model/Token')
  }

  tickets () {
    return this.hasMany('App/Model/Ticket')
  }

}

module.exports = User
