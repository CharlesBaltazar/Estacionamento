# Estacionamento

# Descrição

Este projeto é um sistema de estacionamento baseado na web, permitindo que os usuários cadastrem seus veículos, façam login e gerenciem registros de estacionamento.

**Tecnologias Utilizadas**

*Frontend:* HTML, CSS, JavaScript

*Backend:* Node.js, Express.js

*Banco de Dados:* MySQL

*Gerenciamento de Requisições:* Fetch API para comunicação entre frontend e backend

# Funcionalidades

Cadastro de veículos (placa e senha)
O usuário pode cadastrar um veículo informando a placa e uma senha.
Os dados são enviados para o servidor via uma requisição POST.

Login de veículos
O usuário faz login informando a placa e a senha.
Caso as credenciais estejam corretas, ele é redirecionado para a página principal.

Listagem de veículos cadastrados
Exibe uma tabela com os veículos cadastrados.
Permite editar ou excluir registros.

Edição e exclusão de registros
Permite a edição de placas e senhas cadastradas.
A exclusão remove permanentemente o registro do banco de dados.

# Rotas do Backend
POST /carro/cadastrar: Cadastra um novo veículo no banco de dados.
POST /carro/login: Valida login do veículo.
GET /carros: Retorna a lista de veículos cadastrados.
PUT /carro/editar/:id: Atualiza informações de um veículo.
DELETE /carro/deletar/:id: Exclui um veículo.
