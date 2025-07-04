document.addEventListener('DOMContentLoaded', function () {

    const valorEntrada = document.getElementById('valor');
    const verificarEntrada = document.getElementById('verificar');
    const resultado = document.getElementById('resultado');

    verificarEntrada.addEventListener('click', () => {
        const valor = valorEntrada.value.trim();
        const ano = parseInt(valor, 10);

        // Validação de entrada: verifica se é número inteiro positivo
        if (!valor || isNaN(ano) || ano <= 0) {
            resultado.textContent = 'Digite um ano válido (número inteiro positivo).';
            return;
        }

        // Verificação de ano bissexto
        const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
        resultado.textContent = `${ano} ${bissexto ? 'é' : 'não é'} bissexto.`;
    });
});
