// Aguardamos até que o conteúdo da página seja completamente carregado
document.addEventListener('DOMContentLoaded', function () {
    
    // Pegamos o botão que será usado para alternar o tema
    const botao = document.getElementById('alternar-tema');
    
    // Pegamos o elemento <body> da página, onde o tema será alterado
    const corpo = document.body;

    // Adicionamos um evento de clique ao botão. Quando o botão for clicado, 
    // a função será executada.
    botao.addEventListener('click', function () {

        // Verificamos se o corpo da página já possui a classe 'claro' 
        // (indica que o tema claro está ativo)
        if (corpo.classList.contains('claro')) {

            // Se a classe 'claro' estiver presente, removemos a classe 'claro' e 
            // adicionamos a classe 'escuro'
            corpo.classList.remove('claro');
            corpo.classList.add('escuro');
        } else {
            // Caso contrário, removemos a classe 'escuro' e 
            // adicionamos a classe 'claro'
            corpo.classList.remove('escuro');
            corpo.classList.add('claro');
        }
    });
});
