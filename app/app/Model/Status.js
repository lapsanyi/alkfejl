'use strict'

const Lucid = use('Lucid')

class Status extends Lucid {
  tickets () {
    return this.hasMany('App/Model/Ticket')
  }
}

module.exports = Status
