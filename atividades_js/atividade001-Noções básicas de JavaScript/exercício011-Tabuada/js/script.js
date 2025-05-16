
document.addEventListener("DOMContentLoaded", function () {
  
  const CampoEntrada = document.getElementById("CampoEntrada");
  const btnVerificar = document.getElementById("btnVerificar");
  const Tabuada = document.getElementById("Tabuada");

  btnVerificar.addEventListener("click", function () {
    
    // Pega o valor digitado no campo, remove espaços e converte para número
    const valor = Number(CampoEntrada.value.trim());

    // Limpa o conteúdo anterior da tabuada, caso exista
    Tabuada.innerHTML = "";

    // Laço de repetição que vai de 1 até 10
    for (let i = 1; i <= 10; i++) {
      // Cria um novo item de lista
      const li = document.createElement("li");

      // Define o texto do item como a multiplicação correspondente
      li.textContent = `${valor} x ${i} = ${valor * i}`;

      // Adiciona esse item à lista da tabuada na tela
      Tabuada.appendChild(li);
    }
  });
});


