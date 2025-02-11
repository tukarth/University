import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Truck } from "lucide-react";
import { motion } from "framer-motion";

export default function TukarthLogistica() {
  const [status, setStatus] = useState("");
  const [statusLog, setStatusLog] = useState([]);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");

  const updateStatus = () => {
    if (status.trim() !== "") {
      setStatusLog([...statusLog, { time: new Date().toLocaleTimeString(), text: status }]);
      setStatus("");
    }
  };

  const sendMessage = () => {
    if (message.trim() !== "") {
      setChatMessages([...chatMessages, { sender: "Você", text: message }]);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <motion.header className="bg-blue-600 text-white p-6 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-3xl font-bold">Tukarth Logística e Transporte</h1>
        <p className="text-lg">Gerenciamento logístico eficiente e dinâmico</p>
      </motion.header>
      
      <div className="flex justify-center mt-6">
        <Card className="w-96 shadow-lg p-4">
          <CardContent>
            <h2 className="text-xl font-bold mb-4">Atualizar Status</h2>
            <Input placeholder="Digite o status..." value={status} onChange={(e) => setStatus(e.target.value)} />
            <Button className="mt-4 w-full" onClick={updateStatus}>Atualizar</Button>
            <ul className="mt-4">
              {statusLog.map((item, index) => (
                <li key={index} className="text-sm bg-gray-200 p-2 rounded mt-1">
                  {item.time} - {item.text}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div className="fixed bottom-10 right-10">
        <Button className="flex items-center" onClick={() => setChatOpen(!chatOpen)}>
          <MessageCircle className="mr-2" /> Chatbot
        </Button>
      </div>
      
      {chatOpen && (
        <div className="fixed bottom-16 right-10 bg-white shadow-lg rounded-lg p-4 w-80">
          <h3 className="font-bold text-lg">Chatbot</h3>
          <div className="h-40 overflow-y-auto border p-2 mt-2 bg-gray-100">
            {chatMessages.map((msg, index) => (
              <p key={index} className="text-sm"><strong>{msg.sender}:</strong> {msg.text}</p>
            ))}
          </div>
          <div className="flex mt-2">
            <Input placeholder="Digite uma mensagem..." value={message} onChange={(e) => setMessage(e.target.value)} />
            <Button onClick={sendMessage} className="ml-2">Enviar</Button>
          </div>
        </div>
      )}
    </div>
  );
}
