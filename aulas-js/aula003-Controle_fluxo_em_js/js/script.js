// Aguarda o carregmanto completo do conteudo HTML antes de executar o codigo
document.addEventListener("DOMContentLoaded",function(){
    
    //Obtem a referencia ao botão com id "bntVerificador"
    const bnt = document.getElementById("bntVerificar");

    //Obtem a referencia ao campo de entrada (input) com id "idade"
    const input = document.getElementById('idade');

    //Obtem a refencia ao elemento onde o resultado sera exibido (com id "resutado")
    const resultado = document.getElementById("resultado");

    // Adiciona um ouvinte de evento ao botão para reagir ao clique
    bnt.addEventListener("click", function(){
        
        const idade =  parseInt(input.value);

        if(idade < 18){
            resultado.textContent = "Menor de idade!!";
        }
        else if (idade === 18){
            resultado.textContent = "Tem exatamente 18 anos!!";
        }
        else{
            resultado.textContent = "Maior idade!!"
        }
    })
})