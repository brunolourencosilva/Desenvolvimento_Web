document.addEventListener("DOMContentLoaded", function(){
  const MudarFundoCor = document.getElementById("MudarTextoCor");

  const corFundo = document.getElementById("corFundo");
  const corTexto = document.getElementById("corTexto");
  const corCaixa = document.getElementById("CorCaixa");

    corFundo.addEventListener("click",function(){
      MudarFundoCor.style.backgroundColor =  '';
    });
});
