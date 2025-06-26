document.addEventListener('DOMContentLoaded', function () {

    const valorEntrada = document.getElementById('valor');
    const verificarEntrada = document.getElementById('verificar');
    const resultado = document.getElementById('resultado');

    verificarEntrada.addEventListener('click',function(){
        const  quilometro= Number(valorEntrada.value.trim());

        // Verificação de entrada inválida
        if (isNaN(quilometro) || quilometro <= 0) {
            resultado.textContent = 'Por favor, digite um valor válido.';
            return;
        }

        let valor_passsagem = 0;
        if (quilometro <= 200){
            valor_passsagem = quilometro * 0.70
            resultado.textContent = `O valor da passagem sera de R$${valor_passsagem.toFixed(2)}.`;
        } else{
            valor_passsagem = quilometro * 0.40
            resultado.textContent = `O valor da passagem sera de R$${valor_passsagem.toFixed(2)}.`;
        }
    });
});