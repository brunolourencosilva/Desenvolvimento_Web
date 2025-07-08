import { botaoEvento,verificarValor,printResultado } from "../utils/utils.js";

export function calcularBhaskara() {
        botaoEvento('verificar_bhaskara', () => {
            const A = verificarValor('valor_bhaskara1',);
            const B = verificarValor('valor_bhaskara2',);
            const C = verificarValor('valor_bhaskara3',);
        
            if (A === null || B === null || C === null) {
            printResultado('resultado_bhaskara', 'Por favor, digite um número válido.');
            return;
            } 
            
            
            // Cálculo delta
            const delta = B ** 2 - 4 * A * C;

            // Função personalizada para calcular raiz quadrada usando o método de Newton
            function raizQuadrada(n) {
                let x = n;
                let y = 1;
                const e = 0.000001; // Precisão da aproximação
                while (x - y > e) {
                    x = (x + y) / 2;
                    y = n / x;
                }
                return x;
            }


            // Se o delta for negativo, a equação não possui raízes reais
            if (delta < 0) {
                printResultado('resultado_bhaskara', `
                    <p>A = ${A}, B = ${B}, C = ${C}</p>
                    <p>Δ = ${delta} → Não existem raízes reais.</p>
                `);
                return;
            }

            // Cálculo da raiz quadrada de delta (√Δ)
            const raizDelta = raizQuadrada(delta);

            // Fórmulas de Bhaskara: x' e x"
            const x1 = (-B + raizDelta) / (2 * A);
            const x2 = (-B - raizDelta) / (2 * A);

            // Exibição detalhada dos cálculos com explicações
            printResultado('resultado_bhaskara', `x' = ${x1.toFixed(2)} x" = ${x2.toFixed(2)}`);
    });
};