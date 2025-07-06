import { botaoEvento,verificarValor,printResultado } from "../utils/utils.js";

export function VerificarTriangulo() {
        botaoEvento('verificar_triangulo', () => {
            const valorInput1 = verificarValor('valor_triangulo1',);
            const valorInput2 = verificarValor('valor_triangulo2',);
            const valorInput3 = verificarValor('valor_triangulo3',);
        
        if (valorInput1  === null || valorInput2  === null || valorInput3  === null) {
        printResultado('resultado_triangulo', 'Por favor, digite um número válido.');
        return;
        } 

         if (valorInput1  <= 0 && valorInput2  <= 0 && valorInput3  <= 0) {
        printResultado('resultado_triangulo', 'Por favor, digite um número válido.');
        return;
        }

        const formaTriangulo =
            valorInput1 + valorInput2 >= valorInput3 &&
            valorInput2 + valorInput3>= valorInput1 &&
            valorInput3 + valorInput1 >= valorInput2;

        printResultado('resultado_triangulo', `${formaTriangulo ? 'Os valores formam um triângulo.' : 'Esses valores não formam um triângulo.'}`);
    });
};