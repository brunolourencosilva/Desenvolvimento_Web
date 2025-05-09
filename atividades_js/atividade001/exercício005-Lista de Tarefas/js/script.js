document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("listaCampo");
  const lista = document.getElementById("listaItens");
  const botao = document.getElementById("btnAddLista");

  botao.addEventListener("click", function () {
    const texto = input.value.trim();

    if (texto !== "") {
      const li = document.createElement("li");
      li.textContent = texto;
      lista.appendChild(li);
      input.value = ""; 
    } else {
      alert("Digite algo antes de adicionar.");
    }
  });
});
