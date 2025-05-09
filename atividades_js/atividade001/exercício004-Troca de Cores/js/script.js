document.addEventListener("DOMContentLoaded", function(){
    const btnVermelho = document.getElementById("btnVermelho");
    const btnVerde = document.getElementById("btnVerde");
    const btnAzul = document.getElementById("btnAzul");
    const ArticleCor = document.getElementById("ArticleCor");

    btnVermelho.addEventListener("click", function(){
         ArticleCor.style.backgroundColor = "#da2121"; // azul
    });

    btnVerde.addEventListener("click", function(){
         ArticleCor.style.backgroundColor = "#1d8122"; // azul
    })

    btnAzul.addEventListener("click", function(){
         ArticleCor.style.backgroundColor = "#0664bd"; // azul
    })
});
