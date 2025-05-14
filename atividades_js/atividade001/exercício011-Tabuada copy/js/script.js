
document.addEventListener("DOMContentLoaded", function () {
  const btnCronometro = document.getElementById("btnCronometro");
  const Contador = document.getElementById("Contador");

  // Evento de clique no botão para iniciar o contador
  btnCronometro.addEventListener("click", function () {
    let tempo = 10; // Começa de 10

    // Exibe o valor inicial
    Contador.textContent = tempo;

    // Cria um intervalo que executa a cada 1000 ms (1 segundo)
    const intervalo = setInterval(function () {
      tempo--; // Diminui 1 do tempo
      if (tempo >= 0) {
        Contador.textContent = tempo; // Atualiza o contador na tela
      } else {
        clearInterval(intervalo); // Para o intervalo quando chega a -1
        Contador.textContent = "Tempo esgotado!"; // Mostra mensagem final
      }
    }, 1000); // 1000 milissegundos = 1 segundo
  });
});



