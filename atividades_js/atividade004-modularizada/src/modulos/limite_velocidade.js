import { botaoEvento, verificarValor, printResultado } from "../utils/utils.js";

export function Verificar_LimiteVelocidade() {
  botaoEvento('verificar_Velocidade', () => {
    const valorInput = verificarValor('valor_Velocidade');

    if (valorInput === null || valorInput < 0) {
      printResultado('resultado_Velocidade', 'Por favor, digite um número válido.');
      return;
    }

    let aviso = '';

    // Verificação da velocidade
    if (valorInput > 60) {
      aviso = 'acima do limite da velocidade!! Desacelere por sua segurança.';
    } else if (valorInput === 60) {
      aviso = 'igual ao limite da velocidade!! Mantenha a atenção.';
    } else if (valorInput === 0) {
      aviso = 'parado.';
    } else {
      aviso = 'abaixo do limite da velocidade!!';
    }

    printResultado('resultado_Velocidade', `O veículo está ${aviso}`);
  });
}