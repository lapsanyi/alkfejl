'use strict'

const Schema = use('Schema')

class StatusesTableSchema extends Schema {

  up () {
    this.create('status', (table) => {
      table.increments()
      table.string('status_txt').notNullable()
  })
  }

  down () {
    this.drop('statuses')
  }

}

module.exports = StatusesTableSchema
