const routes = require('express').Router();

const itensController = require('./controllers/ItensController')
const consumidosController = require('./controllers/ConsumidosController')
const apartamentosController = require('./controllers/ApartamentosController')

routes.get('/itensFrigobar', itensController.listaItens)
routes.post('/itensFrigobar', itensController.criaItens)
routes.delete('/itensFrigobar', itensController.deletaItens)
routes.put('/itensFrigobar', itensController.atualizaItens)

routes.get('/consomeFrigobar/:apartamento', consumidosController.listaConsumidos)
routes.get('/todoFrigobar', consumidosController.listaTodosConsumidos)
routes.post('/consomeFrigobar', consumidosController.consomeFrigobar)

routes.get('/apartamentos', apartamentosController.listaApartamentos)
routes.put('/apartamentos', apartamentosController.confirmaPagamentoApartamento)
routes.post('/apartamentos', apartamentosController.criaApartamentos)

module.exports = routes;