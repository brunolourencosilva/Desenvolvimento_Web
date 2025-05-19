// Aguarda o carregamento completo do DOM (estrutura HTML) antes de executar o código
document.addEventListener('DOMContentLoaded', function () {

    // Obtém o elemento onde o usuário digita a frase (campo de input)
    const inputFrase = document.getElementById('frase');

    // Obtém o botão que o usuário clica para verificar o número de caracteres
    const btnVerificar = document.getElementById('btnVerificar');

    // Obtém o elemento onde o resultado será exibido
    const resultado = document.getElementById('resultado');

    // Função responsável por contar o número de caracteres na frase digitada
    function contarCaracteres() {
        // 'inputFrase.value' pega o valor digitado pelo usuário. 
        // 'trim()' remove espaços no início e no final.
        const frase = inputFrase.value.trim();

        // Verifica se a frase está vazia após remover os espaços.
        if (frase === '') {
            // Se a frase estiver vazia, exibe a mensagem "Digite alguma coisa!" no resultado.
            resultado.textContent = 'Digite alguma coisa!';
        } else {
            // Caso a frase não esteja vazia, exibe o número de caracteres da frase.
            resultado.textContent = `A frase possui ${frase.length} caracteres.`;
        }
    }

    // Adiciona um ouvinte de evento ao botão. 
    // Quando o botão for clicado, a função 'contarCaracteres' será chamada.
    btnVerificar.addEventListener('click', contarCaracteres);
});
