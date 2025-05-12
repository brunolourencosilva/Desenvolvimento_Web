document.addEventListener("DOMContentLoaded", function () {
  // Pegando os elementos da tela
  const input = document.getElementById("CampoEntrada");
  const btnVerificar = document.getElementById("btnVerificar");
  const resultado = document.getElementById("Resultado");
  const dica = document.getElementById("Dica");
  const btnSortear = document.getElementById("btnSortear");

  let numeroSorteado = 0;

  // Quando clicar em "Re/Começar jogo"
  btnSortear.addEventListener("click", function () {
    numeroSorteado = Math.floor(Math.random() * 10) + 1;
    dica.textContent = "Tente acerta o numero sorteado";
    input.value = "";
  });

  // Quando clicar em "Verificar"
  btnVerificar.addEventListener("click", function () {
    const palpite = Number(input.value);

    if (palpite === numeroSorteado) {
      dica.textContent = "Parabéns! Você acertou!";
    } else if (palpite > numeroSorteado) {
      dica.textContent = "Dica: Tente um número menor.";
    } else if (palpite < numeroSorteado) {
      dica.textContent = "Dica: Tente um número maior.";
    }
  });
});


