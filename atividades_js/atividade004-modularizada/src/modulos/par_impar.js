import { adicionar_evento_click, verificar_entrada } from "../utils/utils.js";

export function calcular_imparPar() {
    adicionar_evento_click('verificar_par_impar', () => {
        const entrada = document.getElementById("valor_par_impar");
        const resultado = document.getElementById("resultado_par_impar");

        const numero = verificar_entrada(entrada.value);

        if (numero % 2 === 0){
            resultado.textContent = `O número ${numero} é par.`;
        } else{
            resultado.textContent = `O número ${numero} é impar.`
        }
    });
}
