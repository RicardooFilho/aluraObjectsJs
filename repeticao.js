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

for (let chave in cliente) {
  let tipo = typeof cliente[chave];
  if (tipo !== 'object' && tipo !== 'function'){
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`); 
  }
}

