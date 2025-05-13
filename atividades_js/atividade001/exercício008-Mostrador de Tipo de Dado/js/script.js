document.addEventListener("DOMContentLoaded", function () {
  const entrada = document.getElementById("CampoEntrada");
  const botao = document.getElementById("verificar");
  const resultado = document.getElementById("resultado");

  botao.addEventListener("click", function () {
    const valor = entrada.value.trim();

    if (valor === "") {
      resultado.textContent = "Por favor, digite algo.";
    } else if (!isNaN(valor)) {
      resultado.textContent = "Tipo: number";
    } else {
      resultado.textContent = "Tipo: string";
    }
  });
});
