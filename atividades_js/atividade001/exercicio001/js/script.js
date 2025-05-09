document.addEventListener("DOMContentLoaded", function(){

    const resultado = document.getElementById("resultado");

    let numero_1 = Number(document.getElementById("numero_1").value);
    let numero_2 = Number(document.getElementById("numero_2").value);

    const somar = document.getElementById("btnSomar");

    const subtração = document.getElementById("btnSubtração");

    const dividir = document.getElementById("btnDividir");

    const multiplicar = document.getElementById("btnMultiplicar");

    const limpar = () => ul.innerHTML = '';

    somar.addEventListener("click", function (){
        let numero_1 = Number(document.getElementById("numero_1").value);
        let numero_2 = Number(document.getElementById("numero_2").value);
        resultado.textContent = 'Resultado: ' + (numero_1 + numero_2);

    });

    subtração.addEventListener("click", function (){
        let numero_1 = Number(document.getElementById("numero_1").value);
        let numero_2 = Number(document.getElementById("numero_2").value);
        resultado.textContent = 'Resultado: ' + (numero_1 - numero_2);

    });

    dividir.addEventListener("click", function (){
        let numero_1 = Number(document.getElementById("numero_1").value);
        let numero_2 = Number(document.getElementById("numero_2").value);
        resultado.textContent = 'Resultado: ' + (numero_1 / numero_2);

    });

    multiplicar.addEventListener("click", function (){
        let numero_1 = Number(document.getElementById("numero_1").value);
        let numero_2 = Number(document.getElementById("numero_2").value);
        resultado.textContent = 'Resultado: ' + (numero_1 * numero_2);

    });
});