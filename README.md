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
            padding: 20px;
            text-align: center;
            background-color: rgba(255, 255, 255, 0.05);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        header h1 {
            font-size: 2.5rem;
            animation: slideIn 1s ease-out;
        }

        nav {
            margin-top: 10px;
        }

        nav a {
            color: #1abc9c;
            margin: 0 15px;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
        }

        nav a:hover {
            color: #16a085;
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

        .project {
            margin-bottom: 20px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            overflow: hidden;
            transition: transform 0.3s;
        }

        .project:hover {
            transform: scale(1.02);
        }

        .project img {
            width: 100%;
            height: auto;
        }

        .project-description {
            padding: 10px;
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

        /* Modal Styles */
        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.9);
            padding-top: 60px;
        }

        .modal-content {
            margin: auto;
            display: block;
            width: 80%;
            max-width: 700px;
        }

        .close {
            position: absolute;
            top: 15px;
            right: 35px;
            color: #fff;
            font-size: 40px;
            font-weight: bold;
            transition: color 0.3s;
        }

        .close:hover,
        .close:focus {
            color: #f1c40f;
            text-decoration: none;
            cursor: pointer;
        }

        /* Contact Form Styles */
        .contact-form {
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            padding: 20px;
            margin-top: 20px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
        }

        .contact-form input,
        .contact-form textarea {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: none;
            border-radius: 5px;
        }

        .contact-form button {
            background-color: #007BFF;
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
            border-radius: 5px;
            transition: background 0.3s;
        }

        .contact-form button:hover {
            background-color: #0056b3;
        }

    </style>
</head>
<body>

<header>
    <h1>Bem-vindo ao Meu Site</h1>
    <nav>
        <a href="#projetos">Projetos</a>
        <a href="#galeria">Galeria</a>
        <a href="#contato">Contato</a>
    </nav>
</header>

<section id="projetos">
    <h2>Projetos em Destaque</h2>
    <div class="project">
        <img src="https://via.placeholder.com/600x400" alt="Projeto 1">
        <div class="project-description">
            <h3>Projeto 1</h3>
            <p>Descrição do projeto 1. Este projeto envolve...</p>
        </div>
    </div>
    <div class="project">
        <img src="https://via.placeholder.com/600x400" alt="Projeto 2">
        <div class="project-description">
            <h3>Projeto 2</h3>
            <p>Descrição do projeto 2. Este projeto envolve...</p>
        </div>
    </div>
    <div class="project">
        <img src="https://via.placeholder.com/600x400" alt="Projeto 3">
        <div class="project-description">
            <h3>Projeto 3</h3>
            <p>Descrição do projeto 3. Este projeto envolve...</p>
        </div>
    </div>
    <div class="buttons">
        <a href="https://drive.google.com/drive/folders/1bJ27rtxhDxfna8sEtnO4MQNsp3kygkso?usp=sharing">🔗 Acesso Projetos</a>
        <a href="SECURITY.md">Política de Segurança</a>
    </div>
</section>

<section id="galeria" style="text-align:center; margin-top:50px;">
    <h2>Galeria</h2>
    <div class="slideshow">
        <img src="Imagem do WhatsApp de 2024-11-24 à(s) 16.34.45_4f67957e.jpg" alt="Foto 1" class="slide" onclick="openModal(this.src)">
        <img src="Imagem do WhatsApp de 2024-11-24 à(s) 16.34.49_450e3f18.jpg" alt="Foto 2" class="slide" onclick="openModal(this.src)">
        <img src="Imagem do WhatsApp de 2025-04-16 à(s) 17.30.28_e93abc65.jpg" alt="Foto 3" class="slide" onclick="openModal(this.src)">
        <img src="Imagem do WhatsApp de 2025-05-03 às 11.24.30_9c988ad7.jpg" alt="Foto 4" class="slide" onclick="openModal(this.src)">
    </div>
</section>

<div id="myModal" class="modal">
    <span class="close" onclick="closeModal()">&times;</span>
    <img class="modal-content" id="img01">
</div>

<section id="contato" class="contact-form">
    <h2>Entre em Contato</h2>
    <form id="formContato" onsubmit="sendContact(event)">
        <input type="text" id="nome" placeholder="Nome" required>
        <input type="email" id="emailContato" placeholder="Email" required>
        <textarea id="mensagem" placeholder="Sua mensagem" rows="4" required></textarea>
        <button type="submit">Enviar Mensagem</button>
    </form>
</section>

<footer>
    @tukarth - Todos os direitos reservados. &copy; 2025
</footer>

<script>
    // Função para abrir o modal
    function openModal(src) {
        const modal = document.getElementById("myModal");
        const img = document.getElementById("img01");
        img.src = src;
        modal.style.display = "block";
    }

    // Função para fechar o modal
    function closeModal() {
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
    }

    // Função para enviar contato
    function sendContact(event) {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('emailContato').value;
        const mensagem = document.getElementById('mensagem').value;

        if (nome && email && mensagem) {
            alert(`Mensagem enviada com sucesso!\nNome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);
            document.getElementById('formContato').reset(); // Limpa o formulário
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    }

    // Slideshow (opcional)
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlides() {
        slides.forEach((slide, index) => {
            slide.style.display = index === slideIndex ? "block" : "none";
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlides();
    }

    setInterval(nextSlide, 3000); // Troca automática a cada 3 segundos
    showSlides(); // Exibe a primeira imagem
</script>
</body>
</html>
