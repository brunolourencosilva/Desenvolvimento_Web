// Espera o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", function () {

    const resultado = document.getElementById("resultado");

    const somar = document.getElementById("btnSomar");
    const subtração = document.getElementById("btnSubtração");
    const dividir = document.getElementById("btnDividir");
    const multiplicar = document.getElementById("btnMultiplicar");

    somar.addEventListener("click", function () {
        // Lê os valores atualizados dos inputs
        let numero_1 = Number(document.getElementById("numero_1").value);
        let numero_2 = Number(document.getElementById("numero_2").value);
        // Exibe o resultado da soma
        resultado.textContent = 'Resultado: ' + (numero_1 + numero_2);
    });

    // Evento de clique para subtrair
    subtração.addEventListener("click", function () {
        let numero_1 = Number(document.getElementById("numero_1").value);
        let numero_2 = Number(document.getElementById("numero_2").value);
        resultado.textContent = 'Resultado: ' + (numero_1 - numero_2);
    });

    // Evento de clique para dividir
    dividir.addEventListener("click", function () {
        let numero_1 = Number(document.getElementById("numero_1").value);
        let numero_2 = Number(document.getElementById("numero_2").value);
        resultado.textContent = 'Resultado: ' + (numero_1 / numero_2);
    });

    // Evento de clique para multiplicar
    multiplicar.addEventListener("click", function () {
        let numero_1 = Number(document.getElementById("numero_1").value);
        let numero_2 = Number(document.getElementById("numero_2").value);
        resultado.textContent = 'Resultado: ' + (numero_1 * numero_2);
    });

});