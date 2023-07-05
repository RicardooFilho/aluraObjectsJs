const cliente = {
  nome: "Ricardo",
  idade: 19,
  cpf: "11122233344",
  endereço: "rua 45",
  email: "ricardo.tagami@gmail.com"
}

console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos`);
//Ou
console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos`);

console.log(`Três primeiros números do CPF: ${cliente.cpf.substring(0, 3)}`);
//Ou
console.log(`Três primeiros números do CPF: ${cliente["cpf"].substring(0, 3)}`);

const chaves = ["nome", "idade", "cpf", "email"];


chaves.forEach((chave) => {
  console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});

