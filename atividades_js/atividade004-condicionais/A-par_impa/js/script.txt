document.addEventListener('DOMContentLoaded', function () {

    const valorEntrada = document.getElementById('valor');
    const verificarEntrada = document.getElementById('verificar');
    const resultado = document.getElementById('resultado');

    verificarEntrada.addEventListener('click', function () {
        const valor = valorEntrada.value.trim();
        const numero = Number(valor);

        if (valor === '' || isNaN(numero)) {
            resultado.textContent = 'Por favor, digite um número válido.';
            return;
        }

        if (numero % 2 === 0) {
            resultado.textContent = `O número ${numero} é par.`;
        } else {
            resultado.textContent = `O número ${numero} é ímpar.`;
        }
    });
})