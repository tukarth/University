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
        .chatbot-container {
            position: fixed;
            bottom: 10px;
            right: 10px;
            background-color: white;
            width: 300px;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
            display: none;
        }
        .chatbot-header {
            background-color: #007bff;
            color: white;
            padding: 10px;
            text-align: center;
            font-weight: bold;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        }
        .chatbot-messages {
            height: 200px;
            overflow-y: auto;
            padding: 10px;
            background-color: #f9f9f9;
        }
        .chatbot-input-container {
            display: flex;
            padding: 10px;
        }
        .chatbot-input-container input {
            flex-grow: 1;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .chatbot-input-container button {
            background-color: #007bff;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-left: 5px;
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

        // Função para redirecionar ao site dos Correios
        function goToCorreios() {
            window.open('https://www.correios.com.br', '_blank');
        }

        // Função para abrir o chatbot
        function toggleChatbot() {
            const chatbot = document.getElementById('chatbotContainer');
            chatbot.style.display = chatbot.style.display === 'none' ? 'block' : 'none';
        }

        // Função para enviar mensagem no chatbot
        function sendMessage() {
            const input = document.getElementById('chatbotInput');
            const messagesContainer = document.getElementById('chatbotMessages');
            if (input.value) {
                const message = document.createElement('p');
                message.textContent = `Usuário: ${input.value}`;
                messagesContainer.appendChild(message);
                input.value = '';
            }
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
        <a href="#" class="contact-button" onclick="showContactEmail()">Contato</a>
        <button class="button" onclick="goToCorreios()">Rastrear Pedido nos Correios</button>
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
            <input type="text" id="
