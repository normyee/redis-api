# Descrição do Projeto
Este projeto é um exemplo simples de como fazer cache de uma requisição HTTP utilizando o Redis. O código utiliza o Node.js com o framework Express, a biblioteca Axios para fazer a requisição HTTP para a API da SpaceX, e a biblioteca Redis para fazer o cache dos dados retornados pela API.

O código faz uma requisição GET para a rota "/rockets" da API da SpaceX e retorna um JSON com os dados dos foguetes da SpaceX. Ele primeiro verifica se já existe um cache dos dados no Redis, e caso exista, retorna o cache em vez de fazer a requisição novamente. Caso contrário, ele faz a requisição e salva o resultado no Redis, com uma expiração de 5 segundos.
# Configuração
Antes de executar o código, é necessário ter um container do Redis rodando na máquina. Para isso, execute o seguinte comando no terminal:
```sh
$ docker run --name redis-cache -p 6379:6379 -d redis
```
Este comando irá baixar e executar o container do Redis na porta 6379.

Para rodar o código, é necessário ter o Node.js instalado na máquina. Em seguida, execute o seguinte comando no terminal, dentro do diretório do projeto:
```sh
$ npm install
```
Este comando irá instalar todas as dependências necessárias.

Em seguida, execute o seguinte comando para iniciar o servidor:
```sh
$ npm start
```
O servidor estará rodando na porta 3000.
# Documentação da API 
A documentação da API da SpaceX pode ser encontrada neste link: https://docs.spacexdata.com/#5fcdb875-914f-4aef-a932-254397cf147a

A rota disponível neste projeto é:
```sh
GET /rockets
```
Esta rota retorna um JSON com os dados dos foguetes da SpaceX.
