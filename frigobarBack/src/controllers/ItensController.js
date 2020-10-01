const connection = require('../database/connection')

module.exports = {
    async listaItens(req, res) {

        const itens = await connection('itens')
            .select('*')
            .catch((err) => {
                console.log(err)
                return res.json(err)
            })

        return res.json(itens)
    },

    async criaItens(req, res) {
        const { nomeItem, quantidadeTotal } = req.body;

        const itens = await connection('itens')
            .insert({
                nomeItem,
                quantidadeTotal,
            })
            .catch((err) => {
                console.log(err)
                return res.json(err)
            })

        return res.json(itens)
    },

    async deletaItens(req, res) {
        const { nomeItem } = req.body;

        const itens = await connection('itens')
            .where('nomeItem', nomeItem)
            .delete({
                nomeItem,
                quantidadeTotal,
            })
            .catch((err) => {
                console.log(err)
                return res.json(err)
            })

        return res.json({mensagem: "Deletado com sucesso!"})
    },
    
    async atualizaItens(req, res){
        const {nomeItem, quantidadeTotal} = req.body;

        const itens = await connection('itens')
            .where('nomeItem', nomeItem)
            .update({
                quantidadeTotal,
            })
            .catch((err) => {
                console.log(err)
                return res.json(err)
            })

        return res.json(itens)
    }
};