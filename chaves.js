const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: [1123356677, 897542233],
};

// cliente.endereco = [
//   {
//     rua: "R. Joseph Climber",
//     numero: 1337,
//     apartamento: true,
//     complemento: "apto 934"
//   },
// ];

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("endereco")) {
  console.error(`Erro. É necessário ter um endereço cadastrado`);
}

