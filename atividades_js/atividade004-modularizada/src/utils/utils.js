export function botaoEvento(idbotao, funcao) {
    const botao = document.getElementById(idbotao);
    botao.addEventListener('click',funcao);
}

export function printResultado(id,print){
    const resultado = document.getElementById(id);
    if (resultado) resultado.innerHTML = print;
}

export function verificarTipoValor(...entradaDado){
    return entradaDado.every(v => typeof v === 'number' && !isNaN(v));
}

export function verificarValor(id){
    const entrada = parseFloat(document.getElementById(id).value);
    return isNaN(entrada) ? null : entrada;
}