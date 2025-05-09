document.addEventListener("DOMContentLoaded", function(){

    const resultado = document.getElementById("resultado");


    const verificar = document.getElementById("btnVerificar");

    verificar.addEventListener("click", function () {
        let numero_1 = Number(document.getElementById("numero_1").value);

        if (numero_1 < 0) {
            resultado.textContent = 'Resultado: Número Negativo!!';
        } else if (numero_1 > 0) {
            resultado.textContent = 'Resultado: Número Positivo!!';
        } else {
            resultado.textContent = 'Resultado: Número é igual a zero!!';
        }
    });

});
