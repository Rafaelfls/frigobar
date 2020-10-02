import React, { useState, useEffect } from 'react';

import { FaSearch } from 'react-icons/fa';
import api from '../../services/api'
import './styles.css'

export default function Web() {

  const [isVisible, setIsVisible] = useState(false)
  const [listaDeApartamentos, setListaDeApartamentos] = useState([])
  const [listaItens, setListaItens] = useState([[], null])

  async function carregaConsumidos() {
    var response = await api.get('/apartamentos')

    setListaDeApartamentos(response.data)
  }

  async function confirmaPagamento(confirmar) {
    if(confirmar){
      await api.put('/apartamentos',{
        apartamento:listaItens[1]
      }).then(res=>{
        document.getElementById("modalAp").style.display = 'none'
        document.getElementById("modalAp2").style.display = 'none'
      })
    }else{
      document.getElementById("modalAp2").style.display = 'flex'
    }
  }


  useEffect(() => {
    carregaConsumidos()
  }, []);

  async function showModal(apartamento) {
    if (!isVisible) {
      const res = await api.get(`/consomeFrigobar/${apartamento}`)
      document.getElementById("modalAp").style.display = 'flex'
      setIsVisible(true);
      const lista = res.data
      setListaItens([lista, apartamento])
    } else {
      document.getElementById("modalAp").style.display = 'none'
      document.getElementById("modalAp2").style.display = 'none'
      setIsVisible(false);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>Consumo Frigobar</div>
        <div className="SearchBar">
          <input type="text" placeholder="Busca" id="searchBar" />
          <button><FaSearch /></button>
        </div>
      </header>
      <div className="Body">
        {listaDeApartamentos.map(apartamentos => (
          <button key={apartamentos.id} className="Card" onClick={() => showModal(apartamentos.apartamento)}>
            <div className="Apartamento">{apartamentos.apartamento}</div>
            <div className="Pagou">Pagamento: aguardando pagamento</div>
          </button>
        ))}
      </div>

      <div className="Modal" id="modalAp">
        <div className="CardModal">
          <div className="ContentModal">
            <div>Apartamento {listaItens[1]}</div>
            {listaItens[0].map(item => (
              <div>{item.nomeItem}: {item.quantidadeConsumida}</div>
            ))}
          </div>
          <div className="FooterModal">
            <button onClick={showModal}>Cancelar</button>
            <button onClick={()=>confirmaPagamento(false)}>Ok</button>
          </div>
        </div>
      </div>

      <div className="Modal" id="modalAp2">
        <div className="CardModal">
          <div className="ContentModal">
            <div>Deseja confirmar o pagamento do apartamento {listaItens[1]}?</div>
            <div>(Este processo não poderá ser desfeito)</div>
          </div>
          <div className="FooterModal">
            <button onClick={showModal}>Cancelar</button>
            <button onClick={()=>confirmaPagamento(true)}>Confirmar</button>
          </div>
        </div>
      </div>
    </div>
  );
}