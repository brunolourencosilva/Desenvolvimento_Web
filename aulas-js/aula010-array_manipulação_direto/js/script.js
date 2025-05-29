/**
 *  Arquivod de demontração dos principais metodso de arrays em JavaScript
 * Cada seção explica um métodos diferente com exeplos praticos
 */

// Array base que será usado nos exemplos
let arrayExemplo = ['Maçã','Banana', 'Laranja'];

/**
 * Métodos push()
 * Adiciona um ou mais elementos ao final do array e retorna o novo comprimento
 */
document.getElementById('botao-push').addEventListener('click', function() {
    // Copia do array original para não modifica-lo diretamente
    // Spread Operator(...) para criar uma copia do array
    let array = [...arrayExemplo];

    // Armazena o resultado do push (novo tamanho do array)
    let novoComprimento = array.push('Manga', 'Abacaxi');

    // Exibe os resultados
    document.getElementById('resultado-push').innerHTML = `
    <strong>Array original:</strong> [${arrayExemplo.join(', ')}]<br>
    <strong>Elementos adicionados:</strong> "Manga", "Abacaxi"<br>
    <strong>Novo comprimento do array:</strong> ${novoComprimento}<br>
    <strong>Array modificado:</strong> [${array.join(', ')}]
    `;
});

/**
 * Método pop()
 * Remove o ultimo elemento do array e retorna esse elemento
 */
document.getElementById('botao-pop').addEventListener('click', function() {
    let array = [...arrayExemplo];
    // Remove e armazena o ultimo elemento
    let elementoRemovido = array.pop();

    document.getElementById('resultado-pop').innerHTML = `
    <strong>Array original:</strong> [${arrayExemplo.join(', ')}]<br>
    <strong>Elemento Removido:</strong> ${elementoRemovido}<br>
    <strong>Array modificado:</strong> [${array.join(', ')}]
    `;
});

/* Método unshift
 *  Adiciona um ou mais elementos no inicio do array e retorna o novo comprimento
 */
document.getElementById('botao-unshift').addEventListener('click', function() {
    let array = [...arrayExemplo];
    // Adiciona elementos no inico e armazena o nvo tamanho
    let novoComprimento = array.unshift('Manga', 'Abacaxi');

    document.getElementById('resultado-unshift').innerHTML = `
    <strong>Array original:</strong> [${arrayExemplo.join(', ')}]<br>
    <strong>Elementos adicionados:</strong> "Manga", "Abacaxi"<br>
    <strong>Novo comprimento do array:</strong> ${novoComprimento}<br>
    <strong>Array modificado:</strong> [${array.join(', ')}]
    `;
});

/**
 * Método shift()
 * remove o primeiro elemento do array e retorna esse elemento
 */
document.getElementById('botao-shift').addEventListener('click', function() {
    let array = [...arrayExemplo];

    //remove e armazena o primeiro elemento
    let elementoRemovido = array.shift();
    document.getElementById('resultado-shift').innerHTML = `
    <strong>Array original:</strong> [${arrayExemplo.join(', ')}]<br>
    <strong>Elemento Removido do array:</strong> ${elementoRemovido}<br>
    <strong>Array modificado:</strong> [${array.join(', ')}]
    `;
});

/**
 * Método splice()
 * Altera o onteudo de um array removendo, substituindo ou adicionando elementos
 * Parametros: indice inicial, quantidade a remover, elementos a adicionar
 */
document.getElementById('botao-splice').addEventListener('click',  function() {
    let array = [...arrayExemplo];

    // Remove 1 elemento  partir do indice 1 e adiciona 'Kiwi' E 'Morango'
    let elementoRemovido = array.splice(1, 1, 'Kiwi', 'Morango');

    document.getElementById('resultado-splice').innerHTML = `
    <strong>Array original:</strong> [${arrayExemplo.join(', ')}]<br>
    <strong>Operação:</strong> array.splice(1, 1, 'Kiwi', 'Morango')"<br>
    <strong>Novo comprimento do array:</strong> ${elementoRemovido.join(', ')}<br>
    <strong>Array modificado:</strong> [${array.join(', ')}]
    `;
});

/**
 * Método slice()
 * Retorna uma copa de parte de um array em um novo array
 * Parâmetros: índice inicial (inclusivo), indice final (exclusivo)
 */
document.getElementById('botao-slice').addEventListener('click', function() {
    // Não precisa de copia pois slice ja retorna um novo array
    let novoArray = arrayExemplo.slice(1, 3);

    document.getElementById('resultado-slice').innerHTML = `
    <strong>Array original:</strong> [${arrayExemplo.join(', ')}]<br>
    <strong>Operação:</strong> array.slice(1 3)<br>
    <strong>Novo array retornado:</strong> ${novoArray.join(', ')}}<br>
    <strong>Array original permanace inalterado:</strong> [${arrayExemplo.join(', ')}]
    `;
});