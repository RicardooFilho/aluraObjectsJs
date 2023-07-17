const clientes = require("./clientes.json");

function filtrarAptosSemComplemento(cliente) {
  return clientes.filter((cliente) => {
    return ( cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento"));
  });
}

const filtrados = filtrarAptosSemComplemento(clientes);

console.log(filtrados);