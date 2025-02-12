<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arthur Logística - Sistema Completo</title>
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
            background: linear-gradient(135deg, #007bff, #0056b3);
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
            background-color: #0056b3;
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
            background: #007bff;
            color: white;
            border: none;
            cursor: pointer;
            transition: background 0.3s ease;
        }
        button:hover {
            background: #0056b3;
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
            background-color: #007bff;
            color: white;
        }
        td a {
            color: #007bff;
            text-decoration: none;
            font-weight: bold;
        }
        td a:hover {
            text-decoration: underline;
        }
        footer {
            background: #007bff;
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

        /* Estilos Adicionais */
        .admin-dashboard {
            background: #fff;
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
        <h1>Arthur Logística</h1>
        <p>Soluções logísticas eficientes e inovadoras</p>
    </header>
    <nav>
        <a href="#status">Atualização de Status</a>
        <a href="#reports">Relatórios</a>
        <a href="#comments">Comentários</a>
        <a href="#contact">Contato</a>
        <a href="#admin">Administração</a>
    </nav>
    <main>
        <!-- Atualização de Status -->
        <section id="status">
            <h2>Atualização de Status</h2>
            <div class="form-container">
                <input type="text" id="statusInput" placeholder="Digite o novo status da entrega..." required>
                <button class="button" onclick="updateStatus()">Atualizar Status</button>
            </div>
            <div id="statusDisplay" class="form-container">
                <p>Aguardando atualização...</p>
            </div>
        </section>

        <!-- Relatórios Logísticos -->
        <section id="reports">
            <h2>Relatórios Logísticos</h2>
            <div class="form-container">
                <input type="date" id="reportDate" required>
                <input type="text" id="reportStatus" placeholder="Informe o status do relatório..." required>
                <button class="button" onclick="addReport()">Adicionar Relatório</button>
            </div>
            <table id="reportTable">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Relatórios vão aparecer aqui -->
                </tbody>
            </table>
        </section>

        <!-- Comentários -->
        <section id="comments">
            <h2>Comentários</h2>
            <div class="form-container">
                <textarea id="commentInput" placeholder="Deixe seu comentário..." rows="5" required></textarea>
                <button class="button" onclick="addComment()">Enviar Comentário</button>
            </div>
            <div id="commentsList" class="form-container hidden">
                <h3>Últimos Comentários</h3>
                <ul id="commentsUl"></ul>
            </div>
        </section>

        <!-- Contato -->
        <section id="contact">
            <h2>Contato</h2>
            <div class="form-container">
                <p>Envie-nos uma mensagem</p>
                <input type="email" placeholder="Seu email" required>
                <textarea placeholder="Sua mensagem..." rows="5" required></textarea>
                <button class="button" onclick="sendMessage()">Enviar</button>
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
                <h3>Comentários Recebidos</h3>
                <ul id="adminCommentsUl"></ul>
            </div>
        </section>
    </main>
    <footer>
        <p>© 2025 Arthur Logística. Todos os direitos reservados.</p>
    </footer>

    <script>
        // Função para alternar login de administrador
        function toggleLogin() {
            document.getElementById('adminLogin').classList.toggle('hidden');
        }

        // Função para login de administrador
        function loginAdmin() {
            const username = document.getElementById('adminUsername').value.trim();
            const password = document.getElementById('adminPassword').value.trim();
            if (username === "admin" && password === "1234") {
                document.getElementById('adminLogin').classList.add('hidden');
                document.getElementById('adminPanel').classList.remove('hidden');
                loadAdminComments();
            } else {
                alert("Credenciais inválidas.");
            }
        }

        // Função para carregar comentários no dashboard administrativo
        function loadAdminComments() {
            const comments = JSON.parse(localStorage.getItem('comments')) || [];
            const adminCommentsUl = document.getElementById('adminCommentsUl');
            adminCommentsUl.innerHTML = '';
            comments.forEach(comment => {
                const li = document.createElement('li');
                li.textContent = comment;
                adminCommentsUl.appendChild(li);
            });
        }

        // Função para atualizar status
        function updateStatus() {
            const status = document.getElementById('statusInput').value.trim();
            const statusDiv = document.getElementById('statusDisplay');
            const now = new Date().toLocaleTimeString();
            if (status) {
                statusDiv.innerHTML = `<p>Status atualizado em: ${now} - <strong>${status}</strong></p>`;
            } else {
                alert("Por favor, digite um status válido.");
            }
        }

        // Função para adicionar um novo relatório
        function addReport() {
            const reportDate = document.getElementById('reportDate').value;
            const reportStatus = document.getElementById('reportStatus').value.trim();
            if (!reportDate || !reportStatus) {
                alert("Preencha todos os campos antes de adicionar um relatório.");
                return;
            }
            const table = document.getElementById('reportTable').getElementsByTagName('tbody')[0];
            const newRow = table.insertRow();
            const dateCell = newRow.insertCell(0);
            const statusCell = newRow.insertCell(1);
            dateCell.textContent = reportDate;
            statusCell.textContent = reportStatus;
        }

        // Função para adicionar comentários
        function addComment() {
            const comment = document.getElementById('commentInput').value.trim();
            if (!comment) {
                alert("Por favor, digite um comentário válido.");
                return;
            }
            const comments = JSON.parse(localStorage.getItem('comments')) || [];
            comments.push(comment);
            localStorage.setItem('comments', JSON.stringify(comments));
            document.getElementById('commentInput').value = '';
            alert("Comentário enviado com sucesso!");
            showNotification("Novo comentário recebido!");
        }

        // Função para simular envio de mensagem
        function sendMessage() {
            alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
        }

        // Função para mostrar notificações push
        function showNotification(message) {
            if ("Notification" in window) {
                Notification.requestPermission().then(permission => {
                    if (permission === "granted") {
                        new Notification(message);
                    }
                });
            }
        }

        // Carregar comentários ao iniciar
        window.onload = () => {
            const comments = JSON.parse(localStorage.getItem('comments')) || [];
            const commentsUl = document.getElementById('commentsUl');
            commentsUl.innerHTML = '';
            comments.forEach(comment => {
                const li = document.createElement('li');
                li.textContent = comment;
                commentsUl.appendChild(li);
            });
        };
    </script>
</body>
</html>
