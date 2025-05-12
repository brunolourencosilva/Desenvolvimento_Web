document.addEventListener("DOMContentLoaded", function () {
  const entrada = document.getElementById("entrada");
  const botao = document.getElementById("btnVerificar");
  const resultado = document.getElementById("resultado");

  botao.addEventListener("click", function () {
    const valor = entrada.value;

    if (valor === "") {
      resultado.textContent = "Por favor, digite algo.";
    } else if (!isNaN(valor)) {
      resultado.textContent = "Tipo: Number";
    } else {
      resultado.textContent = "Tipo: String";
    }
  });
});
