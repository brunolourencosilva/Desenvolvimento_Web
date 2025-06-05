const produtos = [
  { nome: "Sabonete Natural", preco: 15.00, id: "cosmeticoItens" },
  { nome: "Shampoo Organico", preco: 25.00, id: "cosmeticoItens" },
  { nome: "Granola Artesanal", preco: 18.50, id: "alimentoItens" },
  { nome: "Mel Puro", preco: 22.00, id: "alimentoItens" },
];

document.addEventListener("DOMContentLoaded", () => {
  const seletor = document.getElementById("select");       
  const resultado = document.getElementById("ResultadoTotal");
  const listaProdutos = document.getElementById("Produtos");

  seletor.addEventListener("change", () => {
    const TipoSelecionado = seletor.value;

    // Filtando os produtos
    let ItensFilter;
    if (TipoSelecionado === "todosItens") {
      ItensFilter = produtos;
    } else {
      ItensFilter = produtos.filter(produto => produto.id === TipoSelecionado);
    }

    // Somando os preços
    const total = ItensFilter.reduce((soma, produto) => soma + produto.preco, 0);
    resultado.textContent = `R$ ${total.toFixed(2)}`;

    listaProdutos.innerHTML = "";

    // Printando os valores um embaixo do outro
      ItensFilter.forEach(produto => {
      const item = document.createElement("li");

      const nome = document.createElement("p");
      nome.classList.add("nome-produto");
      nome.textContent = produto.nome;
      nome.style.fontWeight = "bold";

      const preco = document.createElement("p");
      preco.classList.add("preco-produto");
      preco.textContent = `R$ ${produto.preco.toFixed(2)}`;

      item.append(nome, preco);
      listaProdutos.appendChild(item);
    });
  });
});
