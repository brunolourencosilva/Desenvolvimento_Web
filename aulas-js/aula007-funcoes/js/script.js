// Aguarde o evento 'DOMContentLoaded' uqe é disparado quando o HTML esta completamente carregado
document.addEventListener('DOMContentLoaded',()=>{
    // Ontem referencia ao botão com ID 'calculaBtn
    const botao = document.getElementById('calcularBtn');

    // Adiciona um listener de evento de clique ao botão
    botao.addEventListener('click',() =>{
        // Obtem referencia ao input com ID 'ladoInput'
        const input = document.getElementById('ladoInput');
        // Converte o valor do input para numero decimal
        const lado = parseFloat(input.value);

        // Verifica se o valor é invalido (não é numero ou é menor/igual a zero)
        if (isNaN(lado) || lado <= 0) {
            // Mostra mensagem de erro se o valor for invalido
            mostraMensagem('por  favor. insira um valor valido maior que zero.')
            return; //  Sai da função se o valor for invalido
        }

        // Calcula a area do quadrado com o lado fornecido
        const area = calcularAreaQuadrado(lado);
        // Mostra o resultado do calculo
        mostraMensagem(`A area do quadrado com lado ${lado} é : ${area}`);
    });
});

// Função que calcula a area de um quadrado (lado * lado)
function calcularAreaQuadrado(lado){
    return lado * lado;
}

// Função que exibe mensagens no elemento com ID 'resultado'
function mostraMensagem(texto){
    const resultado = document.getElementById('resultado');
    resultado.textContent = texto;
}