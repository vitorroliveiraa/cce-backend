Install
[x] typescript -D
[x] npx tsc --init
[x] express / @types/express -D (@types é para tipagem do express)
[x] tsx -D (Usa ESBuild)
[x] tsup -D (Faz o build para js rodar em produção; Usa ESBuild)
[x] npx tsup ou npm run build (tsup src em scripts) faz o build da app
[x] knex (Query Builder)
[x] pg / @types/pg -D
[x] dotenv / @types/dotenv -D
[x] http-status-codes
[x] helmet (Configura o cabeçalho HTTP adicionando uma camada de segurança)
[x] cors / @types/node (Configura a API possibilitando acesso de diversos locais. É possível especificar a origem)
[x] husky (Configurei o pre-commit para rodar lint antes de comitar)
[x] @types/node -D
[x] eslint e prettier
    [x] Instalar entensão eslint
    [x] instalar pacotes: npm i -D eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
    [x] Usar como exemplo o .eslintrc.json e .prettierrc.json da API cce-backend (.editorconfig complementa essa toolkit)
    [x] Adicionar .eslintignore: 
        dist 
        .eslintrc.js 
        .prettierrc.js

Referencias:
https://caniuse.com/?search=ECMAScript%202017
https://gist.github.com/silver-xu/1dcceaa14c4f0253d9637d4811948437
https://blog.tericcabrel.com/set-up-a-nodejs-project-with-typescript-eslint-and-prettier/
https://randomzed.medium.com/configure-eslint-prettier-for-a-typescript-project-node-js-79b9f417d2cd
https://github.com/adrianomonteiroweb/eslint-config
https://gist.github.com/thiamsantos/654ec002f04c86d53611923a8b4c3a65



[] zod (Para validação de dados)

[] ts-node-dev (É melhor que ts-node)
[] ts-node @types/node
[] vitest (Tests com boa integração em relação ao ts e fácil configuração)

Steps
> Verificar o https://github.com/google/gts, parece ter coisas interessante de usar.
> Conferir vitest para tests pois tem boa compatibilidade com ts e fácil configuração

> É interessante adicionar a configuração abaixo ao package.json para que a formatação se aplicada ao salvar o arquivo trabalhando junto com o prettier:
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
