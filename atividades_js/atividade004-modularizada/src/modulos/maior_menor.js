import { botaoEvento,verificarValor,printResultado } from "../utils/utils.js";

export function VerificarMaiorMenor() {
        botaoEvento('verificar_MaiorMenor', () => {
            const valorInput1 = verificarValor('valor_MaiorMenor1',);
            const valorInput2 = verificarValor('valor_MaiorMenor2',);
            const valorInput3 = verificarValor('valor_MaiorMenor3',);
        
        if (valorInput1  === null || valorInput2  === null || valorInput3  === null) {
        printResultado('resultado_MaiorMenor', 'Por favor, digite um número válido.');
        return;
        }

        // Verificação de igualdade
        if (valorInput1 === valorInput2 && valorInput2=== valorInput3) {
            printResultado('resultado_MaiorMenor', 'Todos os valores são iguais.');
            return;
        }

        // Determinação do maior valor
        const maiorValor = Math.max(valorInput1, valorInput2, valorInput3);
        let maior;
        if (maiorValor === valorInput1) {
            maior = 'O 1º valor é o maior.';
        } else if (maiorValor === valorInput2) {
            maior = 'O 2º valor é o maior.';
        } else {
            maior = 'O 3º valor é o maior.';
        }

        // Determinação do menor valor
        const menorValor = Math.min(valorInput1, valorInput2, valorInput3);
        let menor;
        if (menorValor === valorInput1) {
            menor = 'O 1º valor é o menor.';
        } else if (menorValor === valorInput2) {
            menor = 'O 2º valor é o menor.';
        } else {
            menor = 'O 3º valor é o menor.';
        }

        printResultado('resultado_MaiorMenor', `${maior} e ${menor}`);
    });
};