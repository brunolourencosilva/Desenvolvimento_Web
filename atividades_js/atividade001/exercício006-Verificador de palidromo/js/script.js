document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("CampoEntrada");
  const btnVerificar = document.getElementById("btnVerificar");
  const Resultado = document.getElementById("ResultadoPalidromo");

  btnVerificar.addEventListener("click", function () {
    const texto = input.value.trim();
    const reverso = texto.split("").reverse().join("");

    if (reverso === texto) {
      Resultado.textContent =`Resultado: a palavra (${texto}) é um palidromo`
    } else if(reverso !== texto){
      Resultado.textContent =`Resultado: a palavra (${texto}) não é um palidromo`
    }else {
      alert("Digite algo antes de adicionar.");
    }
  });
});
