import { VerificarMaiorMenor } from "./modulos/maior_menor.js";
import { Verificar_parImpar } from "./modulos/par_impar.js";
import { Verificar_LimiteVelocidade } from "./modulos/limite_velocidade.js";

document.addEventListener("DOMContentLoaded", () => {
    Verificar_parImpar();
    VerificarMaiorMenor();
    Verificar_LimiteVelocidade();
});
