import React, { useState, useEffect } from 'react';

import api from '../../services/api'
import './styles.css'

export default function Mobile() {

    const [itensFrigobar, setItensFrigobar] = useState([])

    async function consomeQuarto(e) {
        e.preventDefault();
        console.log("Quarto")
    }

    useEffect(() => {
        api.get('/itensFrigobar')
            .then(res => {
                setItensFrigobar(res.data)
            })
    }, [])

    console.log("oi" + itensFrigobar)

    return (
        <div className="App-mobile">
            <header className="App-header-mobile">
                <div>Consumo Frigobar</div>
            </header>
            <form className="Body-mobile" onSubmit={consomeQuarto}>
                <div>
                    <label className="itemLineTitel">Numero do quarto:</label>
                    <input type="number" name="quarto" id="quarto" placeholder="Ex: 204" />
                </div>
                <label className="itemLineTitel">Itens restantes:</label>
                {itensFrigobar.map(item => (
                    <div className="itemLine">
                        <label>{item.nomeItem}:</label>
                        <div>
                            <div className="CheckBoxLine">
                                <input type="checkbox" name="c2" id="c2" value='2' />
                                <input type="checkbox" name="c2" id="c2" value='2' />
                                <input type="checkbox" name="c2" id="c2" value='2' />
                                <input type="checkbox" name="c2" id="c2" value='2' />
                            </div>
                            <div className="CheckBoxLabelLine">
                                <label>1</label>
                                <label>2</label>
                                <label>3</label>
                                <label>4</label>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="footer">
                    <input type="submit" className="salvarBtn" name="salvar" id="salvar" value="Salvar" />
                </div>
            </form>
        </div>
    )
}