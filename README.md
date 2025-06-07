<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Vitrine de Projetos - Tukarth</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet"/>
  <style>
    /* RESET BÁSICO */
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'Poppins', sans-serif;
      background-color: #000;
      color: #fff;
      line-height: 1.6;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* CONTAINER PRINCIPAL */
    .container {
      width: 90%;
      max-width: 1000px;
      margin: 0 auto;
      padding: 20px 0;
      flex: 1;
    }

    /* LOGIN BOX */
    .login-box {
      background-color: #111;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
      margin-bottom: 30px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.5);
    }
    .login-box input {
      width: 80%;
      max-width: 300px;
      padding: 12px;
      margin: 10px 0;
      border: 1px solid #333;
      border-radius: 5px;
      background-color: #1a1a1a;
      color: #fff;
    }
    .login-box button {
      padding: 12px 24px;
      background-color: #1abc9c;
      border: none;
      border-radius: 5px;
      color: #000;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s;
    }
    .login-box button:hover {
      background-color: #16a085;
    }

    /* HEADER */
    header {
      background-color: #111;
      padding: 30px 15px;
      text-align: center;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.5);
      margin-bottom: 40px;
    }
    header h1 {
      font-size: 2.2rem;
      font-weight: 500;
      color: #1abc9c;
    }

    /* SEÇÕES */
    section {
      background-color: #111;
      padding: 25px;
      border-radius: 15px;
      box-shadow: 0 6px 15px rgba(0,0,0,0.4);
      margin-bottom: 40px;
    }
    section h2 {
      font-size: 1.8rem;
      font-weight: 600;
      margin-bottom: 15px;
      color: #1abc9c;
    }
    section p {
      margin-bottom: 15px;
      font-size: 1rem;
      line-height: 1.7;
    }
    section a.email-link {
      color: #1abc9c;
      text-decoration: none;
    }
    section a.email-link:hover {
      text-decoration: underline;
    }

    /* BOTÕES DE AÇÃO */
    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      margin-top: 20px;
    }
    .actions a {
      flex: 1 1 calc(50% - 15px);
      text-align: center;
      text-decoration: none;
      padding: 12px 0;
      border-radius: 8px;
      font-weight: 500;
      transition: background 0.3s;
    }
    .btn-primary {
      background-color: #1abc9c;
      color: #000;
    }
    .btn-primary:hover {
      background-color: #16a085;
    }
    .btn-secondary {
      background-color: #333;
      color: #fff;
    }
    .btn-secondary:hover {
      background-color: #444;
    }

    /* GALERIA */
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 15px;
      justify-items: center;
    }
    .gallery img {
      width: 100%;
      max-width: 250px;
      border-radius: 8px;
      border: 1px solid #333;
      object-fit: cover;
    }

    /* FOOTER */
    footer {
      text-align: center;
      padding: 20px 0;
      font-size: 0.9rem;
      color: #aaa;
      border-top: 1px solid #222;
      background-color: #000;
    }

    @media (max-width: 600px) {
      .actions a { flex: 1 1 100%; }
    }
  </style>
</head>
<body>

  <div class="container">

    <!-- Login Section -->
    <div class="login-box">
      <form action="firebase-config.js" method="post">
        <input type="text" name="username" placeholder="Usuário" required>
        <input type="password" name="password" placeholder="Senha" required>
        <button type="submit">Entrar</button>
      </form>
    </div>

    <!-- Header -->
    <header>
      <h1>Vitrine de Projetos</h1>
    </header>

    <!-- Destaques -->
    <section id="destaques">
      <h2>Projetos em Destaque</h2>
      <p>Este site apresenta projetos acadêmicos de forma simples, visual e organizada. A ideia é compartilhar soluções criativas e inspirar novas ideias.</p>
      <p>📁 Para acessar os projetos, envie solicitação pelo Google Drive ou entre em contato: <a class="email-link" href="mailto:arthur.oliveira99@cs.brazcubas.edu.br">arthur.oliveira99@cs.brazcubas.edu.br</a></p>
      <div class="actions">
        <a class="btn-primary" href="https://drive.google.com/drive/folders/1bJ27rtxhDxfna8sEtnO4MQNsp3kygkso?usp=sharing" target="_blank">🔗 Acesso Projetos</a>
        <a class="btn-secondary" href="YOUR_SECURITY_POLICY_LINK_OR_REPO.md" target="_blank">🔐 Security Policy</a>
      </div>
    </section>

    <!-- Galeria -->
    <section id="galeria">
      <h2>Galeria</h2>
      <p style="color:#bbb; font-size:0.9rem;">(Exibição estática; carrossel dinâmico pode ser adicionado via JS.)</p>
      <div class="gallery">
        <<img src="Imagem do WhatsApp de 2024-11-24 à(s) 16.34.45_4f67957e.jpg" alt="Foto 1" class="slide">
    <img src="Imagem do WhatsApp de 2024-11-24 à(s) 16.34.49_450e3f18.jpg" alt="Foto 2" class="slide">
    <img src="Imagem do WhatsApp de 2025-04-16 à(s) 17.30.28_e93abc65.jpg" alt="Foto 3" class="slide">
    <img src="Imagem do WhatsApp de 2025-05-03 à(s) 11.24.30_9c988ad7.jpg" alt="Foto 4" class="slide">
    <br
    </section>

  </div>

  <!-- Footer -->
  <footer>
    @tukarth — Todos os direitos reservados. © 2025
  </footer>

</body>
</html>
