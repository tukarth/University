src/
|-- components/
|   |-- Auth.js
|   |-- Dashboard.js
|   |-- Notification.js
|   |-- Report.js
|   |-- StatusUpdate.js
|-- services/
|   |-- api.js
|   |-- authService.js
|   |-- notificationService.js
|-- App.js
|-- index.js
import React, { useState } from 'react';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Notification from './components/Notification';
import Report from './components/Report';
import StatusUpdate from './components/StatusUpdate';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="app-container">
      <header>
        <h1>Tukarth Logística e Transporte</h1>
        <p>Gerenciamento logístico eficiente e dinâmico</p>
      </header>
      <nav>
        <a href="#home">Página Inicial</a>
        <a href="#services">Serviços</a>
        {isAuthenticated ? (
          <>
            <a href="#dashboard">Dashboard</a>
            <a href="#status-update">Atualizar Status</a>
            <a href="#notifications">Notificações</a>
            <a href="#reports">Relatórios</a>
          </>
        ) : (
          <a href="#auth">Login</a>
        )}
        <a href="#contact" className="contact-button" onClick={() => alert("Contato: arthur.oliveira99@cs.brazcubas.edu.br")}>
          Contato
        </a>
      </nav>
      <main>
        {!isAuthenticated ? (
          <Auth setIsAuthenticated={setIsAuthenticated} />
        ) : (
          <>
            <Dashboard />
            <StatusUpdate />
            <Notification />
            <Report />
          </>
        )}
      </main>
      <footer>
        <p>&copy; 2025 Tukarth Logística e Transporte - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default App;
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Auth({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Lógica de login
      console.log("Logando com", email, password);
      setIsAuthenticated(true);
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
import React from "react";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Dashboard de Gerenciamento</h2>
      {/* Adicione aqui componentes e funcionalidades do dashboard */}
    </div>
  );
}
import React, { useState } from "react";

export default function Notification() {
  const [notifications, setNotifications] = useState([]);

  // Lógica para receber e exibir notificações

  return (
    <div className="notification-container">
      <h2>Notificações</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
}
import React, { useState } from "react";

export default function Report() {
  const [reports, setReports] = useState([]);

  const addReport = (e) => {
    e.preventDefault();
    const reportDate = e.target.reportDate.value;
    const reportStatus = e.target.reportStatus.value;
    const reportType = e.target.reportType.value;
    if (!reportDate || !reportStatus || !reportType) {
      alert("Preencha todos os campos antes de adicionar um relatório.");
      return;
    }
    setReports([...reports, { reportDate, reportStatus, reportType }]);
  };

  return (
    <div className="report-container">
      <h2>Relatórios Logísticos</h2>
      <form onSubmit={addReport}>
        <input type="date" name="reportDate" style={{ padding: '10px', marginBottom: '10px' }} />
        <input type="text" name="reportStatus" placeholder="Informe o status do relatório..." style={{ width: '80%', padding: '10px', marginBottom: '10px' }} />
        <select name="reportType" style={{ width: '80%', padding: '10px', marginBottom: '10px' }}>
          <option value="Logística">Logística</option>
          <option value="Inventário">Inventário</option>
          <option value="Transporte">Transporte</option>
        </select>
        <button type="submit" className="button">Adicionar Relatório</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Status</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={index}>
              <td>{report.reportDate}</td>
              <td>{report.reportStatus}</td>
              <td>{report.reportType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function StatusUpdate() {
  const [status, setStatus] = useState("");
  const [statusLog, setStatusLog] = useState([]);

  const updateStatus = () => {
    if (status.trim() !== "") {
      setStatusLog([...statusLog, { time: new Date().toLocaleTimeString(), text: status }]);
      setStatus("");
    }
  };

  return (
    <div className="status-update-container">
      <h2>Atualizar Status</h2>
      <Input placeholder="Digite o status..." value={status} onChange={(e) => setStatus(e.target.value)} />
      <Button onClick={updateStatus}>Atualizar</Button>
      <ul>
        {statusLog.map((item, index) => (
          <li key={index}>{item.time} - {item.text}</li>
        ))}
      </ul>
    </div>
  );
}
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';

ReactDOM.render(<App />, document.getElementById("root"));
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

.form-container
