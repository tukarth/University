<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tukarth Logística e Transporte</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #007bff;
            color: white;
            padding: 1.5rem;
            text-align: center;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
        }
        header img {
            width: 50px;
        }
        nav {
            background-color: #0056b3;
            padding: 1rem;
            text-align: center;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 10;
        }
        nav a {
            color: white;
            margin: 0 15px;
            text-decoration: none;
            font-weight: bold;
        }
        nav a:hover {
            text-decoration: underline;
        }
        main {
            padding: 5rem 2rem;
            text-align: center;
        }
        .button {
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
        }
        .button:hover {
            background-color: #0056b3;
        }
        .form-container {
            background-color: white;
            padding: 1.5rem;
            margin: 2rem auto;
            border-radius: 8px;
            width: 80%;
            max-width: 600px;
            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
        }
        table {
            width: 100%;
            margin: 2rem auto;
            border-collapse: collapse;
            text-align: left;
        }
        th, td {
            padding: 12px;
            text-align: left;
            border: 1px solid #ddd;
        }
        th {
            background-color: #007bff;
            color: white;
        }
        tbody tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        tbody tr:hover {
            background-color: #e6f7ff;
        }
        .details-link {
            color: #007bff;
            text-decoration: none;
        }
        .details-link:hover {
            text-decoration: underline;
        }
        footer {
            background-color: #007bff;
            color: white;
            text-align: center;
            padding: 1rem;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
        .contact-button {
            display: inline-block;
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .contact-button:hover {
            background-color: #0056b3;
        }
    </style>
    <script>
        // Função para atualizar status
        function updateStatus() {
            const status = document.getElementById('status').value;
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
            const reportStatus = document.getElementById('reportStatus').value;
            const reportType = document.getElementById('reportType').value;
            if (!reportDate || !reportStatus || !reportType) {
                alert("Preencha todos os campos antes de adicionar um relatório.");
                return;
            }
            const table = document.getElementById('reportTable');
            const row = table.insertRow();
            const dateCell = row.insertCell(0);
            const statusCell = row.insertCell(1);
            const typeCell = row.insertCell(2);
            dateCell.textContent = reportDate;
            statusCell.innerHTML = `<a href="#" class="details-link">${reportStatus}</a>`;
            typeCell.textContent = reportType;
        }

        // Função para exibir e-mail apenas após clique
        function showContactEmail() {
            document.getElementById('contactInfo').innerHTML = '<a href="mailto:arthur.oliveira99@cs.brazcubas.edu.br">arthur.oliveira99@cs.brazcubas.edu.br</a>';
        }
    </script>
</head>
<body>
    <header>
        <h1>Tukarth Logística e Transporte</h1>
        <p>Gerenciamento logístico eficiente e dinâmico</p>
    </header>
    <nav>
        <a href="#">Página Inicial</a>
        <a href="#servicos">Serviços</a>
        <a href="#contato" class="contact-button" onclick="showContactEmail()">Contato</a>
    </nav>
    <main>
        <section id="servicos">
            <h2>Serviços Tukarth</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; max-width: 1000px; margin: 0 auto;">
                <div style="background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);">
                    <h3>Gerenciamento de Estoques</h3>
                </div>
                <div style="background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);">
                    <h3>Transporte de Mercadorias</h3>
                </div>
                <div style="background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);">
                    <h3>Logística Reversa</h3>
                </div>
            </div>
        </section>

        <h2>Atualização de Status</h2>
        <div class="form-container">
            <input type="text" id="status" placeholder="Digite o novo status da entrega..." style="width: 80%; padding: 10px; margin-bottom: 10px;">
            <button class="button" onclick="updateStatus()">Atualizar Status</button>
        </div>
        <div id="statusDisplay" class="form-container">
            <p>Aguardando atualização...</p>
        </div>

        <h2>Relatórios Logísticos</h2>
        <div class="form-container">
            <input type="date" id="reportDate" style="padding: 10px; margin-bottom: 10px;">
            <input type="text" id="reportStatus" placeholder="Informe o status do relatório..." style="width: 80%; padding: 10px; margin-bottom: 10px;">
            <select id="reportType" style="width: 80%; padding: 10px; margin-bottom: 10px;">
                <option value="Logística">Logística</option>
                <option value="Inventário">Inventário</option>
                <option value="Transporte">Transporte</option>
            </select>
            <button class="button" onclick="addReport()">Adicionar Relatório</button>
        </div>
        <table id="reportTable">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Status (clique para detalhes)</th>
                    <th>Tipo</th>
                </tr>
            </thead>
            <tbody>
                <!-- Relatórios vão aparecer aqui -->
            </tbody>
        </table>

        <div id="contactInfo" style="margin-top: 20px;"></div>
    </main>
    <footer>
        <p>&copy; 2025 Tukarth Logística e Transporte - Todos os direitos reservados</p>
    </footer>
</body>
</html>
