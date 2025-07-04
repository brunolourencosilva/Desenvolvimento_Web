document.addEventListener('DOMContentLoaded', function () {

    const valorEntrada = document.getElementById('valor');
    const verificarEntrada = document.getElementById('verificar');
    const resultado = document.getElementById('resultado');

    verificarEntrada.addEventListener('click', () => {
        const salario = Number(valorEntrada.value.trim());

        // Verificação de entrada inválida
        if (isNaN(salario) || salario <= 0) {
            resultado.textContent = 'Por favor, digite um valor válido.';
            return;
        }

        // Verificação e cálculo de aumento salarial
        let salario_aumentado;

        if (salario <= 1000) {
            salario_aumentado = salario * 1.10;
            resultado.textContent = `Aumento de 10%. Salário após ajuste: R$ ${salario_aumentado.toFixed(2)}.`;
        } else if (salario >= 1500) {
            salario_aumentado = salario * 1.05;
            resultado.textContent = `Aumento de 5%. Salário após ajuste: R$ ${salario_aumentado.toFixed(2)}.`;
        } else {
            resultado.textContent = 'O salário está entre R$ 1000 e R$ 1500. Não haverá alterações.';
        }
    });
})