// Aguarda o carregamento completo do DOM (estrutura HTML) antes de executar o código
document.addEventListener('DOMContentLoaded', function () {

    // Obtém o elemento do input onde o usuário digita o número
    const inputNumero = document.getElementById('numero');

    // Obtém o botão que o usuário clica para verificar o número
    const btnVerificar = document.getElementById('btnVerificar');

    // Obtém o elemento <span> onde o resultado será exibido
    const resultado = document.getElementById('resultado');

    // Função responsável por verificar se o número é positivo, negativo ou zero
    function verificarSinal() {
        // Converte o valor digitado (que é uma string) para número inteiro
        const valor = parseInt(inputNumero.value);

        // Verifica se o valor não é um número (ex: campo vazio ou texto inválido)
        if (isNaN(valor)) {
            resultado.textContent = 'Valor inválido!';
        } 
        else if (Math.sign(valor) === -1) {
            resultado.textContent = 'Número negativo';
        } 
        else if (Math.sign(valor) === 1) {
            resultado.textContent = 'Número positivo';
        } 
        else {
            resultado.textContent = 'Você digitou 0 (zero)';
        }
    }

    // Adiciona um ouvinte de evento ao botão, que chama a função verificarSinal quando clicado
    btnVerificar.addEventListener('click', verificarSinal);
});
