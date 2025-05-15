document.addEventListener("DOMContentLoaded", function () {

    const resultado = document.getElementById("resultado");
    const verificar = document.getElementById("btnVerificar");


    verificar.addEventListener("click", function () {

        // Lê e converte o valor do campo de entrada para número
        let numero_1 = Number(document.getElementById("numero_1").value);

        // Estrutura condicional para verificar se o número é negativo, positivo ou zero
        if (numero_1 < 0) {
            resultado.textContent = 'Resultado: Número Negativo!!';
        } else if (numero_1 > 0) {
            resultado.textContent = 'Resultado: Número Positivo!!';
        } else {
            resultado.textContent = 'Resultado: Número é igual a zero!!';
        }
    });

});
