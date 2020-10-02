const connection = require('../database/connection')

module.exports = {
    async listaApartamentos(req, res) {

        const apartamentos = await connection('apartamentos')
            .where('pagou',false)
            .select('*')
            .catch((err) => {
                console.log(err)
                return res.json(err)
            })

        return res.json(apartamentos)
    },

    async confirmaPagamentoApartamento(req, res) {
        const { apartamento } = req.body;

        const lista = await connection('apartamentos')
            .where('apartamento', apartamento)
            .andWhere('pagou',false)
            .update({
                pagou: true,
            })
            .catch((err) => {
                console.log(err)
                return res.json(err)
            })

        return res.json({ mensagem: "Apartamento " + apartamento + " pago!" })
    },

    async criaApartamentos(req, res) {
        const { apartamento } = req.body;

        await connection('apartamentos')
            .where('apartamento', apartamento)
            .andWhere('pagou', false)
            .select('*')
            .then(async (rows) => {
                if (rows.length > 0) {
                    return res.sendStatus(200)
                } else {
                    const apartamentos = await connection('apartamentos')
                        .insert({
                            apartamento,
                            pagou: false,
                        })
                        .catch((err) => {
                            console.log(err)
                            return res.json(err)
                        })

                    return res.json(apartamentos)
                }
            })
    },
};