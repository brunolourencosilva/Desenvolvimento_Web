// Aguardamos até que o conteúdo da página seja completamente carregado
document.addEventListener('DOMContentLoaded', function () {
    
    // Pegamos o botão de iniciar a contagem e o elemento que mostrará o contador
    const botaoIniciar = document.getElementById('iniciar');
    const contador = document.getElementById('contador');

    // Declaramos a variável onde vamos armazenar a referência do intervalo
    let intervalo;

    // Adicionamos um evento ao botão, para iniciar o contador quando clicado
    botaoIniciar.addEventListener('click', function () {

        // Definimos o tempo inicial do contador (10 segundos)
        let tempo = 10;

        // Mostramos o tempo inicial (10) no contador
        contador.textContent = tempo;

        // Cancelamos qualquer intervalo anterior para evitar 
        // múltiplos timers ao clicar várias vezes
        clearInterval(intervalo);

        // Iniciamos um novo intervalo que será executado a cada 
        // 1 segundo (1000 milissegundos)
        //O setInterval é uma função do JavaScript usada para executar uma 
        // função repetidamente em intervalos de tempo fixos.
        intervalo = setInterval(() => {
            
            // Decrementamos o tempo a cada 1 segundo
            tempo--;

            // Se o tempo for maior ou igual a zero, 
            // atualizamos o contador com o novo tempo
            if (tempo >= 0) {
                contador.textContent = tempo;
            }

            // Quando o tempo chegar a zero, paramos o intervalo e 
            // mostramos a mensagem "Tempo esgotado!"
            if (tempo === 0) {
                // Paramos o contador
                clearInterval(intervalo); 
                // Exibimos a mensagem final
                contador.textContent = "Tempo esgotado!"; 
            }
            // O intervalo é de 1 segundo
        }, 1000); 
    });
});

