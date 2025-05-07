import { useState, useContext } from 'react';
import './style.css'
import { DadosContext } from '../../dadosContext'

function Formulario() {
  const { chave, setChave, addNota} = useContext(DadosContext);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    addNota({
      id: setChave(chave + 1),
      title,
      text
    })
  }

  return (
    <section className="form">
      <form className="form-cadastro"
        onSubmit={HandleSubmit}
      >
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
      </section>
  )
}

export default Formulario
