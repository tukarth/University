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

    /* Estilizando o header explicitamente adicionado */
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
      backdrop-filter: blur(10px); /* Note: backdrop-filter might not be supported in all browsers */
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
      border-top: 1px solid #222; /* Added a subtle top border to the footer */
    }

    @keyframes slideIn {
      from { transform: translateY(-100px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    /* Estilos da galeria */
    .slideshow { /* Changed from .carousel to .slideshow to match HTML */
      position: relative; /* Added for potential button positioning if needed */
      max-width: 600px; /* Constrain slideshow width */
      margin: auto; /* Center slideshow */
    }

    .slideshow img.slide { /* Targeting .slide class within .slideshow */
      width: 100%;
      height: auto;
      border-radius: 10px;
      display: none; /* Initially hide all slides */
    }
    
    .slideshow img.slide.active { /* Class to show the active slide */
        display: block;
    }

    /* Carousel buttons - if you want to add prev/next buttons later */
    /*
    .carousel button {
      margin: 10px 5px;
      padding: 10px 20px;
      font-size: 14px;
      border: none;
      border-radius: 8px;
      background-color: #1abc9c;
      color: #fff;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .carousel button:hover {
      background-color: #16a085;
    }
    */
  </style>
</head>
<body>

  <div style="background-color: black; padding: 10px; text-align: center; border-bottom: 1px solid #222;">
    <form action="firebase-config.js" method="post" style="text-align: center;">
        <input type="text" placeholder="Usuário" name="username" required style="display: block; margin: 10px auto; padding: 10px; border-radius: 5px; border: 1px solid #333; background-color: #1a1a1a; color: #fff; width: 80%; max-width: 300px;">
        <input type="password" placeholder="Senha" name="password" required style="display: block; margin: 10px auto; padding: 10px; border-radius: 5px; border: 1px solid #333; background-color: #1a1a1a; color: #fff; width: 80%; max-width: 300px;">
        <button type="submit" style="background: #007BFF; color: white; border: none; padding: 12px 20px; cursor: pointer; border-radius: 5px; font-size: 16px; margin-top: 5px;">Entrar</button>     
    </form>
  </div>

  <header>

  </header>

  <main>
    <section>
      <h2>Projetos em Destaque</h2>
      <p>
         Este site apresenta projetos acadêmicos de forma simples, visual e organizada. A ideia é compartilhar soluções criativas e inspirar novas ideias.
      </p>
      <p>
        📁 Para acessar os projetos, envie uma solicitação pelo Google Drive ou entre em contato: <a href="mailto:arthur.oliveira99@cs.brazcubas.edu.br" style="color: #1abc9c; text-decoration: none;">arthur.oliveira99@cs.brazcubas.edu.br</a>
      </p>
      
      <div class="buttons">
        <a href="https://drive.google.com/drive/folders/1bJ27rtxhDxfna8sEtnO4MQNsp3kygkso?usp=sharing" target="_blank" rel="noopener noreferrer">🔗 Acesso Projetos</a>
        <a href="SECURITY.md">Security Policy</a>
      </div>
    </section>

    <section id="galeria" style="text-align:center; margin-top:50px;">
      <h2>Galeria</h2>
      <div class="slideshow">
        <!-- As imagens locais "Imagem do WhatsApp..." precisam estar acessíveis no mesmo diretório ou ter seus caminhos atualizados. -->
        <img src="Imagem do WhatsApp de 2024-11-24 à(s) 16.34.45_4f67957e.jpg" alt="Foto 1" class="slide">
        <img src="Imagem do WhatsApp de 2024-11-24 à(s) 16.34.49_450e3f18.jpg" alt="Foto 2" class="slide">
        <img src="Imagem do WhatsApp de 2025-04-16 à(s) 17.30.28_e93abc65.jpg" alt="Foto 3" class="slide">
        <img src="Imagem do WhatsApp de 2025-05-03 à(s) 11.24.30_9c988ad7.jpg" alt="Foto 4" class="slide">
      </div>
  
      <script>
          let slides = document.querySelectorAll(".slideshow .slide"); // More specific selector
          let currentIndex = 0; // Changed 'index' to 'currentIndex' for clarity

          function showSlide(idx) { // Added idx parameter
              slides.forEach((slide, i) => {
                  // Using a class to control visibility is often better than direct style manipulation
                  if (i === idx) {
                      slide.classList.add('active');
                  } else {
                      slide.classList.remove('active');
                  }
              });
          }

          // Removed mudarSlide function as autoSlide handles next
          // If manual controls (prev/next buttons) were added, mudarSlide would be useful.

          function autoSlide() {
              currentIndex = (currentIndex + 1) % slides.length;
              showSlide(currentIndex);
          }

          if (slides.length > 0) { // Only run if slides exist
            showSlide(currentIndex); // Exibe a primeira imagem
            setInterval(autoSlide, 3000); // Troca automática a cada 3 segundos
          }
      </script>
    </section>
  </main>

  <footer>
   @tukarth - Todos os direitos reservados. &copy; 2025
  </footer>

  <!-- O script redundante que estava aqui foi removido -->
</body>
</html>
