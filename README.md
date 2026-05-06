# Banco API Performance

Repositório destinado à execução de testes de performance utilizando JavaScript e K6, com foco em validação de APIs, análise de comportamento sob carga e geração de relatórios para acompanhamento dos resultados.

## Introdução

Este projeto foi criado com o objetivo de centralizar cenários de testes de performance para APIs utilizando o K6 como ferramenta principal de execução.

A estrutura do projeto foi organizada para facilitar:
- Criação de cenários reutilizáveis
- Separação de responsabilidades
- Escalabilidade dos testes
- Manutenção simples
- Execução local e futura integração com CI/CD

O projeto utiliza uma variável de ambiente obrigatória chamada `BASE_URL`, responsável por definir o endereço da API alvo durante a execução dos testes.

---

## Tecnologias Utilizadas

As principais tecnologias utilizadas neste projeto são:

- JavaScript (ES6+)
- K6
- Node.js
- HTML Report Export (K6 Dashboard)

---

## Estrutura do Repositório

```bash
banco-api-performance/
│
├── tests/
├── fixtures/
├── utils/
├── configs/
├── helpers/
├── README.md

```

---

## Objetivo de Cada Grupo de Arquivos

### `tests/`
Responsável pelos cenários de testes de performance.

Exemplos:
- Smoke tests
- Load tests
- Stress tests
- Spike tests
- Endurance tests

---

### `fixtures/`
Armazena os payloads utilizados nas requisições.

Objetivos:
- Reutilização de massa de dados
- Organização de requests complexos
- Separação entre lógica e dados

---

### `utils/`
Contém funções auxiliares reutilizáveis.

Exemplos:
- Helpers
- Tratamento de responses
- Funções de autenticação
- Builders de requests

---

### `configs/`
Arquivos responsáveis pelas configurações dos testes.

Exemplos:
- Thresholds
- Stages
- Variáveis globais
- Configurações compartilhadas


---

## Instalação do Projeto

### Pré-requisitos

Antes de iniciar, é necessário possuir instalado:

- Node.js
- K6

### Instalação do K6

Documentação oficial:
https://grafana.com/docs/k6/latest/set-up/install-k6/

---

## Modo de Execução

### Execução simples

```bash
BASE_URL=https://sua-api.com k6 run tests/seu-teste.js
```

---

### Execução com dashboard em tempo real

```bash
BASE_URL=https://sua-api.com \
K6_WEB_DASHBOARD=true \
k6 run tests/seu-teste.js
```

---

### Execução com exportação de relatório HTML

```bash
-e BASE_URL=https://sua-api.com \
K6_WEB_DASHBOARD=true \
K6_WEB_DASHBOARD_EXPORT=html-report.html \
k6 run tests/seu-teste.js
```

---

## Relatórios

Após a execução com exportação habilitada, o relatório HTML será gerado automaticamente no diretório atual.

Exemplo:
```bash
html-report.html
```

O relatório pode ser aberto diretamente no navegador para análise dos resultados da execução.

