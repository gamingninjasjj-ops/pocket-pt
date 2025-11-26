export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;

  try {
    // Here you'd integrate with your AI provider (e.g., OpenAI, Anthropic)
    // For now, return a placeholder reply that echoes the message.
    const reply = `Thanks for your message: ${message}`;
    res.status(200).json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to generate response' });
  }
}
