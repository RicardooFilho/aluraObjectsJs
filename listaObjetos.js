const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: [1123356677, 897542233],
};

cliente.endereco = [
  {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "apto 934"
  },
];

cliente.endereco.push({
  rua: "R. Joseph Ladder",
  numero: 404,
  apartamento: false,
});

// console.log(cliente.endereco);
// console.log(cliente.telefone[1]);

const listaApenasApartamentos = cliente.endereco.filter((endereco) => endereco.apartamento === true);

console.log(listaApenasApartamentos);