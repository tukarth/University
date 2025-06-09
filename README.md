<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Site com Fundo Preto</title>
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">
  <style>
    /* Seu estilo original */
    body {
      background-color: #000;
      color: #fff;
      font-family: 'Poppins', sans-serif;
    }
  </style>
</head>
<body>

  <div style="background-color: black; padding: 10px; text-align: center; border-bottom: 1px solid #222;">
    <form id="login-form" style="text-align: center;">
        <input type="email" placeholder="Email" id="email" required style="display: block; margin: 10px auto; padding: 10px; background-color: #1a1a1a; color: #fff; width: 80%; max-width: 300px;">
        <input type="password" placeholder="Senha" id="password" required style="display: block; margin: 10px auto; padding: 10px; background-color: #1a1a1a; color: #fff; width: 80%; max-width: 300px;">
        <button type="submit" style="background: #007BFF; color: white; padding: 12px 20px;">Entrar</button>     
    </form>
  </div>

  <script>
    // Configuração do Supabase
    const supabaseUrl = 'https://seu-projeto.supabase.co';
    const supabaseKey = 'sua-chave-publica';
    const supabase = supabase.createClient(supabaseUrl, supabaseKey);

    document.getElementById('login-form').addEventListener('submit', async (event) => {
      event.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      const { data, error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        alert('Erro ao fazer login: ' + error.message);
      } else {
        alert('Login bem-sucedido!');
        window.location.href = 'projeto.html';
      }
    });
  </script>

</body>
</html>
