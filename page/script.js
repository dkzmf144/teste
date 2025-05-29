

// Espera o envio do formulário
document.getElementById('cadastro-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Pega os dados do formulário
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  // Cria um objeto com os dados do usuário
  const usuario = {
    nome: nome,
    email: email,
    senha: senha
  };

  // Salva o objeto no LocalStorage (pode salvar mais de um usuário)
  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []; // Recupera os usuários do LocalStorage
  usuarios.push(usuario); // Adiciona o novo usuário
  localStorage.setItem('usuarios', JSON.stringify(usuarios)); // Salva no LocalStorage

  // Exibe uma mensagem de sucesso
  alert('Cadastro realizado com sucesso!');

  // Limpa o formulário
  document.getElementById('cadastro-form').reset();
});



