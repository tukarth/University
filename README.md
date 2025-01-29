# Criando o código para um site mais interativo com funcionalidades clicáveis
html_interactive_content = """
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arthur Logística - Interativo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #007bff;
            color: white;
            padding: 1.5rem;
            text-align: center;
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
        }
        main {
            padding: 2rem;
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
        footer {
            background-color: #007bff;
            color: white;
            text-align: center;
            padding: 1rem;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>
    <script>
        // Função para atualizar status
        function updateStatus() {
            const status = document.getElementById('status').value;
            const statusDiv = document.getElementById('statusDisplay');
            const now = new Date().toLocaleTimeString();
            statusDiv.innerHTML = <p>Status atualizado em: ${now} - ${status}</p>;
        }

        // Função para adicionar um novo relatório
        function addReport() {
            const reportDate = document.getElementById('reportDate').value;
            const reportStatus = document.getElementById('reportStatus').value;
            const table = document.getElementById('reportTable');
            const row = table.insertRow();
            const dateCell = row.insertCell(0);
            const statusCell = row.insertCell(1);
            dateCell.textContent = reportDate;
            statusCell.textContent = reportStatus;
        }
    </script>
</head>
<body>
    <header>
        <h1>Arthur Logística - Sistema de Gestão</h1>
        <p>Fazendo o seu negócio chegar mais rápido!</p>
    </header>
    <nav>
        <a href="#">Página Inicial</a>
        <a href="#">Serviços</a>
        <a href="#">Contato</a>
    </nav>
    <main>
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

        <h2>Contato</h2>
        <div class="form-container">
            <p>Envie-nos uma mensagem</p>
            <input type="email" placeholder="Seu email" style="width: 80%; padding: 10px; margin-bottom: 10px;"><br>
            <textarea placeholder="Sua mensagem..." style="width: 80%; padding: 10px; margin-bottom: 10px; height: 100px;"></textarea><br>
            <button class="button">Enviar</button>
        </div>
    </main>
    <footer>
        <p>© 2025 Arthur Logística. Todos os direitos reservados.</p>
    </footer>
</body>
</html>
"""

# RASTREIO
interactive_file_path = "/mnt/data/arthur_logistica_interativo.html"

with open(interactive_file_path, "w") as file:
    file.write(html_interactive_content)

interactive_file_path
