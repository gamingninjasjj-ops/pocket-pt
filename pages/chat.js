import { useState } from 'react';
import NavBar from '../components/NavBar';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input) return;
    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });
      const data = await res.json();
      const aiMessage = { role: 'assistant', content: data.reply || '...' };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <NavBar />
      <h1>Chat</h1>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>
            <strong>{msg.role === 'user' ? 'You' : 'PT'}:</strong> {msg.content}
          </p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
