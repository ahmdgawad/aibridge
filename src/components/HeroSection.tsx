import React from 'react';

const HeroSection: React.FC = () => {
  // Basic structure based on shuttleai.com hero section
  // Styling and the code visual element will be added later
  return (
    <section style={{ padding: '4rem 2rem', textAlign: 'center', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ maxWidth: '50%' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>AI API for developers</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#ccc' }}>
          AIBridge offers cheap, scalable, and production-ready AI models. It is free to use and easy to integrate.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <button style={{ padding: '0.8rem 1.5rem', backgroundColor: '#8A2BE2', color: 'white', border: 'none', cursor: 'pointer' }}>Get Started {">"}</button>
          <button style={{ padding: '0.8rem 1.5rem', backgroundColor: 'transparent', color: 'white', border: '1px solid white', cursor: 'pointer' }}>Documentation</button>
        </div>
      </div>
      <div style={{ maxWidth: '45%', backgroundColor: '#222', padding: '1rem', borderRadius: '8px', fontFamily: 'monospace', color: '#0f0' }}>
        {/* Placeholder for the code visual */}
        <p>&gt; POST api.aibridge.com</p>
        <p>✓ Authenticating user</p>
        <p>✓ Checking key permissions</p>
        <p>✓ Validating schema</p>
        <p>✓ Tokenizing request</p>
        <p>✓ Checking rate limits</p>
        <p>✓ Running AI model</p>
        <p>✓ Tokenizing response</p>
        <p>✓ Charging user</p>
        <p>Response: Hello! How can I assist you today?</p>
      </div>
    </section>
  );
};

export default HeroSection;

