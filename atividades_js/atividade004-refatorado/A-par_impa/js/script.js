document.addEventListener('DOMContentLoaded', function () {

    const valorEntrada = document.getElementById('valor');
    const verificarEntrada = document.getElementById('verificar');
    const resultado = document.getElementById('resultado');

verificarEntrada.addEventListener('click', () => {
    const numero = Number(valorEntrada.value.trim());

    if (!valorEntrada.value.trim() || isNaN(numero)) {
        resultado.textContent = 'Por favor, digite um número válido.';
        return;
    }

    resultado.textContent = `O número ${numero} é ${numero % 2 === 0 ? 'par' : 'ímpar'}.`;
      });

});
