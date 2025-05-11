<div style="background-color: black; padding: 10px; text-align: center;">
    <a href="#" style="color: white; margin: 10px;">Register</a> |
    <a href="#" style="color: white; margin: 10px;">Sign in</a> |
    <a href="#" style="color: white; margin: 10px;">Entrar no Painel</a>

</div>
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
      font-size: 13px; /* DIMINUI O TAMANHO AQUI */
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

    /* Estilos da galeria */
    .carousel img {
      width: 100%;
      max-width: 600px;
      height: auto;
      border-radius: 10px;
    }

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
  </style>
</head>
<body>

  <section>
    <h2>Conectando ideias, construindo futuros.</h2>
    <p>
      Este site apresenta os projetos dos alunos de Logística da Universidade Brás Cubas (UBC),
      em um espaço simples, visual e fácil de navegar. A proposta é compartilhar soluções criativas,
      ideias práticas e mostrar como a logística faz a diferença no dia a dia.
    </p>
    <p>
      🔒 Sem rastreamento, sem complicação.



    </p>

        
    <div class="buttons">
      <a href="https://1drv.ms/x/c/de9e79f6174a4628/EcIMFjsSULFIhb2Ekbq4DtYBDgcJTIHZjPllqgpDBiSDCg?e=CLBv7D">
        🔗 Projeto: ODS6 Pesquisa 2025
      </a>
    <div class="buttons">
      <a href="Seja bem-vindo a ÓCO FRIENDLY.pdf">
        🔗 Projeto: Relações Trabalhistas 2025
      </a>
      <a href="https://1drv.ms/p/c/bde93b9cab5058a5/EXKphmh1l3hBtThDMfpyj9ABnC_qHzkpojPY6OSEJxHhcg?e=38ZW9Q" target="_blank">
        🔗 Projeto: ODS 2024
      </a>
      <a href="https://1drv.ms/p/c/de9e79f6174a4628/Ec_EU4AHjVlLqA6oD1MwHuMBimMcpdcxXzubo7a4QNHERw?e=yzPikx" target="_blank">
        🔗 Projeto: Picking 2024
      </a>
      <a href="mailto:arthur.oliveira99@cs.brazcubas.edu.br">📧 Contato</a>
    </div>


  <section id="galeria" style="text-align:center; margin-top:50px;">
    <h2>Galeria</h2>
   <div class="slideshow">
    <img src="Imagem do WhatsApp de 2024-11-24 à(s) 16.34.45_4f67957e.jpg" alt="Foto 1" class="slide">
    <img src="Imagem do WhatsApp de 2024-11-24 à(s) 16.34.49_450e3f18.jpg" alt="Foto 2" class="slide">
    <img src="Imagem do WhatsApp de 2025-04-16 à(s) 17.30.28_e93abc65.jpg" alt="Foto 3" class="slide">
    <img src="Imagem do WhatsApp de 2025-05-03 à(s) 11.24.30_9c988ad7.jpg" alt="Foto 4" class="slide">
    <br>
    

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
</script>
    </div>
  </section>

  <footer>
   @tukarth - Todos os direitos reservados. &copy; 2025
  </footer>

  <script>
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');

    function mudarSlide(n) {
      slides[slideIndex].style.display = "none";
      slideIndex = (slideIndex + n + slides.length) % slides.length;
      slides[slideIndex].style.display = "block";
    }
  </script>
