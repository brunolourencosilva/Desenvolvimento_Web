// Aguarda o carregamento completo do 
// DOM (estrutura HTML) antes de executar o código
document.addEventListener('DOMContentLoaded', function () {

    // Obtém o elemento com o id 'quadrado', 
    // que será o quadrado que vai mudar de cor
    const quadrado = document.getElementById('quadrado');

    // Obtém os botões com os ids 'vermelho', 'verde' e 'azul', 
    // que serão usados para mudar a cor do quadrado
    const btnVermelho = document.getElementById('vermelho');
    const btnVerde = document.getElementById('verde');
    const btnAzul = document.getElementById('azul');

    // Adiciona um ouvinte de evento ao botão 'vermelho'
    btnVermelho.addEventListener('click', function () {
        // Quando o botão vermelho for clicado, a cor de 
        // fundo do quadrado será alterada para vermelho
        quadrado.style.backgroundColor = 'red';
    });

    // Adiciona um ouvinte de evento ao botão 'verde'
    btnVerde.addEventListener('click', function () {
        // Quando o botão verde for clicado, a cor de 
        // fundo do quadrado será alterada para verde
        quadrado.style.backgroundColor = 'green';
    });

    // Adiciona um ouvinte de evento ao botão 'azul'
    btnAzul.addEventListener('click', function () {
        // Quando o botão azul for clicado, a cor de 
        // fundo do quadrado será alterada para azul
        quadrado.style.backgroundColor = 'blue';
    });
});
