
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vitrine de Código - Visão Geral da Página de Projetos</title>
    <style>
        body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"; line-height: 1.6; margin: 0 auto; max-width: 900px; padding: 20px; color: #333; background-color: #f9f9f9; }
        header, footer { text-align: center; padding: 1em 0; margin-bottom: 20px; }
        header { border-bottom: 1px solid #eee;}
        footer { border-top: 1px solid #eee; margin-top: 40px; font-size: 0.9em; color: #555;}
        h1, h2, h3 { color: #233237; margin-top: 1.5em; margin-bottom: 0.5em; font-weight: 500;}
        h1 { font-size: 2.2em; border-bottom: 1px solid #74EBD5; padding-bottom: 0.3em; text-align: center;}
        h2 { font-size: 1.8em; color: #74EBD5; margin-top: 2em;}
        h3 { font-size: 1.4em; }
        p { margin-bottom: 1em; color: #455A64; }
        section { background-color: #fff; padding: 20px; margin-bottom: 25px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
        img { max-width: 100%; height: auto; border-radius: 6px; margin-bottom: 0.5em; border: 1px solid #eee; }
        a { color: #74EBD5; text-decoration: none; font-weight: 500;}
        a:hover { text-decoration: underline; color: #5cb8a9; }
        .project-card-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
        .project-card { border: 1px solid #e0e0e0; padding: 15px; border-radius: 8px; background-color: #fdfdfd; box-shadow: 0 1px 3px rgba(0,0,0,0.03); }
        .project-card img { width: 100%; height: 200px; object-fit: cover; margin-bottom: 10px; }
        .button-link { display: inline-block; padding: 10px 18px; background-color: #74EBD5; color: #233237; text-decoration: none; border-radius: 5px; margin-right: 10px; margin-bottom: 10px; transition: background-color 0.3s ease; font-weight: 500; }
        .button-link:hover { background-color: #5cb8a9; }
        .button-link.outline { background-color: transparent; border: 1px solid #F2EF91; color: #F2EF91; }
        .button-link.outline:hover { background-color: rgba(242, 239, 145, 0.1); }
        .form-section div { margin-bottom: 15px; }
        .form-section label { display: block; margin-bottom: 5px; font-weight: 500; color: #37474F; }
        .form-section input[type="text"], .form-section textarea { width: calc(100% - 22px); padding: 10px; border: 1px solid #ccc; border-radius: 4px; background-color: #fcfcfc; }
        .form-section textarea { min-height: 80px; }
        .form-section em { color: #78909C; font-size: 0.9em; display: block; margin-top:5px; }
        .header-logo { font-size: 1.5em; font-weight: 700; color: #233237;}
    </style>
</head>
<body>
    <header>
        <div class="header-logo">Vitrine de Código</div>
        <p style="font-size: 0.9em; color: #555;">(Representação HTML Estática da Página de Projetos)</p>
    </header>

    <section id="destaques">
        <h1>Projetos em Destaque</h1>
        <p>Este site apresenta projetos acadêmicos de forma simples, visual e organizada. A ideia é compartilhar soluções criativas e inspirar novas ideias.</p>
    </section>

    <section id="galeria">
        <h2>Galeria de Inspiração</h2>
        <img src="https://placehold.co/1200x600.png" alt="Destaque do Projeto 1" data-ai-hint="technology abstract">
        <p><em>Nota: O carrossel de imagens é dinâmico e interativo na aplicação real. Esta é uma representação estática de uma das imagens.</em></p>
    </section>

    <section id="nossos-projetos">
        <h2>Nossos Projetos</h2>
        <div class="project-card-grid">
            <div class="project-card">
                <h3>Sistema de Gestão Acadêmica</h3>
                <img src="https://placehold.co/600x400.png" alt="Interface do Sistema de Gestão Acadêmica" data-ai-hint="software interface">
                <p>Plataforma completa para gerenciamento de notas, frequências e comunicação entre alunos e professores.</p>
                <a href="https://drive.google.com/drive/folders/1bJ27rtxhDxfna8sEtnO4MQNsp3kygkso?usp=sharing" class="button-link" target="_blank" rel="noopener noreferrer">Acessar Projeto</a>
            </div>
            <div class="project-card">
                <h3>Aplicativo Mobile de Finanças</h3>
                <img src="https://placehold.co/600x400.png" alt="Tela do Aplicativo Mobile de Finanças" data-ai-hint="mobile app">
                <p>App para controle de despesas pessoais, com gráficos e relatórios detalhados.</p>
                <a href="https://drive.google.com/drive/folders/1bJ27rtxhDxfna8sEtnO4MQNsp3kygkso?usp=sharing" class="button-link" target="_blank" rel="noopener noreferrer">Acessar Projeto</a>
            </div>
            <div class="project-card">
                <h3>Website E-commerce de Artesanato</h3>
                <img src="https://placehold.co/600x400.png" alt="Página inicial do E-commerce de Artesanato" data-ai-hint="website design">
                <p>Loja virtual para venda de produtos artesanais, com integração de pagamento e cálculo de frete.</p>
                <a href="https://drive.google.com/drive/folders/1bJ27rtxhDxfna8sEtnO4MQNsp3kygkso?usp=sharing" class="button-link" target="_blank" rel="noopener noreferrer">Acessar Projeto</a>
            </div>
        </div>
    </section>

    <section id="acesso-contato">
        <h2>Acesso e Contato</h2>
        <p>Para acessar os projetos, utilize o link do Google Drive. Em caso de dúvidas ou para mais informações, entre em contato.</p>
        <div>
            <a href="https://drive.google.com/drive/folders/1bJ27rtxhDxfna8sEtnO4MQNsp3kygkso?usp=sharing" class="button-link" target="_blank" rel="noopener noreferrer">Acesso Projetos (Google Drive)</a>
            <a href="mailto:arthur.oliveira99@cs.brazcubas.edu.br" class="button-link outline">Entrar em Contato</a>
            <a href="security-policy/page.html" class="button-link outline">Política de Segurança</a>
            <!-- Note: The link to security-policy might need adjustment if not also generated as a static HTML file -->
        </div>
    </section>

    <section id="ai-generator" class="form-section">
        <h2>Gerador de Descrição com IA</h2>
        <p>Crie descrições alternativas e mais atraentes para seus projetos.</p>
        <div>
            <label for="staticProjectName">Nome do Projeto</label>
            <input type="text" id="staticProjectName" placeholder="Ex: Meu Incrível App" readonly>
        </div>
        <div>
            <label for="staticExistingDescription">Descrição Existente</label>
            <textarea id="staticExistingDescription" placeholder="Descreva seu projeto atual..." rows="3" readonly></textarea>
        </div>
        <em>Nota: Este é um formulário visual estático. Na aplicação real, ele é interativo e utiliza IA para gerar descrições.</em>
    </section>

    <footer>
        <p>&copy; ${new Date().getFullYear()} tukarth - Todos os direitos reservados.</p>
    </footer>
</body>
</html>

    
