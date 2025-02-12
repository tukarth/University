<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trabalho Acadêmico - Braz Cubas</title>
    <style>
        /* Estilos Gerais */
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f9f9f9;
            color: #333;
            line-height: 1.6;
        }
        header {
            background: linear-gradient(135deg, #ff6f61, #ff9e5b);
            color: white;
            text-align: center;
            padding: 2rem 1rem;
        }
        header h1 {
            font-size: 2rem;
            margin-bottom: 0.5rem;
        }
        header p {
            font-size: 1rem;
            opacity: 0.8;
        }
        nav {
            background-color: #ff9e5b;
            padding: 1rem;
            text-align: center;
        }
        nav a {
            color: white;
            margin: 0 15px;
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s ease;
        }
        nav a:hover {
            color: #ffcc00;
        }
        main {
            padding: 2rem;
            text-align: center;
        }
        .form-container {
            background: white;
            padding: 1.5rem;
            margin: 2rem auto;
            border-radius: 8px;
            width: 90%;
            max-width: 600px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }
        input, textarea, button {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 1rem;
        }
        button {
            background: #ff6f61;
            color: white;
            border: none;
            cursor: pointer;
            transition: background 0.3s ease;
        }
        button:hover {
            background: #ff9e5b;
        }
        table {
            width: 100%;
            margin: 2rem auto;
            border-collapse: collapse;
        }
        th, td {
            padding: 10px;
            text-align: center;
            border: 1px solid #ddd;
        }
        th {
            background-color: #ff6f61;
            color: white;
        }
        td a {
            color: #ff6f61;
            text-decoration: none;
            font-weight: bold;
        }
        td a:hover {
            text-decoration: underline;
        }
        footer {
            background: #ff6f61;
            color: white;
            text-align: center;
            padding: 1rem;
            position: relative;
            bottom: 0;
            width: 100%;
        }
        @media (max-width: 768px) {
            header h1 {
                font-size: 1.5rem;
            }
            nav a {
                display: block;
                margin: 10px 0;
            }
        }

        /* Estilo para o visualizador de PDF */
        .pdf-viewer {
            width: 100%;
            height: 500px;
            margin: 2rem auto;
            border: 1px solid #ddd;
            border-radius: 8px;
        }

        /* Dashboard Administrativo */
        .admin-dashboard {
            background: white;
            padding: 1.5rem;
            margin: 2rem auto;
            border-radius: 8px;
            width: 90%;
            max-width: 800px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }
        .admin-dashboard h2 {
            margin-bottom: 1rem;
        }
        .admin-dashboard ul {
            list-style: none;
            padding: 0;
        }
        .admin-dashboard li {
            background: #f5f5f5;
            margin: 0.5rem 0;
            padding: 1rem;
            border-radius: 5px;
        }
        .hidden {
            display: none;
        }
    </style>
</head>
<body>
    <header>
        <h1>Trabalho Acadêmico - Braz Cubas</h1>
        <p>Soluções acadêmicas eficientes e inovadoras</p>
    </header>
    <nav>
        <a href="#files">Arquivos</a>
        <a href="#comments">Comentários</a>
        <a href="#contact">Contato</a>
        <a href="#admin">Administração</a>
    </nav>
    <main>
        <!-- Arquivos -->
        <section id="files">
            <h2>Arquivos</h2>
            <div class="form-container">
                <p>Visualize ou baixe os materiais necessários:</p>
                <iframe class="pdf-viewer" src="7cc4e623-54a0-4dbb-ac07-71584908d5a9_Picking.pdf" frameborder="0"></iframe>
            </div>
        </section>

        <!-- Comentários -->
        <section id="comments">
            <h2>Comentários</h2>
            <div class="form-container">
                <textarea id="commentInput" placeholder="Deixe seu comentário..." rows="5" required></textarea>
                <button class="button" onclick="sendComment()">Enviar Comentário</button>
            </div>
        </section>

        <!-- Contato -->
        <section id="contact">
            <h2>Contato</h2>
            <div class="form-container">
                <p>Envie-nos uma mensagem</p>
                <input type="email" id="contactEmail" placeholder="Seu email" required>
                <textarea id="contactMessage" placeholder="Sua mensagem..." rows="5" required></textarea>
                <button class="button" onclick="sendContactMessage()">Enviar</button>
            </div>
        </section>

        <!-- Dashboard Administrativo -->
        <section id="admin" class="admin-dashboard hidden">
            <h2>Dashboard Administrativo</h2>
            <div>
                <button class="button" onclick="toggleLogin()">Entrar como Administrador</button>
            </div>
            <div id="adminLogin" class="hidden">
                <h3>Login de Administrador</h3>
                <input type="text" id="adminUsername" placeholder="Usuário" required>
                <input type="password" id="adminPassword" placeholder="Senha" required>
                <button class="button" onclick="loginAdmin()">Entrar</button>
            </div>
            <div id="adminPanel" class="hidden">
                <h3>Gerenciar Arquivos</h3>
                <input type="file" id="fileUpload" />
                <button class="button" onclick="uploadFile()">Enviar Arquivo</button>
                <h3>Estatísticas</h3>
                <canvas id="statsChart" width="400" height="200"></canvas>
            </div>
        </section>
    </main>
    <footer>
        <p>© 2025 Arthur. Todos os direitos reservados.</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
        // Função para alternar login de administrador
        function toggleLogin() {
            document.getElementById('adminLogin').classList.toggle('hidden');
        }

        // Função para login de administrador
        function loginAdmin() {
            const username = document.getElementById('adminUsername').value.trim();
            const password = document.getElementById('adminPassword').value.trim();
            if (username === "admin" && password === "secure123") {
                document.getElementById('adminLogin').classList.add('hidden');
                document.getElementById('adminPanel').classList.remove('hidden');
                loadStatsChart();
            } else {
                alert("Credenciais inválidas.");
            }
        }

        // Função para enviar comentários para o email
        function sendComment() {
            const comment = document.getElementById('commentInput').value.trim();
            if (!comment) {
                alert("Por favor, digite um comentário válido.");
                return;
            }
            const emailBody = encodeURIComponent(`Novo comentário recebido:\n\n${comment}`);
            window.location.href = `mailto:arthur.oliveira99@cs.brazcubas.edu.br?subject=Novo%20Comentário&body=${emailBody}`;
            alert("Comentário enviado com sucesso!");
            document.getElementById('commentInput').value = '';
        }

        // Função para enviar mensagens de contato
        function sendContactMessage() {
            const email = document.getElementById('contactEmail').value.trim();
            const message = document.getElementById('contactMessage').value.trim();
            if (!email || !message) {
                alert("Por favor, preencha todos os campos.");
                return;
            }
            const emailBody = encodeURIComponent(`Nova mensagem de contato:\n\nEmail: ${email}\nMensagem: ${message}`);
            window.location.href = `mailto:arthur.oliveira99@cs.brazcubas.edu.br?subject=Nova%20Mensagem%20de%20Contato&body=${emailBody}`;
            alert("Mensagem enviada com sucesso!");
            document.getElementById('contactEmail').value = '';
            document.getElementById('contactMessage').value = '';
        }

        // Função para upload de arquivos
        function uploadFile() {
            const fileInput = document.getElementById('fileUpload');
            if (fileInput.files.length === 0) {
                alert("Por favor, selecione um arquivo para enviar.");
                return;
            }
            const fileName = fileInput.files[0].name;
            alert(`Arquivo "${fileName}" enviado com sucesso!`);
            fileInput.value = ''; // Limpa o campo de upload
        }

        // Gráfico de Estatísticas
        function loadStatsChart() {
            const ctx = document.getElementById('statsChart').getContext('2d');
            const statsChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
                    datasets: [{
                        label: 'Atividades Realizadas',
                        data: [12, 19, 3, 15, 22],
                        backgroundColor: ['#ff6f61', '#ff9e5b', '#ffcc00', '#6c757d', '#28a745']
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        }
                    }
                }
            });
        }
    </script>
</body>
</html>
