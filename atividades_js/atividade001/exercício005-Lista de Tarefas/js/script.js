document.addEventListener("DOMContentLoaded", function () {

  const input = document.getElementById("listaCampo");
  const lista = document.getElementById("listaItens");
  const botao = document.getElementById("btnAddLista");

  botao.addEventListener("click", function () {

    // Obtém o texto digitado no campo, removendo espaços em branco nas extremidades
    const texto = input.value.trim();

    // Verifica se o campo não está vazio
    if (texto !== "") {

      // Cria um novo elemento <li> e define seu conteúdo
      const li = document.createElement("li");
      li.textContent = texto;

      // Adiciona o <li> à lista
      lista.appendChild(li);

      // Limpa o campo de entrada
      input.value = "";

    } else {
      // Se o campo estiver vazio, exibe um alerta ao usuário
      alert("Digite algo antes de adicionar.");
    }
  });
});

