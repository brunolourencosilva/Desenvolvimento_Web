document.addEventListener('DOMContentLoaded', function () {

    const valorEntrada = document.getElementById('valor');
    const verificarEntrada = document.getElementById('verificar');
    const resultado = document.getElementById('resultado');

    verificarEntrada.addEventListener('click', function () {
        const ano = parseInt(valorEntrada.value);

        if (isNaN(ano) || ano <= 0) {
            resultado.textContent = 'Digite um ano válido (número inteiro positivo).';
            return;
        }

        if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
            resultado.textContent = `${ano} é bissexto.`;
        } else {
            resultado.textContent = `${ano} não é bissexto.`;
        }
    });
});
