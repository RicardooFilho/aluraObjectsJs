const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: [1123356677, 897542233],
  saldo: 200, 
  efetuaPagamento: function (valor) {
    if (valor > this.saldo) {
      console.log(`Saldo Insuficiente`);
    } else {
      this.saldo -= valor;
      console.log(`Pagamento realizado! Novo saldo: R$${this.saldo}`);
    }
  }
};

// cliente.efetuaPagamento(300);
cliente.efetuaPagamento(199);
