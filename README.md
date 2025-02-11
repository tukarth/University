// Autenticação de usuário (login e registro)
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Lógica de login
      console.log("Logando com", email, password);
    } else {
      // Lógica de registro
      console.log("Registrando com", email, password);
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Registro"}</h2>
      <form onSubmit={handleSubmit}>
        <Input 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <Input 
          placeholder="Senha" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <Button type="submit">{isLogin ? "Login" : "Registrar"}</Button>
      </form>
      <Button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Não tem uma conta? Registre-se" : "Já tem uma conta? Faça login"}
      </Button>
    </div>
  );
}
