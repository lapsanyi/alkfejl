'use strict'

const Schema = use('Schema')

class TicketsTableSchema extends Schema {

  up () {
    this.create('tickets', (table) => {
      table.increments()
    table.integer('status_id').unsigned().references('id').inTable('status')
    table.string('description').notNullable()
    table.integer('user_id').unsigned().references('id').inTable('user')
    table.timestamps('ts')
  })
  }

  down () {
    this.drop('tickets')
  }

}

module.exports = TicketsTableSchema
