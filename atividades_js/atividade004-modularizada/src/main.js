import { VerificarMaiorMenor } from "./modulos/maior_menor.js";
import { Verificar_parImpar } from "./modulos/par_impar.js";
import { Verificar_LimiteVelocidade } from "./modulos/limite_velocidade.js";
import { calcularAumentoSalario } from "./modulos/aumento_salario.js";
import { calcularPassagem } from "./modulos/onibus_passagem.js";
import { VerificarAnoBissexto } from "./modulos/ano_bissexto.js";

document.addEventListener("DOMContentLoaded", () => {
    Verificar_parImpar();
    VerificarMaiorMenor();
    Verificar_LimiteVelocidade();
    calcularAumentoSalario()
    calcularPassagem()
    VerificarAnoBissexto()
});
