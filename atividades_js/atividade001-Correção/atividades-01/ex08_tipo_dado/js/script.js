// Aguardamos até que o conteúdo da página seja completamente carregado
document.addEventListener('DOMContentLoaded', function () {
    
    // Pegamos o elemento do campo de entrada onde o usuário digita o valor
    const input = document.getElementById('entrada');
    
    // Pegamos o botão que o usuário vai clicar para verificar o tipo do dado
    const botao = document.getElementById('verificar-tipo');
    
    // Pegamos o elemento onde vamos mostrar o resultado
    const resultado = document.getElementById('resultado-tipo');

    // Adicionamos um evento ao botão, que será ativado quando o usuário clicar nele
    botao.addEventListener('click', function () {
        
        // Pegamos o valor digitado pelo usuário no campo de entrada e removemos espaços extras
        const valor = input.value.trim();

        // Variável onde vamos armazenar o tipo do dado
        let tipo;

        // Verificamos se o valor está vazio
        if (valor === "") {
            // Se estiver vazio, é considerado "nulo ou vazio"
            tipo = "nulo ou vazio"; 
        } 
        // Verificamos se o valor é um número
        else if (!isNaN(Number(valor))) {
            // Se for um número, armazenamos "number"
            tipo = "number"; 
        } 
        // Verificamos se o valor é uma string "true" ou "false" (booleanos em formato de texto)
        else if (valor.toLowerCase() === "true" || valor.toLowerCase() === "false") {
            tipo = "boolean"; // Se for "true" ou "false", é considerado "boolean"
        } 
        // Caso contrário, o valor é uma string comum
        else {
            // Se não for nenhum dos anteriores, é uma string
            tipo = "string"; 
        }

        // Exibimos o tipo de dado detectado para o usuário
        resultado.textContent = `Tipo de dado detectado: ${tipo}`;
    });
});
