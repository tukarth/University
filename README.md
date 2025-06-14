<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login com Firebase</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">
  <style>
    body {
      background-color: #000;
      color: #fff;
      font-family: 'Poppins', sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 20px;
    }

    form {
      background: rgba(255, 255, 255, 0.05);
      padding: 30px;
      border-radius: 15px;
      max-width: 400px;
      width: 100%;
      box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }

    input, button {
      width: 100%;
      margin: 10px 0;
      padding: 12px;
      border-radius: 8px;
      border: 1px solid #333;
      background-color: #1a1a1a;
      color: #fff;
      font-size: 16px;
    }

    button {
      background-color: #1abc9c;
      border: none;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    button:hover {
      background-color: #16a085;
    }
  </style>
</head>
<body>

  <form id="loginForm">
    <h2 style="text-align:center; margin-bottom:20px;">Login</h2>
    <input type="email" id="email" placeholder="Usuário" required>
    <input type="password" id="password" placeholder="Senha" required>
    <button type="submit">Entrar</button>
  </form>

  <!-- Firebase SDKs -->
  <script src="https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js"></script>

  <script>
    const firebaseConfig = {
      apiKey: "SUA_API_KEY",
      authDomain: "SEU_AUTH_DOMAIN",
      projectId: "SEU_PROJECT_ID",
      storageBucket: "SEU_STORAGE_BUCKET",
      messagingSenderId: "SEU_SENDER_ID",
      appId: "SEU_APP_ID"
    };

    firebase.initializeApp(firebaseConfig);
  </script>

  <script>
    document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          alert("Login realizado com sucesso!");
          window.location.href = "dashboard.html";
        })
        .catch((error) => {
          alert("Erro ao fazer login: " + error.message);
        });
    });
  </script>

</body>
</html>
