const connection = require('../database/connection')

module.exports = {
    async listaConsumidos(req, res) {
        const { apartamento } = req.body;

        const lista = await connection('consumidos')
            .where('apartamento', apartamento)
            .select('*')
            .catch((err) => {
                console.log(err)
                return res.json(err)
            })

        return res.json(lista)
    },

    async confirmaPagamentoConsumidos(req, res) {
        const { apartamento } = req.body;

        const lista = await connection('consumidos')
            .where('apartamento', apartamento)
            .update({
                pagou: true,
            })
            .catch((err) => {
                console.log(err)
                return res.json(err)
            })

        return res.json({ mensagem: "Apartamento " + apartamento + " pago!" })
    },

    async consomeFrigobar(req, res) {
        const { apartamento, item_id, quantidadeConsumida } = req.body;

        await connection('consumidos')
            .where('apartamento', apartamento)
            .andWhere('item_id', item_id)
            .select('*')
            .then(async (rows) => {
                if (rows.length > 0) {
                    await connection('consumidos')
                        .where('apartamento', apartamento)
                        .andWhere('item_id', item_id)
                        .update({
                            quantidadeConsumida: rows[0].quantidadeConsumida + quantidadeConsumida,
                        })
                        .catch((err) => {
                            console.log(err)
                            return res.json(err)
                        })

                    return res.json({ mensagem: "Atualizado com sucesso!" })
                } else {
                    await connection('consumidos')
                        .insert({
                            apartamento,
                            item_id,
                            quantidadeConsumida,
                            pagou: false,
                        })
                        .catch((err) => {
                            console.log(err)
                            return res.json(err)
                        })
                    return res.json({ mensagem: "Registrado com sucesso!" })
                }
            })
    }
};