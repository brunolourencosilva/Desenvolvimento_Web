export function adicionar_evento_click(idBotao, funcao) {
    document.getElementById(idBotao).addEventListener('click', funcao);
}

export function verificar_entrada(resultado_valor){
    const valorEntrada = (resultado_valor)
        if (isNaN(valorEntrada) || Number(valorEntrada.value.trim()) || valorEntrada === null) {
        //isNan serve para verificar se o valor não é um numero
        resultado_valor.textContent = 'Por favor, digite valor(es) válido(s).';
        return;
    }
}