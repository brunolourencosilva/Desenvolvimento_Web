document.addEventListener("DOMContentLoaded", function () {

  const input = document.getElementById("CampoEntrada");
  const btnVerificar = document.getElementById("btnVerificar");
  const Resultado = document.getElementById("ResultadoPalidromo");

  btnVerificar.addEventListener("click", function () {

    // Obtém o texto digitado, removendo espaços antes e depois
    const texto = input.value.trim();

    // Cria uma versão invertida da palavra:
    // 1. split("") transforma a string em um array de caracteres
    // 2. reverse() inverte a ordem dos caracteres no array
    // 3. join("") junta os caracteres de volta em uma string
    const reverso = texto.split("").reverse().join("");

    // Verifica se a palavra invertida é igual à original
    if (reverso === texto) {
      Resultado.textContent = `Resultado: a palavra (${texto}) é um palidromo`;
    } else if (reverso !== texto) {
      Resultado.textContent = `Resultado: a palavra (${texto}) não é um palidromo`;
    } else {
      // Essa condição nunca será alcançada pois as duas anteriores cobrem todos os casos,
      // mas serve para alertar caso o campo esteja vazio
      alert("Digite algo antes de adicionar.");
    }
  });
});

