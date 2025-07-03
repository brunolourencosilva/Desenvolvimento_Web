document.addEventListener('DOMContentLoaded', function () {

    const valorEntrada1 = document.getElementById('valor1');
    const valorEntrada2 = document.getElementById('valor2');
    const valorEntrada3 = document.getElementById('valor3');

    const verificarEntrada = document.getElementById('verificar');
    const resultado = document.getElementById('resultado');

    verificarEntrada.addEventListener('click', function () {
        const num1 = Number(valorEntrada1.value.trim());
        const num2 = Number(valorEntrada2.value.trim());
        const num3 = Number(valorEntrada3.value.trim());

        // Verificação de entrada inválida
        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            resultado.textContent = 'Por favor, digite três números válidos.';
            return;
        }

        // Verificação de igualdade
        if (num1 === num2 && num2 === num3) {
            resultado.textContent = 'Todos os valores são iguais.';
            return;
        }

        // Verificação do maior valor
        let maior;
        if (num1 >= num2 && num1 >= num3) {
            maior = 'O primeiro valor é o maior.';
        } else if (num2 >= num1 && num2 >= num3) {
            maior = 'O segundo valor é o maior.';
        } else {
            maior = 'O terceiro valor é o maior.';
        }

        // Verificação do menor valor
        let menor;
        if (num1 <= num2 && num1 <= num3) {
            menor = 'O primeiro valor é o menor.';
        } else if (num2 <= num1 && num2 <= num3) {
            menor = 'O segundo valor é o menor.';
        } else {
            menor = 'O terceiro valor é o menor.';
        }

        resultado.textContent = `${maior} ${menor}`;
    });
});
