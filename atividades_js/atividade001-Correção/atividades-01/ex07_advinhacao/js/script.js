// Aguardamos até que o conteúdo da página seja completamente 
// carregado antes de executar o código
document.addEventListener('DOMContentLoaded', function () {
    
    // Geramos um número secreto aleatório entre 1 e 10
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;

    // Pegamos o elemento do campo de entrada onde o usuário digita o palpite
    const input = document.getElementById('palpite');

    // Pegamos o botão que o usuário vai clicar para tentar adivinhar
    const botao = document.getElementById('tentar');

    // Pegamos o elemento onde vamos mostrar as mensagens para o usuário
    const mensagem = document.getElementById('mensagem');

    // Adicionamos um evento para o botão, que será ativado 
    // quando o usuário clicar nele
    botao.addEventListener('click', function () {

        // Pegamos o valor digitado no campo de entrada e tentamos 
        // convertê-lo para um número inteiro
        const palpite = parseInt(input.value, 10);

        // Verificamos se o valor digitado não é um número ou se 
        // está fora do intervalo de 1 a 10
        if (isNaN(palpite) || palpite < 1 || palpite > 10) {
            // Se for inválido, mostramos uma mensagem de erro
            mensagem.textContent = "Digite um número válido.";
            return; // Impede o código de continuar executando
        }

        // Se o palpite for igual ao número secreto, 
        // mostramos que o usuário acertou
        if (palpite === numeroSecreto) {
            mensagem.textContent = "Você acertou!";
        } 
        // Se o palpite for menor que o número secreto, 
        // pedimos para tentar um número maior
        else if (palpite < numeroSecreto) {
            mensagem.textContent = "Tente um número maior.";
        } 
        // Se o palpite for maior que o número secreto, 
        // pedimos para tentar um número menor
        else {
            mensagem.textContent = "Tente um número menor.";
        }
    });
});

