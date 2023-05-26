# Cineflex

## Sobre
Single-Page Application (SPA) para um cinema, usando React Router! 

## Tecnologias 🚀

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://react.dev/)
- [styled-components](https://styled-components.com/)
- [javascript](https://www.javascript.com/)
- [vite](https://vitejs.dev/)



## 🎨 Layout 

O aplicativo segue o layout fornecido no Figma. Foi aplicada a estilização conforme as especificações do layout, utilizando as fontes indicadas.

- [Figma](https://www.figma.com/file/xt4dsKrSryDMuTaSaEBuwV/Cineflex?type=design&node-id=0-1&t=0khHo9d6YtsX9PCX-0) 


## Componentização e dados 🔀

Os elementos da página foram componentizados com React em arquivos separados. Os dados dinâmicos da página, como o deck e flashcards, foram representados como arrays ou objetos no JavaScript e renderizados na tela.

## Flashcards 🗂️
- Existem 8 flashcards no aplicativo.
- Todos os flashcards aparecem na tela virados e indexados por números (ex: Pergunta 1, Pergunta 2), ocultando a pergunta ou termo que eles contêm.
- Ao clicar na seta de "play" de um flashcard, a pergunta ou termo correspondente ao flashcard é revelado.
- Para ver a resposta do flashcard, o usuário deve clicar no ícone de "virar".
- Ao virar um flashcard, o usuário visualiza a resposta correta para a pergunta e três botões: "Não lembrei", "Quase não lembrei" e "Zap!".
- Ao clicar em qualquer um dos botões, o flashcard é marcado como respondido e seu status é alterado para refletir a escolha do usuário.
- Depois de respondida, a pergunta fica fechada, com o texto tachado na cor correspondente ao seu status e um ícone indicativo.
- A pergunta não pode ser aberta novamente.



## Contador de conclusão 

- O contador mostra quantas perguntas o usuário já respondeu e quantas perguntas há no total.
- Sempre que uma carta for respondida, o número de flashcards respondidos é atualizado.
- O número de flashcards respondidos nunca pode ser maior do que o número total.

## Executando o projeto
Para executar o projeto localmente, siga as etapas abaixo:

- Faça o clone do repositório do GitHub:

```
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

- Navegue até o diretório do projeto:

```
cd nome-do-repositorio
```

- Instale as dependências do projeto:

```
npm install
```

- Inicie o servidor de desenvolvimento:

```
npm npm run dev
```

O aplicativo estará disponível no navegador no endereço ` http://localhost:5173/`