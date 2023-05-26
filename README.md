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


## Escolha de Filme 🔀

- Busca as informações dos filmes pela API fornecida e exibe conforme layout fornecido.
- - Ao clicar em um filme, o usuário -e redirecionado para a rota /sessoes/:idFilme, sendo `:idFilme` o id do filme clicado.

## Escolha de Sessão

- A partir do id da URL, obtem-se da API as sessões disponíveis para o filme e exibe conforme o *layout* fornecido.
- Ao clicar em uma sessão, o usuário é redirecionado para a rota `/assentos/:idSessao`, onde `:idSessao` é o id da sessão escolhida.

## Escolha de Assento

- Ao clicar em um assento disponível, o assento é marcado como "Selecionado".
- Ao clicar novamente em um assento selecionado, ele volta para "Disponível".
- Ao clicar em um assento indisponível, ele exibe um alerta de "Esse assento não está disponível".
- O usuário pode selecionar vários assentos.
- Ao clicar em "Reservar assento(s)", o pedido é enviado para o servidor e o usuário é redirecionado para a rota `/sucesso`.  Isso fará com os assentos marcados fiquem indisponíveis para outras marcações.
 
## Sucesso

- Ao clicar em "Voltar para Home" o usuário volta para a rota inicial (`/`), com o pedido zerado.

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