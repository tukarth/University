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

    @keyframes slideIn {
      from { transform: translateY(-100px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    /* Estilos do formulário de feedback */
    .feedback-form {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      padding: 20px;
      margin-top: 20px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    }

    .feedback-form input,
    .feedback-form textarea {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border: none;
      border-radius: 5px;
    }

    .feedback-form button {
      background-color: #007BFF;
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
      border-radius: 5px;
      transition: background 0.3s;
    }

    .feedback-form button:hover {
      background-color: #0056b3;
    }

    .feedback-list {
      margin-top: 20px;
    }

    .feedback-item {
      background: #1abc9c;
      padding: 10px;
      border-radius: 5px;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>

  <header>
    <h1>Bem-vindo ao Meu Site</h1>
  </header>

  <section>
    <h2>Projetos em Destaque</h2>
    <p>
       Este site apresenta projetos acadêmicos de forma simples, visual e organizada. A ideia é compartilhar soluções criativas e inspirar novas ideias.
    </p>
    📁 Para acessar os projetos, envie uma solicitação pelo Google Drive ou entre em contato: arthur.oliveira99@cs.brazcubas.edu.br

    <div class="buttons">
      <a href="https://drive.google.com/drive/folders/1bJ27rtxhDxfna8sEtnO4MQNsp3kygkso?usp=sharing">🔗 Acesso Projetos</a>
      <a href="SECURITY.md">Política de Segurança</a>
    </div>
  </section>

  <section id="feedback" class="feedback-form">
    <h2>Deixe seu Feedback</h2>
    <form id="formFeedback" onsubmit="submitFeedback(event)">
      <input type="text" id="name" placeholder="Nome" required>
      <input type="email" id="email" placeholder="Email" required>
      <textarea id="message" placeholder="Seu feedback" rows="4" required></textarea>
      <button type="submit">Enviar Feedback</button>
    </form>
    <div id="feedbackList" class="feedback-list"></div>
  </section>

  <section id="galeria" style="text-align:center; margin-top:50px;">
    <h2>Galeria</h2>
    <div class="slideshow">
      <img src="Imagem do WhatsApp de 2024-11-24 à(s) 16.34.45_4f67957e.jpg" alt="Foto 1" class="slide">
      <img src="Imagem do WhatsApp de 2024-11-24 à(s) 16.34.49_450e3f18.jpg" alt="Foto 2" class="slide">
      <img src="Imagem do WhatsApp de 2025-04-16 à(s) 17.30.28_e93abc65.jpg" alt="Foto 3" class="slide">
      <img src="Imagem do WhatsApp de 2025-05-03 às 11.24.30_9c988ad7.jpg" alt="Foto 4" class="slide">
    </div>
    <br>
  </section>

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

    function mudarSlide(step) {
        index = (index + step + slides.length) % slides.length;
        showSlide();
    }

    function autoSlide() {
        index = (index + 1) % slides.length;
        showSlide();
    }

    setInterval(autoSlide, 3000); // Troca automática a cada 3 segundos
    showSlide(); // Exibe a primeira imagem

    // Função para enviar feedback
    function submitFeedback(event) {
      event.preventDefault(); // Impede o envio padrão do formulário
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      if (name && email && message) {
          const feedbackList = document.getElementById('feedbackList');
          const feedbackItem = document.createElement('div');
          feedbackItem.className = 'feedback-item';
          feedbackItem.innerHTML = `<strong>${name}</strong> (${email}): <p>${message}</p>`;
          feedbackList.appendChild(feedbackItem);
          document.getElementById('formFeedback').reset(); // Limpa o formulário
      } else {
          alert('Por favor, preencha todos os campos.');
      }
    }
  </script>
</body>
</html>

