document.addEventListener("DOMContentLoaded", function () {

  const entrada = document.getElementById("CampoEntrada");
  const botao = document.getElementById("verificar");
  const resultado = document.getElementById("resultado");

  botao.addEventListener("click", function () {

    // Obtém o valor digitado, removendo espaços em branco nas extremidades
    const valor = entrada.value.trim();

    // Verifica se o campo está vazio
    if (valor === "") {
      resultado.textContent = "Por favor, digite algo.";
    
    // Verifica se o valor digitado é um número (isNaN retorna falso para números válidos)
    } else if (!isNaN(valor)) {
      resultado.textContent = "Tipo: number";
    
    // Caso não seja vazio nem número, é tratado como string
    } else {
      resultado.textContent = "Tipo: string";
    }
  });
});

