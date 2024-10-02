## Template para inicializar projetos Next

Este template já vem configurado com:

- Material UI
- Kubb
- TanStack Query
- JSON Server (um servidor que fornece dados JSON)

### Como começar

1. Crie seu projeto Next usando este template:

`npx create-next-app@latest -e https://github.com/lucivaldo/initial-project-template`

2. Atualize as dependências para a última versão executando o script que automatiza esta tarefa:

`./update_dependencies.sh`

3. Opcional: execute o servidor do JSON Server para servir os dados para ambiente de desenvolvimento:

`npm run json-server`

4. Execute o servidor do Next:

`npm run dev`

5. Acesse a aplicação executando em http://localhost:3000

### Como atualizar o código cliente da API

Execute o comando: `npx kubb`
