// *ARQUIVO: metodo.js
// *DESCRIÇÃO: Demosntração dos principais métodos de iteração de arrays em javaScript
// *AUTOR: Bruno Lourenço da Silva
// *DATA: 29/05/2025
// *VERSÃO: 1.0



// ======================================
// DADOS DE EXEMPLO
// ======================================

// Array de numeros para exemplos basicos
const numero = [1,2,3,4,5];

// Array de objetos (pessoas) para exemplo mais complexos
const pessoas = [
    { nome: 'Gal Gadot',idade:40, cidade: 'Rosh HaAyin'},
    { nome: 'Elizabeth Olsen',idade:36, cidade: 'Sherman Oaks'},
    { nome: 'Alwexandra Daddario',idade:39,cidade: 'Nova York'},
    { nome: 'Anna de Armas',idade:37,cidade: 'Havana'},
    { nome: 'Grace Kelly',idade:95,cidade: 'Filadelfia'},
    { nome: 'Jaz Sinclair',idade:17,cidade: 'Dallas'},
];

// ======================================
// METODOS DE ITERAÇÃO
// ======================================


// METODO: forEach() (paraCada())
// DESCRIÇÃO: Executar uma função para elemento do array
// NÃO RETORNA um novo array

document.getElementById('botao-paraCada').addEventListener('click', function() {
    let resultado = '';

    //Usando forEach para iterar sobre cada numero
    numero.forEach(function(numero,indice){
        resultado += `Posição ${indice}: ${numero}\n`
    });

    document.getElementById('resultado-paraCada').innerHTML = `
        <strong>Array original:</strong> ${JSON.stringify(numero)}<br><br>
        <strong>Iteração com forEach:</strong><br>
        ${resultado}
        <small>Observação: forEach não retorna um novo array</small>
        `;
});