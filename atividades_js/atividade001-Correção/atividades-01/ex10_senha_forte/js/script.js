// Aguardamos até que o conteúdo da página seja completamente carregado
document.addEventListener('DOMContentLoaded', function () {
    
    // Pegamos o campo de entrada onde o usuário vai digitar a senha
    const senhaInput = document.getElementById('senha');
    
    // Pegamos o botão que o usuário vai clicar para validar a senha
    const validarBtn = document.getElementById('validar');
    
    // Pegamos o elemento onde o resultado (se a senha é forte ou fraca) será exibido
    const resultado = document.getElementById('resultado-senha');

    // Adicionamos um evento de clique ao botão, 
    // para validar a senha quando o botão for clicado
    validarBtn.addEventListener('click', function () {
        
        // Pegamos o valor digitado no campo de senha
        const senha = senhaInput.value;

        // Verificamos se a senha contém pelo menos uma letra maiúscula
        const temMaiuscula = /[A-Z]/.test(senha);

        // Verificamos se a senha contém pelo menos uma letra minúscula
        const temMinuscula = /[a-z]/.test(senha);

        // Verificamos se a senha contém pelo menos um número
        const temNumero = /[0-9]/.test(senha);

        // Verificamos se a senha tem pelo menos 8 caracteres
        const tamanhoSuficiente = senha.length >= 8;

        // Se a senha atender todos os requisitos 
        // (letras maiúsculas, minúsculas, números e tamanho mínimo de 8 caracteres)
        if (temMaiuscula && temMinuscula && temNumero && tamanhoSuficiente) {
            // Se for uma senha forte, mostramos a mensagem "Senha forte!!!" em verde
            resultado.textContent = "Senha forte!!!";
            resultado.style.color = "green";
        } else {
            // Caso contrário, mostramos a mensagem "Senha fraca!" em 
            // vermelho e explicamos os requisitos
            resultado.textContent = "Senha fraca! - Use letras maiúsculas, minúsculas, números e no mínimo 8 caracteres.";
            resultado.style.color = "red";
        }
    });
});
