# braillecast

## Como Contribuir
Há 4 formas de contribuir
- Reportar issue (bug ou tarefa), nesse repositório;
- Responder dúvidas de tercerios;
- Escrever documentação para o projeto; e
- Resolver issue já cadastrado

**A única forma que código será aceito como contribuição é se esse tratar de alguma issue já cadastrada!**

A contribuição seguirá o moldes do Git Flow. Ou seja;
- A branch master contém a última versão estável do projeto. Cada versão nova de master, deve haver um tag.
- A branch develop contém a última versão não estável do projeto.
- Bugs são resolvido brancheando a partir do master, em forma de hotfix. Branches de hotfix, quando finalizadas, são mergeadas em master e develop.
- Novas funcionalidades (features) são feitas via branch do develop. Branches de features, quando finalizadas, são mergeadas de volta pro develop.
- Preparamos uma nova versão para o master, via branches de release. Elas são brancheadas a partir do develop, e após pequenas mudanças para resolver qualquer bug, e com testes satisfatórios, são mergeadas ao master e develop.

O nome das branches seguirão o padrão:
- **master:** master
- **develop:** develop
- **release:** release/{YYYYMMDD}-{version}, e.g release/20190208-0.1.0
- **feature:** feature/BCAST-{número-da-issue}-{nome-da-feature}, e.g feature/BCAST-1-converter-audio
- **hotfix:** hotfix/BCAST-{número-da-issue}-{nome-do-bug}, e.g hotfix/BCAST-2-tela-branca-no-submit


## Instalação do projeto para desenvolvedores
```
npm install
```

## Rodar em localhost
```
npm start
```