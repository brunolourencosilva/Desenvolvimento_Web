import { botaoEvento,verificarValor,printResultado } from "../utils/utils.js";

export function VerificarAnoBissexto() {
    botaoEvento('verificar_ano', () => {
        const valorInput = verificarValor('valor_ano',);
    
    if (valorInput === null) {
      printResultado('resultado_ano', 'Por favor, digite um número válido.');
      return;
    }

    const bissexto = (valorInput % 4 === 0 && valorInput % 100 !== 0) || (valorInput % 400 === 0);
    printResultado("resultado_ano" , `${valorInput} ${bissexto ? 'é' : 'não é'} bissexto.`);
    })
}