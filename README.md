<div style="font-family: Poppins, sans-serif; background-color: #000; color: #fff; padding: 20px;">

  <!-- Login Section -->
  <div style="background-color: #0d0d0d; padding: 10px; text-align: center; margin-bottom: 20px; border-radius: 8px;">
    <form style="text-align: center;">
      <input type="text" placeholder="Usuário" name="username" required style="display: block; margin: 10px auto; padding: 10px; width: 80%; max-width: 300px; border-radius: 5px; border: 1px solid #333; background-color: #1a1a1a; color: #fff;">
      <input type="password" placeholder="Senha" name="password" required style="display: block; margin: 10px auto; padding: 10px; width: 80%; max-width: 300px; border-radius: 5px; border: 1px solid #333; background-color: #1a1a1a; color: #fff;">
      <button type="submit" style="background: #007BFF; color: white; border: none; padding: 12px 20px; cursor: pointer; border-radius: 5px; font-size: 16px;">Entrar</button>
    </form>
  </div>

  <!-- Header -->
  <header style="padding: 30px 15px; text-align: center; background-color: #0d0d0d; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); border-radius: 8px; margin-bottom: 30px;">
    <h1 style="font-size: 2.2rem; font-weight: 500;">Site com Fundo Preto</h1>
  </header>

  <!-- Main Content Section -->
  <main>
    <section style="max-width: 900px; margin: 30px auto; padding: 25px; background-color: #0d0d0d; border-radius: 15px; box-shadow: 0 6px 15px rgba(0,0,0,0.4);">
      <h2 style="font-size: 1.8rem; font-weight: 600; margin-bottom: 15px; color: #1abc9c;">Projetos em Destaque.</h2>
      <p style="font-size: 1rem; margin-bottom: 15px; line-height: 1.7;">
        Este site apresenta projetos acadêmicos de forma simples, visual e organizada. A ideia é compartilhar soluções criativas e inspirar novas ideias.
      </p>
      <p style="font-size: 1rem; margin-bottom: 20px; line-height: 1.7;">
        📁 Para acessar os projetos, envie uma solicitação pelo Google Drive ou entre em contato: <a href="mailto:arthur.oliveira99@cs.brazcubas.edu.br" style="color: #1abc9c; text-decoration: none; hover: {text-decoration: underline;}">arthur.oliveira99@cs.brazcubas.edu.br</a>
      </p>
      
      <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 25px;">
        <a href="https://drive.google.com/drive/folders/1bJ27rtxhDxfna8sEtnO4MQNsp3kygkso?usp=sharing" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: #fff; background: #1abc9c; padding: 12px 18px; font-size: 0.9rem; text-align: center; border-radius: 10px;">
          🔗 Acesso Projetos
        </a>
        <a href="YOUR_SECURITY_POLICY_LINK_HERE_OR_IN_REPO.md" style="text-decoration: none; color: #fff; background: #555; padding: 12px 18px; font-size: 0.9rem; text-align: center; border-radius: 10px;">
          Security Policy
        </a>
      </div>
    </section>

    <!-- Gallery Section -->
    <section style="max-width: 900px; margin: 30px auto; padding: 25px; background-color: #0d0d0d; border-radius: 15px; box-shadow: 0 6px 15px rgba(0,0,0,0.4); text-align: center;">
      <h2 style="font-size: 1.8rem; font-weight: 600; margin-bottom: 20px; color: #1abc9c;">Galeria</h2>
      <p style="font-size: 0.9rem; color: #bbb; margin-bottom: 15px;">(As imagens do carrossel são exibidas dinamicamente no site. Aqui está uma representação estática ou links para elas.)</p>
      <!-- Você pode listar as imagens aqui, ou usar tags <img> se o GitHub permitir o carregamento delas a partir de URLs públicas -->
      <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">
        <img src="https://placehold.co/600x400.png" alt="Foto 1" style="max-width: 100%; width: 250px; height: auto; border-radius: 8px; border: 1px solid #333;">
        <img src="https://placehold.co/600x401.png" alt="Foto 2" style="max-width: 100%; width: 250px; height: auto; border-radius: 8px; border: 1px solid #333;">
        <img src="https://placehold.co/600x402.png" alt="Foto 3" style="max-width: 100%; width: 250px; height: auto; border-radius: 8px; border: 1px solid #333;">
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer style="text-align: center; margin-top: 50px; padding: 25px; font-size: 0.9rem; color: #aaa; border-top: 1px solid #222;">
    @tukarth - Todos os direitos reservados. &copy; <span id="currentYear">2024</span>
  </footer>
  <script>
    // Pequeno script para atualizar o ano no footer (pode não funcionar em todos os renderizadores de Markdown)
    // document.getElementById("currentYear").textContent = new Date().getFullYear();
    // Comentado pois scripts geralmente não rodam em READMEs. Melhor colocar o ano manualmente.
  </script>
</div>
