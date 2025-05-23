// Define uma função de saudação que recebe um nome como parametro
// esta função retorna uma mensagem de-vindas personalizada
const saudação = function (nome){
    return `Ola, ${nome}! Seja bem-vindo(a).`;
};

// Esta função exibe uma mensagem no elemento de resultado da pagina
// Revebe a mensagem como parametro e a insere no html
const mostraResultado = (mensagem) =>{
    // Obtem o elemento do DOM com ID `resultado`
    const resultadoElement = document.getElementById('resultado');
    // Define o conteudo HTML do elemento com a mensagem formatada em um paragrafo
    resultadoElement.innerHTML = `<p>${mensagem}</p>`;
};

// Aguarda o evento de que todo o DOM foi carregado antes de executar o codigo
document.addEventListener('DOMContentLoaded', () =>{
    // Obtem referencia aos botões do DOM pelos seus IDS
    const saudarBtn = document.getElementById('saudar');
    const limparBtn = document.getElementById('limpar');

    // Adiciona um listener de evento de clique no botão "Saudar"
    saudarBtn.addEventListener('click',function(){
        // Chama a função de saudação com o nome "joão" e armazenar o resultado
        const mensagem = saudação("João");
        // Chama a função para exibir o resultado na pagina
        mostraResultado(mensagem)
    });

    // Adicionar um listener de evento de clique no batão "Limpar"
    limparBtn.addEventListener('click',() =>{
        // Limpar o conteudo do elemento de resultado definido seu HTML para vazio
        document.getElementById('resultado').innerHTML = '';
    });
});