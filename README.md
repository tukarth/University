  
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
        padding: 12px;
        text-align: center;
        border-radius: 10px;
        transition: background 0.3s ease;
        font-size: 0.85rem; /* <<< DIMINUÍDO AQUI */
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
  </head>
  <body>
    
    <section>
      <h2>Conectando ideias, construindo futuros.</h2>
      <p>
        Este site apresenta os projetos dos alunos de Logística da Universidade Brás Cubas (UBC), em um espaço simples, visual e fácil de navegar. A proposta é compartilhar soluções criativas, ideias práticas e mostrar como a logística faz a diferença no dia a dia.<br><br>

        E pode ficar tranquilo: não coletamos dados nem usamos rastreamento. A experiência aqui é segura, limpa e focada no que realmente importa — o conhecimento.
      </p>

      <div class="buttons">
        <a href="file:///C:/Users/aoliv/OneDrive/Desktop/Seja%20bem-vindo%20a%20%C3%93CO%20FRIENDLY.pdf🔗 Projeto: Relações Trabalhistas 2025</a>
        <a href="https://1drv.ms/p/c/bde93b9cab5058a5/EXKphmh1l3hBtThDMfpyj9ABnC_qHzkpojPY6OSEJxHhcg?e=38ZW9Q" target="_blank">🔗 Projeto: Itinerário extensionista 2024</a>    
        <a href="https://1drv.ms/p/c/de9e79f6174a4628/Ec_EU4AHjVlLqA6oD1MwHuMBimMcpdcxXzubo7a4QNHERw?e=yzPikx" target="_blank">🔗 Projeto: Picking 2024</a>
        <a href="mailto:arthur.oliveira99@cs.brazcubas.edu.br">📧 Contato</a>
         </div>
    </section>
    <h2> </h2>
  <div class="carousel">
    <img src="">
    <img src="imagem2.jpg" alt="Foto 2" class="slide" style="display:none;">
    <img src="imagem3.jpg" alt="Foto 3" class="slide" style="display:none;">
    <br>
    <style>
  .botao-slide {
    padding: 8px 16px;
    margin: 10px 5px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s, transform 0.2s;
  }

  .botao-slide:hover {
    background-color: #45a049;
    transform: scale(1.05);
  }
</style>

<button class="botao-slide" onclick="mudarSlide(-1)">Anterior</button>
<button class="botao-slide" onclick="mudarSlide(1)">Próximo</button>

  </div>
  

    <footer>
     @tukarth - Todos os direitos reservados. &copy; 2025
    </footer>
 


