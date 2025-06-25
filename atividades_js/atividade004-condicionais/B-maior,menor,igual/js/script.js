document.addEventListener('DOMContentLoaded', function () {

    const valorEntrada1 = document.getElementById('valor1');
    const valorEntrada2 = document.getElementById('valor2');
    const valorEntrada3 = document.getElementById('valor3');

    const verificarEntrada = document.getElementById('verificar');
    const resultado = document.getElementById('resultado');

    verificarEntrada.addEventListener('click', function () {

        if (valorEntrada1 >= valorEntrada2 && valorEntrada1 >= valorEntrada3){
            resultado.textContent = 'O primero Valor é o maior';
        } else if(valorEntrada2 >= valorEntrada1 && valorEntrada2 >= valorEntrada3){
            resultado.textContent = 'O segundo Valor é o maior';
        }
    });
})