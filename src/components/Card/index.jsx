import { useState, useContext } from 'react';
import './style.css'
import { DadosContext } from '../../dadosContext'

function Card({ nota }){
    const { delNota } = useContext(DadosContext);

    return (
      <section className="card-nota">
				<div className="card-nota-top">
					<p className="card-nota_id">Id: {nota.id}</p>
					<header className="card-nota_cabecalho">
            <h3 className="card-nota_title">{nota.title}</h3>
          </header>
					<p className="card-nota_text">{nota.text}</p>
				</div>
      <div className="card-nota_button">
        <button className="delete_button" onClick={() => delNota(nota.id)}>
          Apagar
        </button>
      </div>
    </section>
    );
}

export default Card