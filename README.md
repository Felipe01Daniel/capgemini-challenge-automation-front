# 🧪 Cypress Automation Project - Helpdesk Page

Este repositório contém um framework robusto de automação de testes E2E utilizando Cypress para a aplicação **Helpdesk Page** seguindo boas práticas de organização, reutilização de código e fluxo colaborativo com Git.

## 🔍 Objetivo

Garantir a qualidade e a funcionalidade dos fluxos da aplicação através de testes automatizados utilizando **Cypress**.

## 📂 Estrutura do Projeto

```bash

.github/workflows/ - cypress-tests.yml
│ 
cypress/
├── config/                        # Configurações por ambiente
│   └── development.env.json
│
├── e2e/                           # Testes automatizados por funcionalidade
│   └── ui/
│       ├── users/                # Testes de usuários (CRUD e fluxo completo)
│       ├── tickets/              # Testes de chamados (CRUD)
│       ├── loginAccount.cy.js    # Teste de login
│       └── singUpAccount.cy.js   # Teste de cadastro
│
├── fixtures/                      # Dados mockados para os testes
├── support/                       # Suporte e base da automação
│   ├── commands/                 # Comandos customizados reutilizáveis
│   ├── pages/                    # Page Objects e componentes reutilizáveis
│   ├── utils/                    # Funções utilitárias e seletores
│   └── e2e.js                    # Arquivo carregado antes dos testes
│
├── reports/                       # Relatórios e evidências
│   ├── html/                      # Relatórios HTML com mochawesome
│   └── screenshots/               # Evidências visuais de falhas
│
├── cypress.config.js              # Configuração global do Cypress
└── README.md                      # Documentação do projeto
```

## 🚀 Tecnologias Utilizadas

* [Cypress](https://www.cypress.io/) - Testes end-to-end
* [Mochawesome](https://www.npmjs.com/package/mochawesome) - Relatórios em HTML
* [ntl (npm task list)](https://www.npmjs.com/package/ntl) - Interface interativa para execução dos testes

## ✅ Funcionalidades Testadas

* Criação, busca, edição e exclusão de usuários
* Criação, busca, e exclusão de tickets
* Validação de campos obrigatórios e opcionais
* Verificação de elementos essenciais da interface
* Testes de regras de negócio
* Teste de responsividade
* Fluxos completos de usuário

## 🧪 Executando os Testes

### 1. Clone o repositório:

```bash
git clone https://github.com/Felipe01Daniel/capgemini-challenge-automation-front.git
```

### 2. Instale as dependências:

```bash
npm install
```

### 3. Execute os testes:

* Usando a interface interativa do `ntl`:

```bash
npx ntl
```

Escolha a opção desejada no menu (testes com ou sem UI, relatórios, etc).

* Executando em modo headless (sem interface):

```bash
npx cypress run
```

* Executando com geração de relatório Mochawesome:

```bash
npm run test:report
```

O relatório será gerado em `cypress/reports/html/index.html`

### 4. Abrindo o Cypress:

```bash
npx cypress open
```

## 🧩 Comandos Customizados

Os comandos personalizados estão localizados em `cypress/support/commands/` e incluem:

* Comandos para registro, login, logout, criar, buscar, editar e deletar usuários/tickets

## 🏷️ Alias no Cypress Configuração Babel e Webpack
* Este projeto utiliza uma configuração customizada do Webpack com Babel para suportar:
* Uso de aliases de importação (@pages, @support, @fixtures), facilitando a organização e legibilidade do código.
* Transpilação do código JavaScript para compatibilidade com o ambiente de execução do Cypress.
* Essa configuração é definida no arquivo cypress.config.js e utiliza o @cypress/webpack-preprocessor com o preset @babel/preset-env.

## 🌱 Git Workflow Utilizado


## 💡 Sugestões de Melhorias

Sugestões estão documentadas  [Sugestoes e Melhorias.pdf](https://github.com/user-attachments/files/20634218/Sugestoes.e.Melhorias.pdf) .

---

### 🧠 Observações Finais

Este repositório faz parte de um **teste técnico** e foi desenvolvido com foco em boas práticas, estrutura reutilizável e cobertura abrangente.

> Repositório oficial da aplicação para testes: [https://github.com/automacaohml/helpdesk-page](https://github.com/automacaohml/helpdesk-page)

---

**Desenvolvido com dedicação**  Felipe Daniel!
