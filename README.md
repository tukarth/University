<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfólio Profissional | tukarth</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700;900&display=swap" rel="stylesheet">
    <style>
        /* Estilos Gerais e Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        /* Paleta: Preto Fundo (#000), Cinza Escuro/Header (#1c1c1c), Texto Branco (#fff), Acento Verde (#1abc9c) */
        body {
            background-color: #000;
            color: #fff;
            line-height: 1.6;
            min-height: 100vh;
        }

        /* ------------------------- HEADER ------------------------- */
        header {
            background-color: #1c1c1c; /* Cinza Escuro para o fundo do header */
            padding: 20px 0;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
        }

        nav {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            color: #1abc9c; /* Cor de acento no nome */
            text-decoration: none;
        }

        .nav-links a {
            color: #fff;
            text-decoration: none;
            margin-left: 25px;
            font-weight: 500;
            font-size: 1rem;
            transition: color 0.3s ease;
        }

        .nav-links a:hover {
            color: #1abc9c;
        }
        
        /* ------------------------- MAIN SECTIONS ------------------------- */
        main {
            padding-bottom: 50px; /* Espaçamento antes do footer */
        }

        section {
            max-width: 1000px;
            margin: 50px auto;
            padding: 30px;
            background-color: rgba(28, 28, 28, 0.7); /* Fundo sutil */
            border-radius: 18px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(8px); /* Efeito de 'vidro' */
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }

        section h2 {
            font-size: 2.2rem;
            margin-bottom: 20px;
            border-bottom: 2px solid #1abc9c; /* Linha de destaque */
            padding-bottom: 5px;
            color: #1abc9c;
        }

        section p {
            font-size: 1rem;
            margin-bottom: 15px;
            color: #ddd;
        }

        .contact-info a {
            color: #1abc9c;
            text-decoration: none;
            font-weight: 500;
        }

        /* ------------------------- BOTÕES ------------------------- */
        .buttons {
            display: flex;
            flex-wrap: wrap; /* Permite quebrar linha em telas menores */
            gap: 15px;
            margin-top: 30px;
        }

        .buttons a {
            flex-grow: 1; /* Faz os botões crescerem para preencher o espaço */
            max-width: 300px; /* Limite de largura para botões individuais */
            text-decoration: none;
            color: #fff;
            background: #1abc9c;
            padding: 12px 25px;
            font-size: 1rem;
            font-weight: 700;
            text-align: center;
            border-radius: 8px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 10px rgba(26, 188, 156, 0.4);
        }

        .buttons a:hover {
            background: #16a085;
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(26, 188, 156, 0.6);
        }

        /* ------------------------- GALERIA/SLIDESHOW ------------------------- */
        #galeria {
            text-align: center;
        }

        .slideshow-container {
            position: relative;
            max-width: 700px;
            margin: 40px auto;
        }

        .slideshow-container img.slide {
            width: 100%;
            height: auto;
            border-radius: 10px;
            display: block;
            opacity: 0; /* Inicialmente transparente */
            transition: opacity 1.5s ease-in-out; /* Transição de opacidade */
            position: absolute; /* Sobrepor slides */
            top: 0;
            left: 0;
        }

        .slideshow-container img.slide.active {
            opacity: 1; /* Slide ativo visível */
            position: relative; /* Slide ativo define a altura do container */
        }
        
        /* ------------------------- FOOTER ------------------------- */
        footer {
            text-align: center;
            padding: 20px;
            font-size: 0.9rem;
            color: #aaa;
            border-top: 1px solid #222;
        }

        /* ------------------------- RESPONSIVIDADE ------------------------- */
        @media (max-width: 768px) {
            .nav-links a {
                margin-left: 15px;
                font-size: 0.9rem;
            }

            section {
                margin: 30px 15px;
                padding: 20px;
            }

            section h2 {
                font-size: 1.8rem;
            }

            .buttons {
                flex-direction: column; /* Empilha os botões em telas menores */
            }

            .buttons a {
                max-width: 100%; /* Botão em largura total */
            }
        }
    </style>
</head>
<body>

    <header>
        <nav>
            <a href="#" class="logo">TUKARTH</a>
            <div class="nav-links">
                <a href="#">Início</a>
                <a href="#projetos">Projetos</a>
                <a href="#galeria">Galeria</a>
                <a href="#contato">Contato</a>
            </div>
        </nav>
    </header>

    <main>
        <section id="projetos">
            <h2>Portfólio de Projetos Acadêmicos</h2>
            <p>
                Bem-vindo ao meu espaço de compartilhamento! Aqui apresento soluções criativas e projetos acadêmicos desenvolvidos com foco em usabilidade e eficiência. A ideia é demonstrar habilidades técnicas e inspirar novas abordagens.
            </p>
            <div class="contact-info">
                <p>
                    📁 Para acesso completo aos repositórios e projetos, envie uma solicitação via Google Drive ou entre em contato: <a href="mailto:arthur.oliveira99@cs.brazcubas.edu.br">arthur.oliveira99@cs.brazcubas.edu.br</a>
                </p>
            </div>
            
            <div class="buttons">
                <a href="https://tukarth.github.io/Zyx/" target="_blank" rel="noopener noreferrer">Acessar Projeto Destaque (Zyx)</a>
                <a href="https://drive.google.com/drive/folders/1bJ27rtxhDxfna8sEtnO4MQNsp3kygkso?usp=sharing" target="_blank" rel="noopener noreferrer">Google Drive - Repositório Geral</a>
                <a href="SECURITY.md" target="_blank" rel="noopener noreferrer">Política de Segurança</a>
            </div>
        </section>

        <section id="galeria">
            <h2>Galeria de Screenshots</h2>
            <p>Confira algumas telas dos projetos desenvolvidos.</p>
            
            <div class="slideshow-container">
                <img src="Imagem do WhatsApp de 2024-11-24 à(s) 16.34.45_4f67957e.jpg" alt="Screenshot do Projeto 1" class="slide">
                <img src="Imagem do WhatsApp de 2024-11-24 à(s) 16.34.49_450e3f18.jpg" alt="Screenshot do Projeto 2" class="slide">
                <img src="Imagem do WhatsApp de 2025-04-16 à(s) 17.30.28_e93abc65.jpg" alt="Screenshot do Projeto 3" class="slide">
                <img src="Imagem do WhatsApp de 2025-05-03 à(s) 11.24.30_9c988ad7.jpg" alt="Screenshot do Projeto 4" class="slide">
            </div>
            
            <script>
                const slides = document.querySelectorAll(".slideshow-container .slide");
                let currentIndex = 0;
                
                function showSlide(idx) {
                    slides.forEach((slide) => {
                        slide.classList.remove('active');
                    });
                    
                    // Garante que a transição seja suave
                    if (slides[idx]) {
                        slides[idx].classList.add('active');
                    }
                }

                function autoSlide() {
                    currentIndex = (currentIndex + 1) % slides.length;
                    showSlide(currentIndex);
                }

                if (slides.length > 0) {
                    showSlide(currentIndex); // Exibe a primeira imagem ao carregar
                    setInterval(autoSlide, 3500); // Troca automática a cada 3.5 segundos
                }
            </script>
        </section>
        
        <section id="contato">
            <h2>Contato</h2>
            <p>Para parcerias, dúvidas ou oportunidades, utilize o e-mail abaixo:</p>
            <div class="buttons">
                <a href="mailto:arthur.oliveira99@cs.brazcubas.edu.br" style="background-color: #3498db;">✉️ Enviar E-mail</a>
                </div>
        </section>

    </main>

    <footer>
        &copy; 2025 tukarth - Todos os direitos reservados.
    </footer>

</body>
</html>
