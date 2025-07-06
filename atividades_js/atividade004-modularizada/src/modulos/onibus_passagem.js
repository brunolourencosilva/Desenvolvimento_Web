import { botaoEvento,verificarValor,printResultado } from "../utils/utils.js";

export function calcularPassagem() {
    botaoEvento('verificar_passagem', () => {
      const valorInput = verificarValor('valor_passagem');
      
      if (valorInput === null || valorInput <= 0) {
        printResultado('resultado_passagem', 'Por favor, digite um número válido.');
        return;
      }
      
      let elementoMensagem;
      let elemento;

      if(valorInput < 200 ){
        elemento = valorInput * 0.70
        elementoMensagem = `O valor da passagem abaixo de R$200,essa passagem custara R$ ${elemento.toFixed(2)}.`
      } else{
        elemento = valorInput * 0.40
        elementoMensagem = `O valor da passagem acima de R$200,essa passagem custara R$ ${elemento.toFixed(2)}.`
      };

      printResultado("resultado_passagem" ,`${elementoMensagem}`);
    });
};