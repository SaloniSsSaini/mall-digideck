"use client";
import { useState } from "react";

export default function ChatBot() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState<string[]>([]);

  const send = async () => {
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: msg }),
    });

    const data = await res.json();

    setChat([...chat, "You: " + msg, "AI: " + data.reply]);
    setMsg("");
  };

  return (
    <div style={{ position: "fixed", bottom: 20, right: 20, background: "#fff", color: "#000", padding: 10 }}>
      <div style={{ height: 100, overflow: "auto" }}>
        {chat.map((c, i) => <div key={i}>{c}</div>)}
      </div>

      <input value={msg} onChange={(e) => setMsg(e.target.value)} />
      <button onClick={send}>Send</button>
    </div>
  );
}