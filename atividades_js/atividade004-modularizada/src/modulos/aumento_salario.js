import { botaoEvento,verificarValor,printResultado } from "../utils/utils.js";

export function calcularAumentoSalario() {
      botaoEvento('verificar_salario', () => {
          const valorInput = verificarValor('valor_salario',);
      
      if (valorInput === null) {
        printResultado('resultado_salario', 'Por favor, digite um número válido.');
        return;
      }

      let salario_aumentado;
      let resultado_SalarioAumentado

      if (valorInput <= 1000) {
          salario_aumentado = valorInput * 1.10;
          resultado_SalarioAumentado = `Aumento de 10%. Salário após ajuste: R$ ${salario_aumentado.toFixed(2)}.`;
      } else if (valorInput >= 1500) {
          salario_aumentado = valorInput * 1.05 ;
          resultado_SalarioAumentado = `Aumento de 10%. Salário após ajuste: R$ ${salario_aumentado.toFixed(2)}.`
      } else {
          resultado_SalarioAumentado = 'O salário está entre R$ 1000 e R$ 1500. Não haverá alterações.';
      }

      printResultado('resultado_salario', `${resultado_SalarioAumentado}`);
    })
}