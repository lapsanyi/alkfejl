'use strict'

const Lucid = use('Lucid')

class Ticket extends Lucid {
  status () {
    return this.belongsTo('App/Model/Status', 'id', 'status_id')
  }

  assigned () {
    return this.belongsTo('App/Model/User', 'id', 'user_id')
  }
}

module.exports = Ticket
