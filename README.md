<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vitrine de Projetos - Tukarth</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet" />
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    }

    body {
      background-color: #000;
      color: #fff;
      line-height: 1.6;
    }

    header {
      text-align: center;
      padding: 30px 10px;
      background: rgba(255,255,255,0.05);
      box-shadow: 0 4px 15px rgba(0,0,0,0.5);
    }

    header h1 {
      font-size: 2.5rem;
      color: #1abc9c;
    }

    main {
      max-width: 1000px;
      margin: 0 auto;
      padding: 30px 20px;
    }

    section {
      margin-bottom: 40px;
      padding: 25px;
      background: rgba(255,255,255,0.03);
      border-radius: 15px;
      backdrop-filter: blur(6px);
    }

    section h2 {
      font-size: 1.8rem;
      margin-bottom: 10px;
      color: #1abc9c;
    }

    .buttons a {
      display: inline-block;
      margin: 10px 10px 0 0;
      padding: 10px 20px;
      border-radius: 10px;
      background: #1abc9c;
      color: #000;
      text-decoration: none;
      transition: background 0.3s ease;
    }

    .buttons a:hover {
      background: #16a085;
    }

    .login-box {
      text-align: center;
      margin-bottom: 30px;
    }

    .login-box input {
      padding: 10px;
      margin: 10px;
      width: 80%;
      max-width: 300px;
      border-radius: 6px;
      border: none;
    }

    .login-box button {
      padding: 10px 20px;
      background: #1abc9c;
      color: #000;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .login-box button:hover {
      background: #16a085;
    }

    .carousel {
      text-align: center;
    }

    .carousel img {
      width: 90%;
      max-width: 600px;
      border-radius: 12px;
      margin-bottom: 10px;
    }

    footer {
      text-align: center;
      padding: 20px;
      font-size: 0.9rem;
      color: #aaa;
      background-color: #111;
      margin-top: 40px;
    }
  </style>
</head>
<body>

  <header>
    <h1>Vitrine de Projetos</h1>
    <p>Desenvolvido por @tukarth</p>
  </header>

  <main>
    <div class="login-box">
      <form action="firebase-config.js" method="post">
        <input type="text" name="username" placeholder="Usuário" required>
        <input type="password" name="password" placeholder="Senha" required>
        <br>
        <button type="submit">Entrar</button>
      </form>
    </div>

    <section>
      <h2>Sobre a Vitrine</h2>
      <p>Este site apresenta projetos acadêmicos de forma simples, visual e organizada. A ideia é compartilhar soluções criativas e inspirar novas ideias.</p>
      <p>📁 Acesse os projetos pelo Google Drive ou entre em contato: <a href="mailto:arthur.oliveira99@cs.brazcubas.edu.br" style="color:#1abc9c;">arthur.oliveira99@cs.brazcubas.edu.br</a></p>
      <div class="buttons">
        <a href="https://drive.google.com/drive/folders/1bJ27rtxhDxfna8sEtnO4MQNsp3kygkso?usp=sharing" target="_blank">🔗 Acesso Projetos</a>
        <a href="SECURITY.md" target="_blank">🔐 Política de Segurança</a>
      </div>
    </section>

    <section class="carousel">
      <h2>Galeria</h2>
      <img class="slide" src="Imagem do WhatsApp de 2024-11-24 à(s) 16.34.45_4f67957e.jpg" alt="Foto 1">
      <img class="slide" src="Imagem do WhatsApp de 2024-11-24 à(s) 16.34.49_450e3f18.jpg" alt="Foto 2" style="display:none;">
      <img class="slide" src="Imagem do WhatsApp de 2025-04-16 à(s) 17.30.28_e93abc65.jpg" alt="Foto 3" style="display:none;">
      <img class="slide" src="Imagem do WhatsApp de 2025-05-03 à(s) 11.24.30_9c988ad7.jpg" alt="Foto 4" style="display:none;">
    </section>
  </main>

  <footer>
    &copy; 2025 Tukarth - Todos os direitos reservados.
  </footer>

  <script>
    const slides = document.querySelectorAll('.slide');
    let index = 0;

    function showSlide(i) {
      slides.forEach((slide, j) => {
        slide.style.display = i === j ? 'block' : 'none';
      });
    }

    setInterval(() => {
      index = (index + 1) % slides.length;
      showSlide(index);
    }, 3000);

    showSlide(index);
  </script>
</body>
</html>
