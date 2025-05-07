// Aguarde o carregamneto completo de HTml antes de rodar o script
document.addEventListener("DOMContentLoaded",function (){

    // Obtem a referencia ao elemneto <ul> com id "saida"
    const ul = document.getElementById('saida');

    // Função que limpa o conteudo da lista (zera o innerHTML da <ul>)
    const limpar = () => ul.innerHTML = '';

    // Função que adciona um <li> com texto dentro da <ul>
    const addItem = texto => {
        // Cria um novo elemento <li>
        const li = document.createElement('li');
        // Define o texto do <li>
        li.textContent = texto;
        // Adiciona o <li> como filho da <ul>
        ul.appendChild(li);
    };

    // Evento para o botão com  id "btnWhile"
    document.getElementById('btnWhile').addEventListener('click',function (){
        // Limpa a lista antes de começar
        limpar();
        // Inicializa a varivel de controle
        let i = 1;
        // Enquanto i for menor ou igual a 3
        while (i <= 3) {
            // Adiciona item com numero atual
            addItem('while: ' + i);
            i++;
        }
    });


    // Evento para o botao com id "btnDoWhile"
    document.getElementById('btnDoWhile').addEventListener('click',function(){
        limpar();
        const senhaCorreta = "123"
        // Variavel para armazenar a  entrada do usuario
        let tentativa;
        // Contador de tentativas
        let tentativas = 0;

        do {
            // Solicita a senha
            tentativa = prompt('Digite a senha(tente 123): ')
            // Conta mais uma tentativa
            tentativas++;
            // Repete até a senha estar correta
        } while (tentativa != senhaCorreta);
        // Mostra resultado: Interpolação é feita com crase ``
        addItem(`Senha correta após ${tentativas} tentativas(s)!`);
    });

    // Evento para o botão com id "btnFor"
    document.getElementById('btnFor').addEventListener('click', function (){
        limpar();
        for (let i = 1; i <= 5; i++) {
            // Adiciona item para cada numero
            addItem('for: '+i)
        }
    });
});