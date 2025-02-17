document.getElementById('cadastro-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
  
    // Captura os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
  
    // Envia os dados para o servidor via fetch
    fetch('http://localhost:3000/cadastrar', { // Substitua pela URL do seu servidor
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: nome,
        email: email,
        senha: senha
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Cadastro realizado com sucesso!');
      } else {
        alert('Erro ao cadastrar: ' + data.message);
      }
    })
    .catch(error => {
      console.error('Erro ao enviar o cadastro:', error);
      alert('Erro no servidor');
    });
  });
  const express = require('express');
  const bodyParser = require('body-parser');
  const app = express();
  
  // Configuração para permitir que o servidor leia dados JSON no corpo da requisição
  app.use(bodyParser.json());
  
  // Simulação de banco de dados (substitua isso por um banco real)
  let usuarios = [];
  
  app.post('/cadastrar', (req, res) => {
    const { nome, email, senha } = req.body;
  
    // Validação simples para garantir que todos os campos foram preenchidos
    if (!nome || !email || !senha) {
      return res.json({ success: false, message: 'Todos os campos são obrigatórios' });
    }
  
    // Simulando o cadastro do usuário
    usuarios.push({ nome, email, senha });
  
    // Resposta de sucesso
    res.json({ success: true, message: 'Cadastro realizado com sucesso!' });
  });
  
  // Inicia o servidor na porta 3000
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
    