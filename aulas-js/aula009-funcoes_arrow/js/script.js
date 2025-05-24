// ==============================================
// FUNÇÕES DE CÁLCULOS (Arrow Functions)
// ==============================================
const dobrar = numero => numero * 2;
const triplicar = numero => numero *3;

// ==============================================
// FUNÇÃO DE EXIBIÇÃO DE RESULTADOS
// ==============================================
function mostrarResultado(operacao,texto) {
    // Obtém referencias aos elementos DOM
    const input = document.getElementById('numero'); // Campo de entrada
    const resultado = document.getElementById('resultado'); // Eleento para exibir resulados

    // Converte o valor de string para número decimal
    const numero = parseFloat(input.value);

    // Validação de entrada - verifica se nãoi é um numero
    if (isNaN(numero)) {
        resultado.textContent = 'Por favor, digite um número válido';
        resultado.style.color = 'red'; // Feedback visual de erro
        return;
    }

    // Execuyta a operação matemática (dobrar ou triplicar)
    const valor = operacao(numero);

    // Formata a operação matématica (dobrar ou triplicar)
    resultado.textContent = `${texto} de ${numero} é: ${valor}`;
    resultado.style.color = 'black';
}

// ==============================================
// EVENT LISTENERS - INTERAÇÕES DO USÚARIO
// ==============================================

// Botão "Dobro" - Calcula e exibe o dobro do número
document.getElementById('dobro').addEventListener('click', function() {
    mostrarResultado(dobrar, 'O Dobro');
});

// Botão "Triplo" - Calcula e exibe o triplo do número
document.getElementById('triplo').addEventListener('click', function() {
    mostrarResultado(dobrar, 'O Triplo');
});

// Campo numérico  - Permite Calcula com a telca Enter
document.getElementById('numero').addEventListener('keypress', function(enter) {
    // Verifica se a tecla pressionada foi Enter (codigo 13)
    if (enter.key === 'Enter') {
        // Por padrão, calcula o dobro Enter é pressionado
        mostrarResultado(dobrar, 'O dobro')
    }
});