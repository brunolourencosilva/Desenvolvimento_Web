document.addEventListener("DOMContentLoaded", function(){
    const campo = document.getElementById("meuCampo");
    const contador = document.getElementById("contador");

    campo.addEventListener("input", () => {
    let qtdCaracteres = campo.value.length;
    contador.textContent = `Caracteres: ${qtdCaracteres}`;
    });
});
