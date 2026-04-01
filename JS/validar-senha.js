function validarSenha(event) {
    event.preventDefault();

    let senha = document.getElementById("senha").value;
    let confirmar = document.getElementById("confirmarSenha").value;
    let erro = document.getElementById("erro");

    if (senha !== confirmar) {
        erro.textContent = "As senhas não coincidem!";
        return;
    }

    if (senha.length < 6) {
        erro.textContent = "A senha deve ter pelo menos 6 caracteres!";
        return;
    }

    erro.textContent = "";
}
