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
            transition: background-color 0.3s ease, color 0.3s ease;
        }
        body.dark-mode {
            background-color: #121212;
            color: #e0e0e0;
        }
        header {
            background: linear-gradient(135deg, #007bff, #0056b3);
            color: white;
            text-align: center;
            padding: 2rem 1rem;
            position: relative;
        }
        header h1 {
            font-size: 2rem;
            margin-bottom: 0.5rem;
        }
        header p {
            font-size: 1rem;
            opacity: 0.8;
        }
        #toggleTheme {
            position: absolute;
            top: 1rem;
            right: 1rem;
            padding: 0.5rem 1rem;
            background: white;
            color: #007bff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.3s ease;
        }
        #toggleTheme:hover {
            background: #007bff;
            color: white;
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
    </style>
</head>
<body>
    <header>
        <h1>Arthur Logística</h1>
        <p>Soluções logísticas eficientes e inovadoras</p>
        <button id="toggleTheme">Modo Escuro</button>
    </header>
    <nav>
        <a href="#">Página Inicial</a>
        <a href="#">Serviços</a>
        <a href="#" onclick="redirectToCorreios()">Correios</a>
        <a href="#">Contato</a>
    </nav>
    <main>
        <h2>Atualização de Status</h2>
        <div class="form-container">
            <input type="text" id="status" placeholder="Digite o novo status da entrega..." required>
            <button class="button" onclick="updateStatus()">Atualizar Status</button>
        </div>
        <div id="statusDisplay" class="form-container">
            <p>Aguardando atualização...</p>
        </div>

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
                    <th>Status (clique para detalhes)</th>
                </tr>
            </thead>
            <tbody>
                <!-- Relatórios vão aparecer aqui -->
            </tbody>
        </table>

        <h2>Estatísticas de Entregas</h2>
        <canvas id="deliveryChart" width="400" height="200"></canvas>

        <h2>Contato</h2>
        <div class="form-container">
            <p>Envie-nos uma mensagem</p>
            <input type="email" placeholder="Seu email" required>
            <textarea placeholder="Sua mensagem..." rows="5" required></textarea>
            <button class="button" onclick="sendMessage()">Enviar</button>
        </div>
    </main>
    <footer>
        <p>© 2025 Arthur Logística. Todos os direitos reservados.</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
        // Função para alternar entre Modo Claro e Escuro
        const toggleThemeButton = document.getElementById('toggleTheme');
        toggleThemeButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            toggleThemeButton.textContent = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Escuro';
        });

        // Função para atualizar status
        function updateStatus() {
            const status = document.getElementById('status').value.trim();
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
            statusCell.innerHTML = `<a href="https://www.correios.com.br" target="_blank">${reportStatus}</a>`;
        }

        // Função para redirecionar para o site dos Correios
        function redirectToCorreios() {
            window.open("https://www.correios.com.br", "_blank");
        }

        // Função para simular envio de mensagem
        function sendMessage() {
            alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
        }

        // Gráfico de Estatísticas de Entregas
        const ctx = document.getElementById('deliveryChart').getContext('2d');
        const deliveryChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
                datasets: [{
                    label: 'Entregas Realizadas',
                    data: [12, 19, 3, 15, 22],
                    backgroundColor: ['#007bff', '#28a745', '#dc3545', '#ffc107', '#6c757d']
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
    </script>
</body>
</html>
