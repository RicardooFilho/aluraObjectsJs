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

function ligaParaCliente (telefoneComercial, telefoneResidencial) {
  console.log(`Ligando para ${telefoneComercial}`);
  console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
  destinatario: cliente.nome,
  ...cliente.endereco[0],
}

console.log(encomenda);
