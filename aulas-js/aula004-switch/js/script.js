// Aguarde o carregamento completo do HTMl antes de rodar o script
document.addEventListener("DOMContentLoaded", function(){

    // Obtem o botão com id "bntMostraDia"
    const botao = document.getElementById("btnMostraDia");

    // Obtem o campo de entrada com id "numerodDia" (onde o usuario digita o numero)
    const entrada = document.getElementById("numeroDia");

    // Obtem o elemento com id "respostaDia", onde sera exibido o nome do dia
    const saida = document.getElementById("respostaDia");

    // Adiciona um evento ao botao para executar uma função quando ele clicado
    botao.addEventListener("click", function (){

        // Converte o valor digitado pelo usuario (string) em numero inteiro
        const numero = parseInt(entrada.value);

        // Verifica o valor da variavel "numero" e exibe o dia corresponde
        switch (numero) {
            case 1:
                saida.textContent = "Domingo";
                break;
            case 2:
                saida.textContent = "Segunda-feira";
                break;
            case 3:
                saida.textContent = "Terça-feira";
                break;
            // Adicione os demais dias:
            case 4:
                saida.textContent = "Quarta-feira";
                break;
            case 5:
                saida.textContent = "Quinta-feira";
                break;
            case 6:
                saida.textContent = "Sexta-feira";
                break;
            case 7:
                saida.textContent = "Sábado";
                break;
            default:
                saida.textContent = "Número inválido!";
                break;
        }
    })
})