document.addEventListener("DOMContentLoaded", function () {
  const CampoEntrada = document.getElementById("CampoEntrada");
  const btnVerificar = document.getElementById("btnVerificar");
  const SenhaStatus = document.getElementById("SenhaStatus");

  btnVerificar.addEventListener("click", function () {
    const senha = CampoEntrada.value;
    let mensagem = "";

    if (senha.length < 8) {
      mensagem += "A senha deve ter pelo menos 8 caracteres.\n";
    }

    if (!/[a-z]/.test(senha)) {
      mensagem += "Inclua pelo menos uma letra minúscula.\n";
    }

    if (!/[A-Z]/.test(senha)) {
      mensagem += "Inclua pelo menos uma letra maiúscula.\n";
    }

    if (!/[0-9]/.test(senha)) {
      mensagem += "Inclua pelo menos um número.\n";
    }

    if (mensagem === "") {
      SenhaStatus.textContent = "Senha forte!";
      SenhaStatus.style.color = "green";
    } else {
      SenhaStatus.textContent = "Senha fraca:\n" + mensagem;
      SenhaStatus.style.color = "red";
    }
  });
});
