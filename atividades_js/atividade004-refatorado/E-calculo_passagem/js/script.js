document.addEventListener('DOMContentLoaded', function () {

    const valorEntrada = document.getElementById('valor');
    const verificarEntrada = document.getElementById('verificar');
    const resultado = document.getElementById('resultado');

    verificarEntrada.addEventListener('click', () => {
        const quilometro = Number(valorEntrada.value.trim());

        // Verificação de entrada inválida
        if (isNaN(quilometro) || quilometro <= 0) {
            resultado.textContent = 'Por favor, digite um valor válido.';
            return;
        }

        // Cálculo do valor da passagem com base na distância
        const valor_passagem = quilometro <= 200
            ? quilometro * 0.70
            : quilometro * 0.40;

        // Exibição do resultado com 2 casas decimais
        resultado.textContent = `O valor da passagem será de R$ ${valor_passagem.toFixed(2)}.`;
    });

}); 