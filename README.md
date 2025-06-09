<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Formulário premium de acesso ao projeto com design sofisticado">
  <title>Acesso Premium</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    :root {
      --primary: #8A6DF1;
      --secondary: #FFD700;
      --tertiary: #FF6B6B;
      --bg-dark: #0F0C29;
      --card-bg: rgba(30, 30, 46, 0.92);
      --text-light: #F0F3F5;
      --muted: #A0AEC0;
      --hover: #7D5FFF;
      --error: #FF6B6B;
      --success: #51CF66;
      --gold-gradient: linear-gradient(135deg, #FFD700, #FFB300);
      --purple-gradient: linear-gradient(135deg, #8A6DF1, #6A4CFF);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Inter', sans-serif;
      background: linear-gradient(-45deg, #0F0C29, #302B63, #24243E);
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;
      color: var(--text-light);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow-x: hidden;
      line-height: 1.6;
      padding: 20px;
    }

    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .particles-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      overflow: hidden;
    }

    .particle {
      position: absolute;
      background: rgba(138, 109, 241, 0.4);
      border-radius: 50%;
      animation: float 15s infinite linear;
    }

    @keyframes float {
      0% { transform: translateY(0) rotate(0deg); }
      100% { transform: translateY(-100vh) rotate(360deg); }
    }

    .container {
      z-index: 3;
      max-width: 500px;
      width: 100%;
      padding: 1.5rem;
    }

    .card {
      backdrop-filter: blur(16px) saturate(200%);
      background: var(--card-bg);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 1.5rem;
      padding: 2.5rem 2.2rem;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
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
      background: radial-gradient(circle, rgba(138, 109, 241, 0.15) 0%, transparent 70%);
      z-index: -1;
      opacity: 0.4;
      transform: rotate(30deg);
      animation: rotate 20s linear infinite;
    }

    @keyframes rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .card:hover {
      transform: translateY(-8px);
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
    }

    .card-header {
      text-align: center;
      margin-bottom: 2.5rem;
      position: relative;
    }

    .logo-container {
      margin: 0 auto 1.5rem;
      background: var(--purple-gradient);
      border-radius: 50%;
      height: 90px;
      width: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      box-shadow: 0 8px 25px rgba(138, 109, 241, 0.4);
      transition: all 0.3s ease;
      font-size: 2rem;
    }

    .logo-container:hover {
      transform: scale(1.08) rotate(5deg);
      box-shadow: 0 12px 30px rgba(138, 109, 241, 0.6);
    }

    .card-title {
      font-size: 2.2rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      letter-spacing: -0.5px;
      background: linear-gradient(to right, #FFD700, #8A6DF1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .card-description {
      font-size: 1.1rem;
      color: var(--muted);
      max-width: 350px;
      margin: 0 auto;
      line-height: 1.7;
    }

    .form-group {
      margin-bottom: 2rem;
      position: relative;
    }

    .form-group label {
      font-size: 1rem;
      margin-bottom: 0.7rem;
      display: block;
      font-weight: 500;
      color: #D0D9E0;
      padding-left: 0.5rem;
    }

    .input-container {
      position: relative;
      display: flex;
      align-items: center;
      transition: all 0.3s ease;
    }

    .form-icon {
      position: absolute;
      left: 16px;
      color: var(--muted);
      display: flex;
      z-index: 2;
    }

    .form-group input {
      width: 100%;
      padding: 1rem 1.2rem 1rem 3.8rem;
      border-radius: 0.75rem;
      border: 1px solid rgba(100, 100, 150, 0.4);
      background-color: rgba(25, 25, 40, 0.7);
      color: var(--text-light);
      font-size: 1.05rem;
      transition: all 0.3s ease;
      font-weight: 500;
      backdrop-filter: blur(5px);
    }

    .form-group input:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 4px rgba(138, 109, 241, 0.3);
      background-color: rgba(20, 20, 35, 0.8);
    }

    .form-group input::placeholder {
      color: #8A9BA8;
      font-weight: 400;
    }

    .password-toggle {
      position: absolute;
      right: 16px;
      background: none;
      border: none;
      color: var(--muted);
      cursor: pointer;
      padding: 6px;
      border-radius: 6px;
      transition: all 0.2s ease;
      z-index: 2;
    }

    .password-toggle:hover {
      color: var(--primary);
      background: rgba(255,255,255,0.08);
    }

    .remember-container {
      display: flex;
      align-items: center;
      margin: 1.5rem 0;
    }

    .remember-container input {
      margin-right: 10px;
      accent-color: var(--primary);
    }

    .submit-button {
      width: 100%;
      padding: 1.1rem;
      background: var(--purple-gradient);
      color: white;
      border: none;
      border-radius: 0.75rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
      transition: all 0.3s ease;
      font-size: 1.1rem;
      letter-spacing: 0.5px;
      margin-top: 1rem;
      cursor: pointer;
      box-shadow: 0 8px 25px rgba(138, 109, 241, 0.4);
      position: relative;
      overflow: hidden;
    }

    .submit-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: 0.5s;
    }

    .submit-button:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 30px rgba(138, 109, 241, 0.6);
    }

    .submit-button:hover::before {
      left: 100%;
    }

    .submit-button:active {
      transform: translateY(1px);
    }

    .submit-button svg {
      width: 22px;
      height: 22px;
      transition: transform 0.3s ease;
    }

    .submit-button:hover svg {
      transform: translateX(5px);
    }

    .card-footer {
      text-align: center;
      font-size: 0.95rem;
      margin-top: 2rem;
      color: var(--muted);
      padding-top: 1.5rem;
      border-top: 1px solid rgba(255,255,255,0.1);
    }

    .footer-links {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1.8rem;
      margin-top: 1.2rem;
    }

    .footer-links a {
      color: var(--text-light);
      text-decoration: none;
      transition: all 0.3s ease;
      font-weight: 500;
      font-size: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(138, 109, 241, 0.15);
      padding: 0.5rem 1.2rem;
      border-radius: 2rem;
      transition: all 0.3s ease;
    }

    .footer-links a:hover {
      background: rgba(138, 109, 241, 0.3);
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(138, 109, 241, 0.2);
    }

    .footer-links a i {
      transition: transform 0.3s ease;
    }

    .footer-links a:hover i {
      transform: translateX(3px);
    }

    .error-message {
      color: var(--error);
      font-size: 0.9rem;
      margin-top: 0.7rem;
      display: none;
      padding-left: 0.5rem;
      animation: shake 0.5s ease;
    }

    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20%, 60% { transform: translateX(-5px); }
      40%, 80% { transform: translateX(5px); }
    }

    .security-badge {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.7rem;
      margin-top: 1.5rem;
      color: var(--muted);
      font-size: 0.9rem;
    }

    /* Responsividade */
    @media (max-width: 576px) {
      .container {
        padding: 1rem;
      }
      
      .card {
        padding: 2rem 1.8rem;
        border-radius: 1.2rem;
      }
      
      .card-title {
        font-size: 2rem;
      }
      
      .logo-container {
        height: 80px;
        width: 80px;
        font-size: 1.8rem;
      }
      
      .form-group input {
        padding: 0.9rem 1rem 0.9rem 3.5rem;
      }
      
      .submit-button {
        padding: 1rem;
      }
      
      .footer-links {
        gap: 1rem;
      }
      
      .footer-links a {
        padding: 0.4rem 1rem;
      }
    }

    @media (max-width: 420px) {
      .card {
        padding: 1.8rem 1.5rem;
      }
      
      .logo-container {
        height: 75px;
        width: 75px;
        font-size: 1.7rem;
      }
      
      .card-title {
        font-size: 1.8rem;
      }
      
      .footer-links {
        flex-direction: column;
        gap: 0.8rem;
      }
    }
  </style>
</head>
<body>
  <div class="particles-container" id="particles"></div>

  <main class="container">
    <section class="card">
      <div class="card-header">
        <div class="logo-container">
          <i class="fas fa-crown"></i>
        </div>
        <h2 class="card-title">Acesso Premium</h2>
        <p class="card-description">Entre com suas credenciais para acessar recursos exclusivos e conteúdo privilegiado</p>
      </div>

      <div class="card-content">
        <form id="loginForm" novalidate>
          <div class="form-group">
            <label for="username">Usuário ou E-mail</label>
            <div class="input-container">
              <div class="form-icon">
                <i class="fas fa-user"></i>
              </div>
              <input id="username" type="text" placeholder="Digite seu usuário ou e-mail" required aria-describedby="username-error">
              <div id="username-error" class="error-message"></div>
            </div>
          </div>
          
          <div class="form-group">
            <label for="password">Senha</label>
            <div class="input-container">
              <div class="form-icon">
                <i class="fas fa-lock"></i>
              </div>
              <input id="password" type="password" placeholder="Digite sua senha" required aria-describedby="password-error">
              <button type="button" class="password-toggle" aria-label="Mostrar senha">
                <i class="fas fa-eye"></i>
              </button>
              <div id="password-error" class="error-message"></div>
            </div>
          </div>
          
          <div class="remember-container">
            <input type="checkbox" id="remember">
            <label for="remember">Lembrar deste dispositivo</label>
          </div>
          
          <button type="submit" class="submit-button">
            <i class="fas fa-unlock-alt"></i>
            Acessar Conteúdo Premium
          </button>
        </form>
      </div>

      <div class="security-badge">
        <i class="fas fa-shield-alt"></i>
        <span>Sistema protegido com criptografia de última geração</span>
      </div>

      <footer class="card-footer">
        <p>Plataforma premium de gerenciamento de projetos</p>
        <div class="footer-links">
          <a href="#"><i class="fas fa-key"></i> Recuperar senha</a>
          <a href="#"><i class="fas fa-user-plus"></i> Criar conta premium</a>
          <a href="#"><i class="fas fa-headset"></i> Suporte 24/7</a>
        </div>
      </footer>
    </section>
  </main>

  <script>
    // Criar partículas animadas
    function createParticles() {
      const container = document.getElementById('particles');
      const particleCount = 30;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Tamanho aleatório
        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Posição inicial aleatória
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Atraso e duração da animação
        const delay = Math.random() * 15;
        const duration = Math.random() * 20 + 10;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        // Cor baseada nas variáveis CSS
        const colors = ['rgba(138, 109, 241, 0.6)', 'rgba(255, 214, 0, 0.6)', 'rgba(255, 107, 107, 0.6)'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        container.appendChild(particle);
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
      createParticles();
      
      // Configuração do Firebase (exemplo)
      const firebaseConfig = {
        apiKey: "AIzaSyAEtOJtXMIclBzLNNsEXJKqF4Rsqg_AAHs",
        authDomain: "arthur-dba38.firebaseapp.com",
        projectId: "arthur-dba38",
        storageBucket: "arthur-dba38.appspot.com",
        messagingSenderId: "226852614993",
        appId: "1:226852614993:web:c4b2ba9eb6a09772e69970",
        measurementId: "G-WJDD8F5PMC"
      };
      
      // Inicialização do Firebase (apenas exemplo, requer configuração real)
      // firebase.initializeApp(firebaseConfig);
      // const analytics = firebase.analytics();

      document.getElementById("loginForm").addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Validação
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        let isValid = true;
        
        if (!username.trim()) {
          showError('username-error', 'Por favor, informe seu usuário ou e-mail');
          isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(username) && username.length < 3) {
          showError('username-error', 'Credenciais inválidas');
          isValid = false;
        }
        
        if (!password.trim()) {
          showError('password-error', 'Por favor, informe sua senha');
          isValid = false;
        } else if (password.length < 6) {
          showError('password-error', 'A senha deve ter pelo menos 6 caracteres');
          isValid = false;
        }
        
        if (isValid) {
          // Simulação de loading
          const button = document.querySelector('.submit-button');
          const originalText = button.innerHTML;
          button.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Autenticando...`;
          button.disabled = true;
          
          // Simulação de requisição
          setTimeout(() => {
            button.disabled = false;
            button.innerHTML = originalText;
            alert('Autenticação bem-sucedida! Redirecionando...');
            // window.location.href = "dashboard.html";
          }, 2000);
        }
      });
      
      // Toggle de senha
      document.querySelector('.password-toggle').addEventListener('click', function() {
        const passwordInput = document.getElementById('password');
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Alterar ícone
        this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
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
    });
  </script>
</body>
</html>
