var botao = document.getElementById('botao');
var email = document.getElementById('email');

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtenha o valor do campo de entrada de e-mail
    var email = document.getElementById('email').value;

    // Verifique se o e-mail é válido
    var emailValido = /^\S+@\S+\.\S+$/.test(email);

    if (emailValido) {
        // Redirecionar o usuário para a página de confirmação
        window.location.href = "../pages/success.html?email=" + encodeURIComponent(email);
    } else {
        // Exibir mensagem de erro
        alert("E-mail inválido. Por favor, insira um e-mail válido e tente novamente.");
    }
});