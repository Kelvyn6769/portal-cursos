# portal-cursos

Aplicação SPA desenvolvida em React + Vite para a disciplina de Aplicativos Web (IFTO).

## Como executar o projeto
1. Instale as dependências: `npm install`
2. Inicie o servidor local: `npm run dev`

## Funcionamento técnico
A navegação entre as páginas Início e Cadastro foi implementada com o React Router (`BrowserRouter`, `Routes`, `Route` e `NavLink`), permitindo trocar de tela sem recarregar o navegador. O controle e a validação do formulário utilizam o hook `useState` para armazenar os dados e exibir mensagens de erro antes de confirmar o envio simulado.