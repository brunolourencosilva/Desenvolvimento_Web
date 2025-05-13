document.addEventListener("DOMContentLoaded", function () {
  const AlterCorBody = document.getElementById("AlterCorBody");

  const btnMudarTema = document.getElementById("btnMudarTema");
  const container = document.getElementById("container");

  let temaEscuro = false;

  btnMudarTema.addEventListener("click", function () {
    if (!temaEscuro) {
      // Tema escuro
      AlterCorBody.style.backgroundColor = "#000000";

      container.style.backgroundColor = "#ffffff";
      container.style.color = "#000000";
      temaEscuro = true;
    } else {
      // Tema claro
      AlterCorBody.style.backgroundColor = "#ffffff";

      container.style.backgroundColor = "#000000";
      container.style.color = "#ffffff";
      temaEscuro = false;
    }
  });
});
