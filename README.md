# API Connect - Raffael Andrade

## 🎯 Objetivo da API
A API Connect é um MVP desenvolvido para gerenciar o cadastro e a consulta de usuários de forma simples e eficiente, servindo como base de integração para os demais serviços da startup.

## 🛠️ Tecnologias Utilizadas
* **Node.js**: Ambiente de execução JavaScript server-side.
* **Express**: Framework web minimalista e flexível para Node.js.
* **JavaScript (CommonJS)**: Linguagem base para a estruturação das rotas, controladores e simulação de banco de dados em memória.

## 🚀 Como Executar o Projeto Localmente

Siga os passos abaixo para configurar e rodar a aplicação na sua máquina:

1. Clone o repositório:
  git clone https://github.com/RaffaelVieira/api-connect.git


## 📋 Tabela de Referência de Endpoints

| Método | Endpoint | Descrição | Exemplo de Corpo (Body) |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/usuarios` | Lista todos os usuários cadastrados no sistema. | *Nenhum* |
| **GET** | `/api/usuarios/:id` | Busca um usuário específico com base no ID informado. | *Nenhum* |
| **POST** | `/api/usuarios` | Cadastra um novo usuário (valida nome e e-mail). | `{"nome": "Carlos Silva", "email": "carlos@example.com"}` |
