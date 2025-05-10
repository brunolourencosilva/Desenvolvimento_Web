document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("CampoEntrada");
  const btnVerificar = document.getElementById("btnVerificar");
  const Resultado = document.getElementById("Resultado");
  const NumeroSorteado = document.getElementById("NumeroSorteado");

  btnVerificar.addEventListener("click", function () {

  const NumeroSorteado = document.getElementById("NumeroSorteado");

  const numero = Math.floor(Math.random() * 10) + 1;

  if (NumeroSorteado == 1){
    
  }
  // Exibe no elemento
  NumeroSorteado.textContent = `Número sorteado: ${numero}`;

  });
});
