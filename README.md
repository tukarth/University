<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Portfólio profissional de Arthur - Desenvolvedor Front-End e Designer">
    <meta name="author" content="Arthur">
    <title>Portfólio Arthur</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">
    <style>
        /* Reset e Fontes */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            scroll-behavior: smooth;
            font-family: 'Poppins', sans-serif;
        }

        body {
            background-color: #000;
            color: #fff;
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
        }

        section h2 {
            margin-bottom: 15px;
        }

        .project-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
        }

        .project {
            background-color: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            overflow: hidden;
            transition: transform 0.3s;
        }

        .project:hover {
            transform: scale(1.02);
        }

        .project img {
            width: 100%;
            display: block;
        }

        .project-description {
            padding: 10px;
        }

        .buttons {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            margin-top: 20px;
        }

        .buttons a {
            text-decoration: none;
            color: #fff;
            background: #1abc9c;
            padding: 10px 15px;
            border-radius: 10px;
            transition: background 0.3s;
        }

        .buttons a:hover {
            background: #16a085;
        }

        footer {
            text-align: center;
            padding: 20px;
            color: #aaa;
        }

        .social {
            margin: 10px 0;
        }

        .social a {
            color: #1abc9c;
            margin: 0 10px;
            text-decoration: none;
            font-size: 1.5rem;
            transition: color 0.3s;
        }

        .social a:hover {
            color: #16a085;
        }

        /* Modal */
        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
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
            cursor: pointer;
        }

        .close:hover {
            color: #f1c40f;
        }

        /* Responsivo */
        @media (max-width: 600px) {
            header h1 {
                font-size: 2rem;
            }

            nav a {
                margin: 0 10px;
            }
        }
    </style>
</head>
<body>

<header>
    <h1>Arthur Portfólio</h1>
    <nav>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#galeria">Galeria</a>
        <a href="#contato">Contato</a>
    </nav>
</header>

<section id="sobre">
    <h2>Sobre Mim</h2>
    <p>.</p>
</section>

<section id="projetos">
    <h2>Meus Projetos</h2>
    <div class="project-grid">
        <!-- Projetos -->
        <div class="project">
            <img src="https://via.placeholder.com/600x400" alt="Projeto 1">
            <div class="project-description">
                <h3>Projeto 1</h3>
                <p>Sistema de tarefas web.</p>
                <a href="#">Ver Detalhes</a>
            </div>
        </div>
        <div class="project">
            <img src="https://via.placeholder.com/600x400" alt="Projeto 2">
            <div class="project-description">
                <h3>Projeto 2</h3>
                <p>Site para portfólio profissional.</p>
                <a href="#">Ver Detalhes</a>
            </div>
        </div>
    </div>
</section>

<section id="galeria" style="text-align:center;">
    <h2>Galeria</h2>
    <div>
        <img src="Imagem1.jpg" alt="Foto 1" class="slide" onclick="openModal(this.src)">
        <img src="Imagem2.jpg" alt="Foto 2" class="slide" onclick="openModal(this.src)">
        <img src="Imagem3.jpg" alt="Foto 3" class="slide" onclick="openModal(this.src)">
    </div>
</section>

<div id="myModal" class="modal">
    <span class="close" onclick="closeModal()">&times;</span>
    <img class="modal-content" id="img01">
</div>

<section id="contato">
    <h2>Entre em Contato</h2>
    <div class="buttons">
        <a href="mailto:seuemail@gmail.com">📧 Email</a>
        <a href="https://wa.me/55SEUNUMERO" target="_blank">💬 WhatsApp</a>
        <a href="https://www.linkedin.com/in/SEULINKEDIN" target="_blank">🔗 LinkedIn</a>
        <a href="https://github.com/SEUGITHUB" target="_blank">🐙 GitHub</a>
    </div>
</section>

<footer>
    <div class="social">
        <a href="https://wa.me/55SEUNUMERO" target="_blank">WhatsApp</a> |
        <a href="https://github.com/SEUGITHUB" target="_blank">GitHub</a> |
        <a href="https://linkedin.com/in/SEULINKEDIN" target="_blank">LinkedIn</a>
    </div>
    &copy; 2025 - @tukarth - Todos os direitos reservados.
</footer>

<script>
    // Modal da galeria
    function openModal(src) {
        const modal = document.getElementById("myModal");
        const img = document.getElementById("img01");
        img.src = src;
        modal.style.display = "block";
    }
    function closeModal() {
        document.getElementById("myModal").style.display = "none";
    }
</script>

</body>
</html>
