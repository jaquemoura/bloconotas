
🗒️ Bloco de Notas em React
Uma aplicação simples desenvolvida em React que permite criar e apagar anotações, utilizando o Context API para compartilhamento de dados entre componentes.

✨ Funcionalidades

Criar notas por meio de um formulário

Listar todas as notas criadas

Apagar notas individualmente

⚙️ Tecnologias Utilizadas

React

Context API

JavaScript (ES6+)

🚀 Como Rodar o Projeto

Clonar este repositório
git clone https://github.com/jaquemoura/bloconotas.git

Instalar as dependências do projeto
Execute npm install na pasta do projeto 
npm install

Como executar o projeto
Dentro da pasta do projeto execute o comando npm run dev
npm run dev

🛠️ Sobre o Desenvolvimento
Apesar de simples, este projeto foi importante para colocar em prática conceitos fundamentais do React.
A principal proposta foi implementar o Context API para compartilhar dados entre componentes de forma eficiente.

O componente de Formulário é responsável por criar novas anotações e armazená-las em uma array localizada no contexto.

O componente de Lista utiliza o método .map() para percorrer essa array e exibir as notas em forma de lista.

Também é possível apagar uma anotação com um clique.

Esse exercício reforçou minha compreensão sobre o uso de estado global com Context, além de consolidar o uso de props e renderização dinâmica no React.

![image](https://github.com/user-attachments/assets/d97f3b7a-08c0-4f77-8e4a-0cde435b8cbd)

