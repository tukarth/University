
<html lang="pt-BR">
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">
  <style> 
    
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    }

    body {
      background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
      color: #fff;
      line-height: 1.6;
      overflow-x: hidden;
    }

    header {
      padding: 30px;
      text-align: center;
      background-color: rgba(255, 255, 255, 0.05);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }

    header h1 {
      font-size: 2.5rem;
      animation: slideIn 1s ease-out;
    }

    section {
      max-width: 900px;
      margin: 40px auto;
      padding: 20px;
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 15px;
      backdrop-filter: blur(10px);
      animation: fadeIn 2s ease-in;
    }

    section h2 {
      font-size: 1.8rem;
      margin-bottom: 10px;
    }

    section p {
      font-size: 1rem;
      margin-bottom: 20px;
    }

    .buttons {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin-top: 20px;
    }

    .buttons a {
      text-decoration: none;
      color: #fff;
      background: #1abc9c;
      padding: 15px;
      text-align: center;
      border-radius: 10px;
      transition: background 0.3s ease;
    }

    .buttons a:hover {
      background: #16a085;
    }

    footer {
      text-align: center;
      margin-top: 50px;
      padding: 20px;
      font-size: 0.9rem;
      color: #aaa;
    }

    @keyframes slideIn {
      from { transform: translateY(-100px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  </style>
<body>
  <header>
    
  </header>

  <section>
    <h2>Sobre </h2>
    <p> para teste </p>

    <h2>Faculdade</h2>
    <p>A Universidade Brás Cubas oferece uma formação sólida na área de Logística, com foco em práticas reais de mercado, professores qualificados e estrutura voltada para o desenvolvimento profissional dos alunos.</p>

    <div class="buttons">
      <a href=" " target="_blank">🔗 Acessar Projeto </a>
  
      <a href="mailto:arthur.oliveira99@cs.brazcubas.edu.br">📧 Contato </a>
    </div>
  </section>

  <footer>
    &copy; 2025 @tukarth - Todos os direitos reservados.
  </footer>
</body>
</html>
