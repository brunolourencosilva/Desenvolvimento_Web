// Aguarda o carregamento completo do HTML antes de rodar o script
document.addEventListener('DOMContentLoaded', function () {

    // Obtém a referência ao elemento <ul> com id "ListaBreakContinue"
    const ul = document.getElementById('listaBreakContinue');

    // Função que limpa o conteúdo da lista (Zera o conteudo da <ul>)
    const limpar = () => ul.innerHTML = '';

    // Função que adiciona um item <li> com texto especificado dentro da <ul>
    const add = texto => {
        // Cria um novo elemento <li>
        const li = document.createElement('li');
        // Define o texto do <li>
        li.textContent = texto;
        // adiciona o <li> como filho da <ul>
        //append: adiciona um elemento filho dentro de outro elemento HTML
        ul.appendChild(li);
    };

    // Evento ao clicar no botão com id "btnBreak"
    document.getElementById('btnBreak').addEventListener('click', function () {
        limpar();
        // loop de 1 a 50
        for (let i = 1; i <= 50; i++) {

            // Se o número for divisivel por 13...
            if (i % 13 === 0) {
                // Adicona mensagem
                add('Parou no ' + i + ' (divisivel por 13!)');
                // Encerra o loop imediatamente
                break;
            }
            // Caso não seja divisivel por 13, apenas adiciona o número na listagem
            add(i);
        }
    });

    // Evento ao clicar no botão com id "btnContinue"
    document.getElementById('btnContinue').addEventListener('click', function () {
        limpar();
        
        // Loop 1 a 5
        for (let i = 1;i <= 5; i++) {

            // Se o número for 3, pula a iteração atual (não adiciona o 3)
            if (i === 3) continue;
            // Adiciona o número normalmente se não for 3
            add(i);
        }
    });
});