<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Site com Fundo Preto</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">
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
      overflow-x: hidden;
    }

    .site-header {
      background: #111;
      padding: 20px 0;
      box-shadow: 0 4px 8px rgba(0,0,0,0.5);
    }

    .site-header .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .logo {
      font-size: 1.8rem;
      font-weight: bold;
      color: #1abc9c;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .navigation ul {
      list-style: none;
      display: flex;
      gap: 20px;
    }

    .navigation a {
      text-decoration: none;
      color: #fff;
      transition: color 0.3s ease;
    }

    .navigation a:hover {
      color: #1abc9c;
    }

    form {
      text-align: center;
      margin-top: 20px;
    }

    form input, form button {
      display: block;
      margin: 5px auto;
      padding: 8px;
    }

    form button {
      background: #007BFF;
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
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
      padding: 10px 15px;
      font-size: 13px;
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

    .carousel img {
      width: 100%;
      max-width: 600px;
      height: auto;
      border-radius: 10px;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  </style>
</head>
<body>

  <!-- Cabeçalho novo -->
  <header class="site-header">
    <div class="container">
      <h1 class="logo">Tukarth University</h1>
      <nav class="navigation">
        <ul>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#galeria">Galeria</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- Login -->
  <div style="background-color: black; padding: 10px; text-align: center;">
    <form action="firebase-config.js" method="post">
      <input type="text" placeholder="Usuário" name="username" required>
      <input type="password" placeholder="Senha" name="password" required>
      <button type="submit">Entrar</button>     
    </form>
  </div>

  <!-- Projetos -->
  <section id="projetos">
    <h2>Projetos em Destaque.</h2>
    <p>Este site apresenta projetos acadêmicos de forma simples, visual e organizada. A ideia é compartilhar soluções criativas e inspirar novas ideias.</p>
    <p>📁 Para acessar os projetos, envie uma solicitação pelo Google Drive ou entre em contato: arthur.oliveira99@cs.brazcubas.edu.br</p>
    <div class="buttons">
      <a href="https://drive.google.com/drive/folders/1bJ27rtxhDxfna8sEtnO4MQNsp3kygkso?usp=sharing">🔗 Acesso Projetos</a>
      <a href="SECURITY.md">Security Policy</a>
    </div>
  </section>

  <!-- Galeria -->
  <section id="galeria" style="text-align:center;">
    <h2>Galeria</h2>
    <div class="slideshow">
      <img src="Imagem do WhatsApp de 2024-11-24 à(s) 16.34.45_4f67957e.jpg" alt="Foto 1" class="slide">
      <img src="Imagem do WhatsApp de 2024-11-24 à(s) 16.34.49_450e3f18.jpg" alt="Foto 2" class="slide">
      <img src="Imagem do WhatsApp de 2025-04-16 à(s) 17.30.28_e93abc65.jpg" alt="Foto 3" class="slide">
      <img src="Imagem do WhatsApp de 2025-05-03 à(s) 11.24.30_9c988ad7.jpg" alt="Foto 4" class="slide">
    </div>
  </section>

  <!-- Rodapé -->
  <footer>
    @tukarth - Todos os direitos reservados. &copy; 2025
  </footer>

  <script>
    let slides = document.querySelectorAll(".slide");
    let index = 0;

    function showSlide() {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
      });
    }

    function autoSlide() {
      index = (index + 1) % slides.length;
      showSlide();
    }

    setInterval(autoSlide, 3000);
    showSlide();
  </script>

</body>
</html>
