'use strict'

const Schema = use('Schema')

class TicketsTableSchema extends Schema {

  up () {
    this.create('tickets', (table) => {
      table.increments()
      table.integer('ticket_id').unsigned().references('id').inTable('tickets')
      table.integer('status_id').unsigned().references('id').inTable('status')
      table.timestamps('ts')
      table.string('description').notNullable()
    })
  }

  down () {
    this.drop('tickets')
  }

}

module.exports = TicketsTableSchema
