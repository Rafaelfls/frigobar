const routes = require('express').Router();

const itensController = require('./controllers/ItensController')
const consumidosController = require('./controllers/ConsumidosController')

routes.get('/itensFrigobar', itensController.listaItens)
routes.post('/itensFrigobar', itensController.criaItens)
routes.delete('/itensFrigobar', itensController.deletaItens)
routes.put('/itensFrigobar', itensController.atualizaItens)

routes.get('/consomeFrigobar', consumidosController.listaConsumidos)
routes.post('/consomeFrigobar', consumidosController.consomeFrigobar)
routes.put('/consomeFrigobar', consumidosController.confirmaPagamentoConsumidos)

module.exports = routes;