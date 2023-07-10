//Função require() permite transformar o arquivo JSON em um objeto usável em qualquer outro lugar
const dados = require("./cliente.json");

console.log(dados);
console.log(`\n`);
console.log(typeof dados);

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString);

console.log(clienteEmString.nome);

const objetoCliente = JSON.parse(clienteEmString);
console.log(objetoCliente);