// Aguarda o carregamento completo do 
// DOM (estrutura HTML) antes de executar o código
document.addEventListener('DOMContentLoaded', function () {

    // Obtém o campo de input onde o usuário digita uma nova tarefa
    const inputTarefa = document.getElementById('nova-tarefa');

    // Obtém o botão que o usuário clica para adicionar uma nova tarefa
    const botaoAdicionar = document.getElementById('adicionar-tarefa');

    // Obtém a lista onde as tarefas serão exibidas
    const listaTarefas = document.getElementById('tarefas');

    // Adiciona um ouvinte de evento ao botão "adicionar-tarefa"
    botaoAdicionar.addEventListener('click', function () {
        // Pega o valor digitado pelo usuário e 
        // remove espaços extras no início e no final
        const texto = inputTarefa.value.trim();

        // Verifica se o campo de input não está vazio
        if (texto !== "") {
            // Cria um novo item de lista (<li>) para a nova tarefa
            const novaTarefa = document.createElement('li');
            
            // Define o texto do item da lista com o que o usuário digitou
            novaTarefa.textContent = texto;
            
            // Adiciona o novo item à lista de tarefas
            listaTarefas.appendChild(novaTarefa);
            
            // Limpa o campo de input após adicionar a tarefa
            inputTarefa.value = "";
            
            // Foca novamente no campo de input para o 
            // próximo usuário poder digitar rapidamente
            inputTarefa.focus();
        }
    });
});
