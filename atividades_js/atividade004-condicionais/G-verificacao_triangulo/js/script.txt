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
        if (num1 + num2 >= num3 && num2 + num3 >= num1 && num3 + num1 >= num2) {
            resultado.textContent = `Os valores formam um triângulo.`;
        } else {
            resultado.textContent = `Esses valores não formam um triângulo.`;
        }
    });
});
