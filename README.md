<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Site Profissional com Fundo Preto</title>
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

        /* Estilos da galeria */
        .slideshow {
            position: relative;
            max-width: 600px;
            margin: auto;
        }

        .slideshow img {
            width: 100%;
            border-radius: 10px;
            display: none;
        }

        .slideshow img.active {
            display: block;
        }

        .carousel-button {
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

        .carousel-button:hover {
            background-color: #16a085;
        }

        /* Estilos do formulário de login */
        .login-container {
            background-color: black;
            padding: 10px;
            text-align: center;
            margin: 20px auto;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
            max-width: 400px;
        }

        .login-container input {
            display: block;
            margin: 5px auto;
            padding: 8px;
            width: 90%;
            border: none;
            border-radius: 5px;
        }

        .login-container button {
            background: #007BFF;
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
            border-radius: 5px;
            transition: background 0.3s;
        }

        .login-container button:hover {
            background: #0056b3;
        }

        /* Responsividade */
        @media (max-width: 600px) {
            header h1 {
                font-size: 2rem;
            }

            section {
                padding: 15px;
            }
        }
    </style>
</head>
<body>

<header>
    <h1>Bem-vindo ao Meu Site</h1>
</header>

<div class="login-container">
    <form action="firebase-config.js" method="post">
        <input type="text" placeholder="Usuário" name="username" required>
        <input type="password" placeholder="Senha" name="password" required>
        <button type="submit">Entrar</button>
    </form>
</div>

<section>
    <h2>Projetos em Destaque</h2>
    <p>
       Este site apresenta projetos acadêmicos de forma simples, visual e organizada. A ideia é compartilhar soluções criativas e inspirar novas ideias.
    </p>
    <p>📁 Para acessar os projetos, envie uma solicitação pelo Google Drive ou entre em contato: arthur.oliveira99@cs.brazcubas.edu.br</p>
    <div class="buttons">
        <a href="https://drive.google.com/drive/folders/1bJ27rtxhDxfna8sEtnO4MQNsp3kygkso?usp=sharing">🔗 Acesso Projetos</a>
        <a href="SECURITY.md">Política de Segurança</a>
    </div>
</section>

<section id="galeria" style="text-align:center; margin-top:50px;">
    <h2>Galeria</h2>
    <div class="slideshow">
        <img src="Imagem do WhatsApp de 2024-11-24 à(16.34.45_4f67957e.jpg" alt="Foto 1" class="slide active">
        <img src="Imagem do WhatsApp de 2024-11-24 à(16.34.49_450e3f18.jpg" alt="Foto 2" class="slide">
        <img src="Imagem do WhatsApp de 2025-04-16 à(17.30.28_e93abc65.jpg" alt="Foto 3" class="slide">
        <img src="Imagem do WhatsApp de 2025-05-03 às(11.24.30_9c988ad7.jpg" alt="Foto 4" class="slide">
        <button class="carousel-button" onclick="mudarSlide(-1)">❮ Anterior</button>
        <button class="carousel-button" onclick="mudarSlide(1)">Próximo ❯</button>
    </div>
</section>

<footer>
    @tukarth - Todos os direitos reservados. &copy; 2025
</footer>

<script>
    let slides = document.querySelectorAll(".slide");
    let index = 0;

    function showSlide() {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
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
</body>
</html>
