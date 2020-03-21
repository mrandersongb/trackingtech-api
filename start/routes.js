"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { Message: "Tracking Service Is Running" };
});

// Cadastro de usuários
Route.post("/users", "UserController.create");

// Autenticação de usuários
Route.post("/sessions", "SessionController.create");

// Cria todas as rotas de CRUD (create , read, update , delete)
// para Tecnlogias
// Route.resource("/technologies", "TechnologyController")
//  .apiOnly()
//  .middleware("auth");

// Cria todas as rotas de CRUD para Check-Ins
//Route.resource("/checkins", "CheckInController")
//  .apiOnly()
//  .middleware("auth");

Route.group(() => {
  // consulta usuários
  Route.get("/users", "UserController.index");

  // consulta perfil do usuário
  Route.get("/users/profile", "UserController.show");

  // Cadastro de Tecnologias
  Route.post("/technologies");

  // Consulta todas as tecnologias
  Route.get("/technologies", "TechnologyController.index");

  // Consulta Check-Ins por tecnologia
  Route.get("/technologies/checkins", "TechnologyController.all");

  //Route.resource("/checkins", "CheckInController");
  // Cadastro de check-ins
  Route.post("/checkins", "CheckInController.store");

  // Consulta Check-Ins por Usuário
  Route.get("/checkins", "CheckInController.index");
}).middleware("auth");

// Route.get("/checkins/today", "CheckInController.today").middleware("auth");
