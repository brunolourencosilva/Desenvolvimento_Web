document.addEventListener('DOMContentLoaded', function (){
    const resultado = document.getElementById('resultado');
    const adicionar = document.getElementById('Adicionar');
    const subtrair = document.getElementById('Subtrair');
    const zerar = document.getElementById('Zerar');

    adicionar.addEventListener("click",function(){
    const novaTarefa = document.createElement('li');
    const li = document.createElement("li");
      li.textContent = texto;

      // Adiciona o <li> à lista
      lista.appendChild(li);

      // Limpa o campo de entrada
      input.value = "";
    });
});