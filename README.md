<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tukarth Logística e Transporte</title>
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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js"></script>
    <script>
        // Função para atualizar status
        function updateStatus() {
            const status = document.getElementById('status').value;
            const statusDiv = document.getElementById('statusDisplay');
            const now = new Date().toLocaleTimeString();
            statusDiv.innerHTML = `<p>Status atualizado em: ${now} - ${status}</p>`;
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
            statusCell.innerHTML = `<a href="https://www.correios.com.br" target="_blank" class="details-link">${reportStatus}</a>`;
            typeCell.textContent = reportType;
        }

        // Função para baixar a tabela de relatórios como PDF
        function downloadPDF() {
            const element = document.getElementById('reportTable');
            html2pdf().from(element).save('relatorios_logisticos.pdf');
        }

        // Função para baixar a tabela de relatórios como planilha
        function downloadExcel() {
            let table = document.getElementById('reportTable');
            let rows = [...table.rows];
            let csvContent = "data:text/csv;charset=utf-8," + rows.map(e => [...e.children].map(e => e.innerText).join(",")).join("\n");
            let encodedUri = encodeURI(csvContent);
            let link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "relatorios_logisticos.csv");
            document.body.appendChild(link); // Required for FF
            link.click();
        }

        // Exibir e-mail apenas após clique
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
        <a href="#" onclick="redirectToCorreios()">Correios</a>
        <a href="#" class="contact-button" onclick="showContactEmail()">Contato</a>
    </nav>
    <main>
        <section id="servicos">
            <h2>Serviços Tukarth</h2>
            <ul style="text-align: left; max-width: 600px; margin: 0 auto;">
                <li>Gerenciamento de Estoques</li>
                <li>Transporte de Mercadorias</li>
                <li>Logística Reversa</li>
                <li>Consultoria em Processos Logísticos</li>
                <li>Distribuição e Entrega Rápida</li>
                <li>Gestão de Transporte de Cargas Pesadas</li>
                <li>Monitoramento e Rastreamento de Entregas</li>
                <li>Coordenação de Frota</li>
            </ul>
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
        <div class="form-container">
            <button class="button" onclick="downloadPDF()">Salvar como PDF</button>
            <button class="button" onclick="downloadExcel()">Salvar como Planilha</button>
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
