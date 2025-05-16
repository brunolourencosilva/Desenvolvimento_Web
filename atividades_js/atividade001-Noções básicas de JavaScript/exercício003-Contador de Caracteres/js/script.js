document.addEventListener("DOMContentLoaded", function () {

    const campo = document.getElementById("meuCampo");
    const contador = document.getElementById("contador");

    // Adiciona um ouvinte de evento ao campo de texto, que reage sempre que há alteração no valor (digitação, colagem, etc.)
    campo.addEventListener("input", () => {
        // Calcula o número de caracteres atualmente presentes no campo
        let qtdCaracteres = campo.value.length;
        // Atualiza o conteúdo do contador com a quantidade de caracteres digitados
        contador.textContent = `Caracteres: ${qtdCaracteres}`;
    });
});
