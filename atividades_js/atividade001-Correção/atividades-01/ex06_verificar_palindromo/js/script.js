// Aguarda o carregamento completo do 
// DOM (estrutura HTML) antes de executar o código
document.addEventListener('DOMContentLoaded', function () {

    // Obtém o campo de input onde o usuário digita a palavra
    const entrada = document.getElementById('entrada-palavra');

    // Obtém o botão que o usuário clica para verificar se a palavra é um palíndromo
    const botao = document.getElementById('verificar');

    // Obtém o elemento onde o resultado da verificação será exibido
    const resultado = document.getElementById('resultado');

    // Adiciona um ouvinte de evento ao botão "verificar"
    botao.addEventListener('click', function () {
        
        // Pega o valor digitado pelo usuário, remove espaços extras e converte para minúsculas,
        // além de remover qualquer caractere não alfanumérico (como pontuação e espaços)
        //replace(/[\W_]/g, ''):Essa parte do código substitui todos os caracteres não alfanuméricos 
        // (ou seja, caracteres que não são letras nem números) por uma string vazia
        const texto = entrada.value.trim().toLowerCase().replace(/[\W_]/g, ''); //Opcional
        
        // Cria a versão reversa da string para verificar se é um palíndromo
        const reverso = texto.split('').reverse().join('');
        
        // Verifica se o campo de entrada está vazio
        if (texto === '') {
            // Se estiver vazio, solicita que o usuário digite algo
            resultado.textContent = "Digite uma palavra para verificar.";  
        } 
        // Se o texto for igual à versão reversa, é um palíndromo
        else if (texto === reverso) {
            // Informa que é um palíndromo
            resultado.textContent = `"${entrada.value}" é um palíndromo!`;  
        } 
        // Caso contrário, não é um palíndromo
        else {
            // Informa que não é um palíndromo
            resultado.textContent = `"${entrada.value}" não é um palíndromo.`;  
        }
    });
});
