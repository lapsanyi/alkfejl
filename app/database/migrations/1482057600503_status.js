'use strict'

const Schema = use('Schema')

class StatusTableSchema extends Schema {

  up () {
    this.create('status', (table) => {
      table.increments()
      table.integer('status_id').unsigned().references('id').inTable('status')
      table.string('status_txt').notNullable()
    })
  }

  down () {
    this.drop('status')
  }

}

module.exports = StatusTableSchema
