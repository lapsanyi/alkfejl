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
Route.get('/tickets/new', 'TicketController.getNew')
Route.get('/tickets/list', 'TicketController.getList')
Route.get('tickets/edit', 'TicketController.getEdit')
Route.on('/login').render('login')
Route.on('/register').render('register')
