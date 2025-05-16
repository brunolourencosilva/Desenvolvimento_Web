document.addEventListener("DOMContentLoaded", function () {

  const AlterCorBody = document.getElementById("AlterCorBody");
  const btnMudarTema = document.getElementById("btnMudarTema");
  const container = document.getElementById("container");

  // Variável de controle para saber qual tema está ativo (false = tema claro, true = tema escuro)
  let temaEscuro = false;

  btnMudarTema.addEventListener("click", function () {
    
    if (!temaEscuro) {
      // Caso o tema atual seja claro, muda para tema escuro
      
      // Fundo do corpo fica preto
      AlterCorBody.style.backgroundColor = "#000000";

      // Container fica com fundo branco e texto preto (inverso para contraste)
      container.style.backgroundColor = "#ffffff";
      container.style.color = "#000000";

      // Atualiza o estado para tema escuro
      temaEscuro = true;

    } else {
      // Caso o tema atual seja escuro, muda para tema claro
      
      // Fundo do corpo fica branco
      AlterCorBody.style.backgroundColor = "#ffffff";

      // Container fica com fundo preto e texto branco (inverso para contraste)
      container.style.backgroundColor = "#000000";
      container.style.color = "#ffffff";

      // Atualiza o estado para tema claro
      temaEscuro = false;
    }
  });
});

