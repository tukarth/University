<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logística - Sistema Completo</title>
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
            position: relative;
        }
        .clock {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 1rem;
            font-weight: bold;
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
    </style>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js"></script>
    <script>
        // Função para atualizar o relógio
        function updateClock() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
        }

        // Atualiza o relógio a cada segundo
        setInterval(updateClock, 1000);
        window.onload = updateClock;

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
            const table = document.getElementById('reportTable');
            const row = table.insertRow();
            const dateCell = row.insertCell(0);
            const statusCell = row.insertCell(1);
            const typeCell = row.insertCell(2);
            dateCell.textContent = reportDate;
            statusCell.innerHTML = `<a href="https://www.correios.com.br" target="_blank" class="details-link">${reportStatus}</a>`;
            typeCell.textContent = reportType;
        }

        // Função para redirecionar para o site dos Correios
        function redirectToCorreios() {
            window.open("https://www.correios.com.br", "_blank");
        }

        // Função para enviar um email usando uma API de serviço de email
        async function sendEmail() {
            const email = "arthur.oliveira99@cs.brazcubas.edu.br";
            const subject = "Contato pelo site Logística";
            const body = document.getElementById('message').value;
            try {
                const response = await fetch('https://api.exemplo.com/send-email', { // Substitua pelo endpoint real da API
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer SUA_CHAVE_API' // Substitua pela sua chave API
                    },
                    body: JSON.stringify({
                        to: email,
                        subject: subject,
                        text: body
                    }),
                });
                if (response.ok) {
                    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
                } else {
                    alert("Houve um problema ao enviar a mensagem. Tente novamente mais tarde.");
                }
            } catch (error) {
                alert("Erro ao enviar a mensagem: " + error.message);
            }
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
    </script>
</head>
<body>
    <header>
        <h1>Logística</h1>
        <div class="clock" id="clock"></div>
        <p>Gerenciamento logístico eficiente e dinâmico</p>
    </header>
    <nav>
        <a href="#">Página Inicial</a>
        <a href="servicos.html">Serviços</a>
        <a href="#" onclick="redirectToCorreios()">Correios</a>
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

        <h2>Contato</h2>
        <div class="form-container">
            <p>Envie-nos uma mensagem</p>
            <input type="email" placeholder="Seu email" style="width[_{{{CITATION{{{_1{](https://github.com/lgfranco22/blog/tree/2ff765f5547038ea91aa40671858d9fd9d5ffb28/entrar.php)[_{{{CITATION{{{_2{](https://github.com/mak-somniferum/momontum/tree/1d0d8230ff6b67a2b99fa0f5220e96d60e23b4bf/js%2Fclock.js)[_{{{CITATION{{{_3{](https://github.com/8529398670/raspi-server/tree/c6c1582a2a6f53de714080a9702f8e3677456488/test%2Fwebsocket%2Fget_errors.js)
