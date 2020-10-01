import React, {useState} from 'react';

import { FaSearch } from 'react-icons/fa';

import './styles.css'

export default function Web(){
  
  const [isVisible, setIsVisible] = useState(false)

  
  function showModal(apartamento){
    if(!isVisible){
      document.getElementById("modalAp").style.display = 'flex'
      setIsVisible(true);
    }else{
      document.getElementById("modalAp").style.display = 'none'
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
        <button className="Card" onClick={() => showModal("204")}>
          <div className="Apartamento">204</div>
          <div className="Pagou">Pagamento: falta pagamento</div>
        </button>
        <button className="Card">
          <div className="Apartamento">205</div>
          <div className="Pagou">Pagamento: falta pagamento</div>
        </button>
        <button className="Card">
          <div className="Apartamento">208</div>
          <div className="Pagou">Pagamento: falta pagamento</div>
        </button>
        <button className="Card">
          <div className="Apartamento">204</div>
          <div className="Pagou">Pagamento: falta pagamento</div>
        </button>
        <button className="Card">
          <div className="Apartamento">204</div>
          <div className="Pagou">Pagamento: falta pagamento</div>
        </button>
        <button className="Card">
          <div className="Apartamento">204</div>
          <div className="Pagou">Pagamento: falta pagamento</div>
        </button>
        <button className="Card">
          <div className="Apartamento">204</div>
          <div className="Pagou">Pagamento: falta pagamento</div>
        </button>
        <button className="Card">
          <div className="Apartamento">204</div>
          <div className="Pagou">Pagamento: falta pagamento</div>
        </button>
        <button className="Card">
          <div className="Apartamento">204</div>
          <div className="Pagou">Pagamento: falta pagamento</div>
        </button>
        <button className="Card">
          <div className="Apartamento">204</div>
          <div className="Pagou">Pagamento: falta pagamento</div>
        </button>
        <button className="Card">
          <div className="Apartamento">204</div>
          <div className="Pagou">Pagamento: falta pagamento</div>
        </button>
        <button className="Card">
          <div className="Apartamento">204</div>
          <div className="Pagou">Pagamento: falta pagamento</div>
        </button>
        <button className="Card">
          <div className="Apartamento">204</div>
          <div className="Pagou">Pagamento: falta pagamento</div>
        </button>
        <button className="Card">
          <div className="Apartamento">204</div>
          <div className="Pagou">Pagamento: falta pagamento</div>
        </button>
        <button className="Card">
          <div className="Apartamento">204</div>
          <div className="Pagou">Pagamento: falta pagamento</div>
        </button>
      </div>
      <div className="Modal" id="modalAp">
        <div className="CardModal">
          <div className="ContentModal">
            <div>Apartamento 204</div>
            <div>Coca Cola: 2</div>
            <div>Amstel: 1</div>
            <div>M&M: 1</div>
          </div>
          <div className="FooterModal">
            <button onClick={showModal}>Cancelar</button>
            <button onClick={showModal}>Ok</button>
          </div>
        </div>
      </div>
    </div>
    );
}