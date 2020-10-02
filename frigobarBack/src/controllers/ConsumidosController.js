const connection = require('../database/connection')

module.exports = {
    async listaConsumidos(req, res) {
        const { apartamento } = req.params;

        const lista = await connection('consumidos')
            .join('apartamentos', 'apartamentos.id', '=', 'consumidos.apartamento_id')
            .join('itens', 'itens.id', '=', 'consumidos.item_id')
            .where('apartamentos.apartamento', apartamento)
            .select('*')
            .catch((err) => {
                console.log(err)
                return res.json(err)
            })

        return res.json(lista)
    },

    async listaTodosConsumidos(req, res) {
        const lista = await connection('consumidos')
            .select('*')
            .catch((err) => {
                console.log(err)
                return res.json(err)
            })

        return res.json(lista)
    },

    async consomeFrigobar(req, res) {
        const { apartamento, item_id, quantidadeConsumida } = req.body;
        const data = new Date()

        await connection('apartamentos')
            .where("apartamento", apartamento)
            .andWhere('pagou', false)
            .select('*')
            .then(async (rows) => {
                if (rows.length > 0) {
                    await connection('consumidos')
                        .insert({
                            apartamento_id: rows[0].id,
                            item_id,
                            quantidadeConsumida,
                            dataConsumido: data
                        })
                        .catch((err) => {
                            console.log(err)
                            return res.json(err)
                        })
                    return res.json({ mensagem: "Registrado com sucesso!" })
                } else {
                    await connection('apartamentos')
                        .insert({
                            apartamento,
                            pagou: false,
                        }).then(async (apartamento) => {
                            await connection('consumidos')
                                .insert({
                                    apartamento_id: apartamento[0],
                                    item_id,
                                    quantidadeConsumida,
                                    dataConsumido: data
                                })
                                .catch((err) => {
                                    console.log(err)
                                    return res.json(err)
                                })
                            return res.json({ mensagem: "Registrado com sucesso!" })
                        })
                        .catch((err) => {
                            console.log(err)
                            return res.json(err)
                        })
                }
            })
    }

};