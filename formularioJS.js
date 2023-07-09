document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário
  
      // Obtém os valores dos campos
      const nome = document.getElementById('nome').value;
      const sobrenome = document.getElementById('sobrenome').value;
      const email = document.getElementById('email').value;
      const devweb = document.querySelector('input[name="devweb"]:checked').value;
      const senioridade = document.getElementById('senioridade').value;
      const tecnologias = [];
      const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
      checkboxes.forEach(function(checkbox) {
        tecnologias.push(checkbox.value);
      });
      const experiencia = document.getElementById('experiencia').value;
  
      // Cria um objeto com os dados
      const dados = {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        devweb: devweb,
        senioridade: senioridade,
        tecnologias: tecnologias,
        experiencia: experiencia
      };
  
      // Envia os dados para o backend Java via Spring usando AJAX ou fetch
      // Exemplo usando fetch:
      fetch('/enviar-dados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
      })
        .then(function(response) {
          if (response.ok) {
            console.log('Dados enviados com sucesso!');
          } else {
            console.error('Ocorreu um erro ao enviar os dados.');
          }
        })
        .catch(function(error) {
          console.error('Ocorreu um erro ao enviar os dados:', error);
        });
    });
  });