<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Vitrine de Projetos | tukarth</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Inter', sans-serif;
      background-color: #f4f6f8;
      color: #333;
      padding: 0 20px;
    }

    header {
      background-color: #233237;
      color: #fff;
      padding: 20px 0;
      text-align: center;
      margin-bottom: 40px;
    }

    nav {
      background-color: #1e2a2f;
      padding: 10px 0;
      text-align: center;
    }

    nav a {
      color: #74EBD5;
      margin: 0 15px;
      text-decoration: none;
      font-weight: 500;
    }

    nav a:hover {
      color: #fff;
      text-decoration: underline;
    }

    h1, h2 {
      text-align: center;
      margin-bottom: 15px;
    }

    h1 { font-size: 2.4rem; }
    h2 { font-size: 1.8rem; color: #233237; }

    section {
      max-width: 1000px;
      margin: auto;
      margin-bottom: 60px;
    }

    .project-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      margin-top: 20px;
    }

    .project-card {
      background-color: #fff;
      border-radius: 12px;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
      overflow: hidden;
      transition: transform 0.3s;
    }

    .project-card:hover {
      transform: translateY(-5px);
    }

    .project-card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .project-content {
      padding: 20px;
    }

    .project-content h3 {
      margin-bottom: 10px;
      color: #233237;
    }

    .project-content p {
      font-size: 0.95rem;
      margin-bottom: 15px;
    }

    .tags {
      font-size: 0.8rem;
      margin-bottom: 10px;
      color: #74EBD5;
    }

    .button {
      display: inline-block;
      background-color: #74EBD5;
      color: #233237;
      padding: 10px 16px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
      transition: 0.3s;
    }

    .button:hover {
      background-color: #5cb8a9;
    }

    .form-section form {
      background: #fff;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    }

    .form-section label {
      display: block;
      margin-top: 15px;
      margin-bottom: 5px;
      font-weight: 600;
    }

    .form-section input, .form-section textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 6px;
      margin-bottom: 10px;
      font-size: 0.95rem;
    }

    .form-section button {
      background-color: #233237;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      margin-top: 10px;
    }

    .form-section button:hover {
      background-color: #111;
    }

    footer {
      background-color: #1e2a2f;
      color: #aaa;
      text-align: center;
      padding: 20px 0;
      margin-top: 60px;
      font-size: 0.9rem;
    }

    footer a {
      color: #74EBD5;
      text-decoration: none;
      margin: 0 10px;
    }

    footer a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>

<header>
  <h1>Vitrine de Projetos</h1>
  <p>Projetos desenvolvidos com dedicação e criatividade.</p>
</header>

<nav>
  <a href="#projetos">Projetos</a>
  <a href="#contato">Contato</a>
  <a href="#sobre">Sobre</a>
</nav>

<section id="projetos">
  <h2>Meus Projetos</h2>
  <div class="project-grid">
    <div class="project-card">
      <img src="https://placehold.co/600x400.png" alt="Projeto 1">
      <div class="project-content">
        <h3>Sistema de Gestão Acadêmica</h3>
        <p>Plataforma completa para notas, frequências e comunicação acadêmica.</p>
        <div class="tags">HTML, JS, PHP, MySQL</div>
        <a href="https://drive.google.com/drive/folders/1bJ27rtxhDxfna8sEtnO4MQNsp3kygkso" class="button" target="_blank">Ver Projeto</a>
      </div>
    </div>

    <div class="project-card">
      <img src="https://placehold.co/600x400.png" alt="Projeto 2">
      <div class="project-content">
        <h3>App de Finanças</h3>
        <p>Aplicativo mobile para controle de gastos e visualização de relatórios.</p>
        <div class="tags">Flutter, Firebase</div>
        <a href="https://drive.google.com/drive/folders/1bJ27rtxhDxfna8sEtnO4MQNsp3kygkso" class="button" target="_blank">Ver Projeto</a>
      </div>
    </div>

    <div class="project-card">
      <img src="https://placehold.co/600x400.png" alt="Projeto 3">
      <div class="project-content">
        <h3>E-commerce de Artesanato</h3>
        <p>Loja virtual com carrinho, checkout e cálculo de frete.</p>
        <div class="tags">HTML, CSS, JS, Stripe API</div>
        <a href="https://drive.google.com/drive/folders/1bJ27rtxhDxfna8sEtnO4MQNsp3kygkso" class="button" target="_blank">Ver Projeto</a>
      </div>
    </div>
  </div>
</section>

<section id="sobre">
  <h2>Sobre Este Site</h2>
  <p style="max-width: 800px; margin: auto; text-align: center;">
    Esta vitrine foi criada com foco em apresentar projetos de maneira organizada, moderna e acessível.
    Ideal para portfólios acadêmicos, profissionais e criativos.
  </p>
</section>

<section id="contato" class="form-section">
  <h2>Entre em Contato</h2>
  <form action="mailto:arthur.oliveira99@cs.brazcubas.edu.br" method="post" enctype="text/plain">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome" required />

    <label for="mensagem">Mensagem:</label>
    <textarea id="mensagem" name="mensagem" rows="5" required></textarea>

    <button type="submit">Enviar</button>
  </form>
</section>

<footer>
  <p>© 2025 tukarth. Todos os direitos reservados.</p>
  <div>
    <a href="#">LinkedIn</a> |
    <a href="#">GitHub</a> |
    <a href="#">Política de Privacidade</a>
  </div>
</footer>

</body>
</html>
