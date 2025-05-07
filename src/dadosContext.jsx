import { createContext, useState } from "react";

export const DadosContext = createContext();

function DadosContextProvider(props) {
  const [notas, setNotas] = useState([]);
	const [chave, setChave] = useState(0);

	function addNota(item){
		setNotas([
			...notas,
		{
			id: chave,
			title: item.title,
			text: item.text
		}
		])
	}

	function delNota(chave){
		setNotas(notas.filter((item) => item.id !== chave));
	}

	return (
		<DadosContext.Provider value={{
			notas,
			chave,
			setChave,
			addNota,
			delNota
			}}>
			{props.children}
		</DadosContext.Provider>
	);
}

export default DadosContextProvider;