# rastreamento-site
# Criando um site básico com HTML e CSS para logística
html_content = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arthur Logística</title>
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
            padding: 1rem;
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
        .updates {
            background-color: white;
            padding: 1.5rem;
            margin: 1rem auto;
            border-radius: 8px;
            width: 80%;
            max-width: 600px;
            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
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
        function updateStatus() {
            const updatesDiv = document.getElementById('updates');
            const now = new Date().toLocaleTimeString();
            updatesDiv.innerHTML = <p>Status atualizado em: ${now} - Entrega em andamento!</p>;
        }
        setInterval(updateStatus, 5000); // Atualiza a cada 5 segundos
    </script>
</head>
<body>
    <header>
        <h1>Arthur Logística</h1>
        <p>Soluções logísticas em tempo real</p>
    </header>
    <nav>
        <a href="#">Home</a>
        <a href="#">Serviços</a>
        <a href="#">Contato</a>
    </nav>
    <main>
        <h2>Status de Entrega</h2>
        <div id="updates" class="updates">
            <p>Aguardando atualização...</p>
        </div>
    </main>
    <footer>
        <p>© 2025 Arthur Logística. Todos os direitos reservados.</p>
    </footer>
</body>
</html>
"""

# Salvando o arquivo HTML
file_path = "/mnt/data/arthur_logistica_site.html"

with open(file_path, "w") as file:
    file.write(html_content)

file_path
