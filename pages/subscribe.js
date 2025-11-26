import { useState } from 'react';

export default function Subscribe() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/create-checkout-session', { method: 'POST' });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError('Unable to create checkout session');
      }
    } catch (err) {
      setError('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Subscribe to Pocket PT</h1>
      <p>Unlock your personalized program and AI trainer.</p>
      <button onClick={handleSubscribe} disabled={loading}>
        {loading ? 'Redirecting...' : 'Subscribe Now'}
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}
