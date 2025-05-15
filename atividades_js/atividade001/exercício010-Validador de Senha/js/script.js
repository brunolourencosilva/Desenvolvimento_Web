document.addEventListener("DOMContentLoaded", function () {

  const CampoEntrada = document.getElementById("CampoEntrada");
  const btnVerificar = document.getElementById("btnVerificar");
  const SenhaStatus = document.getElementById("SenhaStatus");

  btnVerificar.addEventListener("click", function () {

    // Obtém o valor digitado no campo de senha
    const senha = CampoEntrada.value;

    // Inicializa a variável para acumular mensagens de erro
    let mensagem = "";

    // Verifica se a senha possui ao menos 8 caracteres
    if (senha.length < 8) {
      mensagem += "A senha deve ter pelo menos 8 caracteres.\n";
    }

    // Verifica se há pelo menos uma letra minúscula
    if (!/[a-z]/.test(senha)) {
      mensagem += "Inclua pelo menos uma letra minúscula.\n";
    }

    // Verifica se há pelo menos uma letra maiúscula
    if (!/[A-Z]/.test(senha)) {
      mensagem += "Inclua pelo menos uma letra maiúscula.\n";
    }

    // Verifica se há pelo menos um número
    if (!/[0-9]/.test(senha)) {
      mensagem += "Inclua pelo menos um número.\n";
    }

    // Se nenhuma mensagem de erro foi gerada, a senha é considerada forte
    if (mensagem === "") {
      SenhaStatus.textContent = "Senha forte!";
      SenhaStatus.style.color = "green"; // Cor verde para indicar sucesso
    } else {
      // Se houver mensagens de erro, a senha é considerada fraca
      SenhaStatus.textContent = "Senha fraca:\n" + mensagem;
      SenhaStatus.style.color = "red"; // Cor vermelha para indicar alerta
    }
  });
});

