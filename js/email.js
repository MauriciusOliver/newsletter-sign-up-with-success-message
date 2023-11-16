// Recuperar o e-mail da URL (parâmetro 'email')
var params = new URLSearchParams(window.location.search);
var userEmail = params.get("email");

// Exibir o e-mail em negrito
var exibirEmail = document.getElementById("userEmail");
exibirEmail.textContent = userEmail;