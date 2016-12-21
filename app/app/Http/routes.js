'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.get('/', 'TicketController.index')
Route.get('/tickets/new', 'TicketController.create').middleware('auth')
Route.post('/tickets/new', 'TicketController.doCreate').middleware('auth')
Route.get('/tickets/list', 'TicketController.getList').middleware('auth')

Route.get('/tickets/:id/edit', 'TicketController.edit').middleware('auth')
Route.post('/tickets/:id/edit', 'TicketController.doEdit').middleware('auth')

Route.post('/tickets/:id/delete', 'TicketController.doDelete').middleware('auth')

Route.get('/login', 'UserController.login')
Route.post('/login', 'UserController.doLogin')

Route.get('/register', 'UserController.register')
Route.post('/register', 'UserController.doRegister')

Route.get('/logout', 'UserController.doLogout').as('do_logout').middleware('auth')
