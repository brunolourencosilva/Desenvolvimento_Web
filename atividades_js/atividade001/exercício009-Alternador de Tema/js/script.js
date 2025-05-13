document.addEventListener("DOMContentLoaded", function () {
  const AlterCorBody= document.getElementById("AlterCorBody");
  const btnMudarTema = document.getElementById("btnMudarTema");
  const container = document.getElementById("container");

  btnMudarTema.addEventListener("click", function(){
    AlterCorBody.style.backgroundColor = "#000000";
    AlterCorBody.style.backgroundColor = "#000000";
    container.style.backgroundColor = "#ffffff";
  });
});
