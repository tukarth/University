<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Formulário de acesso ao projeto com design moderno">
  <title>Acesso ao Projeto</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: #74EBD5;
      --secondary: #ACB6E5;
      --bg-dark: #0F2027;
      --card-bg: rgba(42, 59, 64, 0.85);
      --text-light: #F0F3F5;
      --muted: #A0AEC0;
      --hover: #5cb8a9;
      --error: #FF6B6B;
      --success: #51CF66;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Inter', sans-serif;
      background: linear-gradient(-45deg, #0F2027, #203A43, #2C5364);
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;
      color: var(--text-light);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow-x: hidden;
      line-height: 1.5;
    }

    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .background-illustration {
      position: absolute;
      bottom: -50px;
      right: -50px;
      max-width: min(600px, 90vw);
      opacity: 0.07;
      pointer-events: none;
      z-index: 0;
      filter: blur(1px);
    }

    .container {
      z-index: 2;
      max-width: 460px;
      width: 100%;
      padding: 1.5rem;
    }

    .card {
      backdrop-filter: blur(12px) saturate(180%);
      background: var(--card-bg);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 1.25rem;
      padding: 2.25rem 2rem;
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
      transition: all 0.4s ease;
      position: relative;
      overflow: hidden;
    }

    .card::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(116,235,213,0.1) 0%, transparent 70%);
      z-index: -1;
      opacity: 0.3;
      transform: rotate(30deg);
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 45px rgba(0, 0, 0, 0.4);
    }

    .card-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .logo-container {
      margin: 0 auto 1.25rem;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      border-radius: 50%;
      height: 70px;
      width: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #233237;
      box-shadow: 0 4px 15px rgba(116,235,213,0.3);
      transition: all 0.3s ease;
    }

    .logo-container:hover {
      transform: scale(1.05) rotate(5deg);
    }

    .card-title {
      font-size: 1.85rem;
      font-weight: 700;
      margin-bottom: 0.4rem;
      letter-spacing: -0.5px;
    }

    .card-description {
      font-size: 1rem;
      color: var(--muted);
      max-width: 320px;
      margin: 0 auto;
    }

    .form-group {
      margin-bottom: 1.75rem;
      position: relative;
    }

    .form-group label {
      font-size: 0.95rem;
      margin-bottom: 0.6rem;
      display: block;
      font-weight: 500;
      color: #D0D9E0;
    }

    .input-container {
      position: relative;
      display: flex;
      align-items: center;
    }

    .form-icon {
      position: absolute;
      left: 14px;
      color: var(--muted);
      display: flex;
    }

    .form-group input {
      width: 100%;
      padding: 0.85rem 1rem 0.85rem 3.2rem;
      border-radius: 0.5rem;
      border: 1px solid rgba(62, 80, 85, 0.7);
      background-color: rgba(26, 40, 45, 0.6);
      color: var(--text-light);
      font-size: 1.02rem;
      transition: all 0.25s ease;
      font-weight: 500;
    }

    .form-group input:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(116, 235, 213, 0.25);
      background-color: rgba(20, 35, 40, 0.7);
    }

    .form-group input::placeholder {
      color: #8A9BA8;
      font-weight: 400;
    }

    .password-toggle {
      position: absolute;
      right: 14px;
      background: none;
      border: none;
      color: var(--muted);
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
      transition: all 0.2s ease;
    }

    .password-toggle:hover {
      color: var(--primary);
      background: rgba(255,255,255,0.05);
    }

    .submit-button {
      width: 100%;
      padding: 0.95rem;
      background: linear-gradient(to right, var(--primary), #8BD7C6);
      color: #1A2D34;
      border: none;
      border-radius: 0.5rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.65rem;
      transition: all 0.3s ease;
      font-size: 1.05rem;
      letter-spacing: 0.3px;
      margin-top: 0.5rem;
      cursor: pointer;
      box-shadow: 0 4px 15px rgba(116,235,213,0.3);
    }

    .submit-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(116,235,213,0.4);
    }

    .submit-button:active {
      transform: translateY(1px);
    }

    .submit-button svg {
      width: 20px;
      height: 20px;
      transition: transform 0.3s ease;
    }

    .submit-button:hover svg {
      transform: translateX(3px);
    }

    .card-footer {
      text-align: center;
      font-size: 0.9rem;
      margin-top: 1.5rem;
      color: var(--muted);
      padding-top: 1.2rem;
      border-top: 1px solid rgba(255,255,255,0.08);
    }

    .footer-links {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      margin-top: 0.8rem;
    }

    .footer-links a {
      color: var(--primary);
      text-decoration: none;
      transition: all 0.2s ease;
      font-weight: 500;
      font-size: 0.95rem;
    }

    .footer-links a:hover {
      text-decoration: underline;
      opacity: 0.9;
    }

    .error-message {
      color: var(--error);
      font-size: 0.85rem;
      margin-top: 0.5rem;
      display: none;
    }

    /* Responsividade */
    @media (max-width: 480px) {
      .container {
        padding: 1rem;
      }
      
      .card {
        padding: 1.75rem 1.5rem;
      }
      
      .card-title {
        font-size: 1.65rem;
      }
      
      .form-group input {
        padding: 0.75rem 0.9rem 0.75rem 2.9rem;
      }
      
      .submit-button {
        padding: 0.85rem;
      }
    }

    @media (max-width: 360px) {
      .card {
        padding: 1.5rem 1.25rem;
      }
      
      .logo-container {
        height: 60px;
        width: 60px;
      }
      
      .footer-links {
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  </style>
</head>
<body>
  <img src="https://www.svgrepo.com/show/499790/ui-interface.svg" alt="Ilustração de fundo" class="background-illustration">

  <main class="container">
    <section class="card">
      <div class="card-header">
        <div class="logo-container">
          <span>Logo</span> <!-- Adicione um logo ou texto aqui -->
        </div>
        <h2 class="card-title">Acesso ao Projeto</h2>
        <p class="card-description">Entre para explorar recursos exclusivos...</p>
      </div>

      <div class="card-content">
        <form id="loginForm" novalidate>
          <div class="form-group">
            <label for="username">Usuário ou E-mail</label>
            <div class="input-container">
              <div class="form-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5.121 17.804A9 9 0 1118.364 4.636M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <input id="username" type="text" placeholder="Digite seu usuário ou e-mail" required aria-describedby="username-error">
              <div id="username-error" class="error-message"></div>
            </div>
          </div>
          
          <div class="form-group">
            <label for="password">Senha</label>
            <div class="input-container">
              <div class="form-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 11c0-1.657-1.343-3-3-3S6 9.343 6 11v2h12v-2c0-1.657-1.343-3-3-3s-3 1.343-3 3z" />
                </svg>
              </div>
              <input id="password" type="password" placeholder="Digite sua senha" required aria-describedby="password-error">
              <button type="button" class="password-toggle" aria-label="Mostrar senha">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </button>
              <div id="password-error" class="error-message"></div>
            </div>
          </div>
          
          <button type="submit" class="submit-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
              <polyline points="10 17 15 12 10 7"/>
              <line x1="15" x2="3" y1="12" y2="12"/>
            </svg>
            Acessar Projeto
          </button>
        </form>
      </div>

      <footer class="card-footer">
        <p>Plataforma segura de gerenciamento de projetos</p>
        <div class="footer-links">
          <a href="#" aria-label="Recuperar senha">Esqueceu a senha?</a>
          <a href="#" aria-label="Criar nova conta">Criar conta</a>
          <a href="#" aria-label="Suporte técnico">Ajuda</a>
        </div>
      </footer>
    </section>
  </main>

  <script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-analytics.js";

    const firebaseConfig = {
      apiKey: "AIzaSyAEtOJtXMIclBzLNNsEXJKqF4Rsqg_AAHs",
      authDomain: "arthur-dba38.firebaseapp.com",
      projectId: "arthur-dba38",
      storageBucket: "arthur-dba38.firebasestorage.app",
      messagingSenderId: "226852614993",
      appId: "1:226852614993:web:c4b2ba9eb6a09772e69970",
      measurementId: "G-WJDD8F5PMC"
    };

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    document.getElementById("loginForm").addEventListener("submit", (e) => {
      e.preventDefault();
      
      // Validação básica
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      let isValid = true;
      
      if (!username.trim()) {
        showError('username-error', 'Por favor, informe seu usuário ou e-mail');
        isValid = false;
      }
      
      if (!password.trim()) {
        showError('password-error', 'Por favor, informe sua senha');
        isValid = false;
      }
      
      if (isValid) {
        // Simulação de loading
        const button = document.querySelector('.submit-button');
        const originalText = button.innerHTML;
        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animate-spin">
          <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
        </svg> Autenticando...`;
        button.disabled = true;
        
        // Simulação de requisição
        setTimeout(() => {
          window.location.href = "<script src='https://cdn.jsdelivr.net/npm/@supabase/supabase-js'></script>";
        }, 1500);
      }
    });
    
    // Toggle de senha
    document.querySelector('.password-toggle').addEventListener('click', function() {
      const passwordInput = document.getElementById('password');
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      this.querySelector('svg').style.opacity = type === 'password' ? 0.7 : 1;
    });
    
    // Limpar erros ao digitar
    document.getElementById('username').addEventListener('input', () => hideError('username-error'));
    document.getElementById('password').addEventListener('input', () => hideError('password-error'));
    
    function showError(elementId, message) {
      const errorElement = document.getElementById(elementId);
      errorElement.textContent = message;
      errorElement.style.display = 'block';
    }
    
    function hideError(elementId) {
      const errorElement = document.getElementById(elementId);
      errorElement.style.display = 'none';
    }
    
    //
