export function adicionar_evento_click(idBotao, funcao) {
    const botao = document.getElementById(idBotao);
    if (botao) {
        botao.addEventListener('click', funcao);
    } else {
        console.error(`Botão com ID '${idBotao}' não encontrado.`);
    }
}

export function verificar_entrada(valor) {
    const numero = parseInt(valor);
    if (isNaN(numero)) {
        return "TESTE VERIFICA" ;
    }
    return numero;
}
