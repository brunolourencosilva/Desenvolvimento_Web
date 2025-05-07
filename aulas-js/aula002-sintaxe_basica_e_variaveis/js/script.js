// === Exemplo com Var ===
var x = 10;
var x = 20; // redeclaração permitida
console.log(x); // resultado: 20

// === Exemplo com let ===
let y = 30;
// let y = 40; // Erro: redeclaração não permiida
y = 40; // Reatribuição permitida
console.log(y) // resultado: 40

// === Exemplo com const ===
const z = 50;
// z = 60; Erro: reatribuição não permitida
console.log(z)

// Escopo de bloco (diferença entre var e let/const)
{
    var a = 1; // Vaza para fora do bloco
    let b = 2; // Restrita ao bloco
    const c = 3; // Rerstrita ao bloco 
}
console.log(a); // 1
// console.log(b); // Erro b não definido
// console.log(c); // Erro c não definido