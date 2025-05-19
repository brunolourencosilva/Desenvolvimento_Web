// Este código está aguardando que o conteúdo da página (HTML) seja completamente carregado.
document.addEventListener('DOMContentLoaded', function () {
    
    // Aqui ele está pegando os elementos da página que possuem os IDs 'valor1', 'valor2', e 'resultado'.
    // Esses elementos podem ser caixas de texto (input) ou algum outro tipo de campo onde o usuário insira valores.
    const valor1 = document.getElementById('valor1');
    const valor2 = document.getElementById('valor2');
    const resultado = document.getElementById('resultado');

    // A função 'calcular' será responsável por realizar a operação matemática com base nos valores informados pelo usuário.
    function calcular(operador) {

        // A função 'parseFloat' tenta transformar o que o usuário escreveu nos campos de 'valor1' e 'valor2' em números.
        // Se o usuário colocar algo que não pode ser convertido em número, o valor será NaN (Not a Number).
        const numero1 = parseFloat(valor1.value);
        const numero2 = parseFloat(valor2.value);

        // Este 'if' verifica se algum dos números não é válido (NaN).
        // Se algum valor for inválido, ele mostra uma mensagem de erro na área de 'resultado'.
        if (isNaN(numero1) || isNaN(numero2)) {
            resultado.textContent = 'Valores inválidos!'; // Mensagem de erro se os números não forem válidos.
            return; // A função 'calcular' termina aqui e não faz mais nada.
        }

        // A variável 'resposta' será usada para armazenar o resultado da operação.
        let resposta;

        // Este 'switch' decide qual operação será realizada com base no operador (+, -, *, /).
        switch (operador) {
            case '+': 
                resposta = numero1 + numero2;
                break;
            case '-': 
                resposta = numero1 - numero2;
                break;
            case '*': 
                resposta = numero1 * numero2;
                break;
            case '/': 
                if (numero2 === 0) {
                    resultado.textContent = 'Divisão por zero!'; 
                    return; // A função termina aqui e não faz mais nada.
                }
                resposta = numero1 / numero2;
                break;
            default: // Caso o operador seja algo inesperado, exibe uma mensagem de erro.
                resultado.textContent = 'Operador inválido!';
                return; // A função termina aqui, sem realizar nenhuma operação.
        }

        // Exibe o resultado da operação na área 'resultado' da página.
        resultado.textContent = resposta;
    }

    // Aqui estão os eventos que estão aguardando o clique dos botões para realizar a operação.
    // Quando o usuário clica em um botão (como soma, subtração, etc.), 
    // a função 'calcular' é chamada com o operador correto.

    document.getElementById("btnSoma").addEventListener("click", () => calcular("+"));
    document.getElementById("btnSubtracao").addEventListener("click", () => calcular("-"));
    document.getElementById("btnProduto").addEventListener("click", () => calcular("*"));
    document.getElementById("btnDivisao").addEventListener("click", () => calcular("/"));
});
