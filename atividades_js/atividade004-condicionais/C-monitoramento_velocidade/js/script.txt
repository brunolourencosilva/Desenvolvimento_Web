document.addEventListener('DOMContentLoaded', function () {

    const valorEntrada = document.getElementById('valor');
    const verificarEntrada = document.getElementById('verificar');
    const resultado = document.getElementById('resultado');

    verificarEntrada.addEventListener('click', function () {
        const num = Number(valorEntrada.value.trim());

        // Verificação de entrada inválida
        if (isNaN(num) || num < 0) {
            resultado.textContent = 'Por favor, digite um valor válido.';
            return;
        }

        // Verificação velocidade
        if (num === 60) {
            resultado.textContent = 'Veiculo igual ao limite da velocidade!! Desacelere por sua segurança ';
            return;
        } else if (num >= 60) {
            resultado.textContent = 'Veiculo acima do limite da velocidade!! Desacelere por sua segurança ';
        }  else if (num === 0) {
            resultado.textContent = 'Veiculo parado';
        } else {
            resultado.textContent = 'Veiculo abaixo do limite da velocidade!!';
        }

    })
})