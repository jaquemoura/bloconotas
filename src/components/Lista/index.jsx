import { useState, useContext } from 'react';
import './style.css'
import { DadosContext } from '../../dadosContext'
import Card from '../Card/index.jsx'

function Lista(){
	const {notas} = useContext(DadosContext);

	return (
    <ul className="lista-notas">
      {notas.map((nota) => (
        <li className="lista-notas_item" key={nota.id}>
          <Card nota={nota} />
        </li>
      ))}
    </ul>
  );
}

export default Lista