document.addEventListener('DOMContentLoaded', function () {

    const valorEntrada = document.getElementById('valor');
    const verificarEntrada = document.getElementById('verificar');
    const resultado = document.getElementById('resultado');

    verificarEntrada.addEventListener('click', function () {
        const salario = Number(valorEntrada.value.trim());

        // Verificação de entrada inválida
        if (isNaN(salario) || salario <= 0) {
            resultado.textContent = 'Por favor, digite um valor válido.';
            return;
        }

        // Verificação salario
        if (salario <= 1000) {
            salario_aumentado = salario * 1.10
            resultado.textContent = `Aumento de 10% no salario, salario apos mudança: ${salario_aumentado}.`;
            return;
        } else if (salario >= 1500) {
            salario_aumentado = salario * 1.05
            resultado.textContent = `Aumento de 10% no salario, salario apos mudança: ${salario_aumentado}.`;
        } else {
            resultado.textContent = 'O salario esta entre 1000 e 1500,não havera alterações.';
        }

    })
})