import React from 'react';

const Footer: React.FC = () => {
  // Basic structure based on shuttleai.com footer
  // Styling and specific links will be refined later
  return (
    <footer style={{ padding: '3rem 2rem', borderTop: '1px solid #333', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
      <div>
        {/* Placeholder for Logo */}
        <span style={{ fontSize: '1.2rem', fontWeight: 'bold', display: 'block', marginBottom: '1rem' }}>AIBridge</span>
        <p style={{ fontSize: '0.9rem', color: '#aaa' }}>© 2025 AIBridge Inc. All rights reserved.</p>
        {/* Placeholder for social icons */}
        <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
          <span>👾</span> <span>✈️</span> <span>🐙</span> <span>🐦</span> <span>🎵</span>
        </div>
        <p style={{ fontSize: '0.9rem', color: '#aaa', marginTop: '1rem' }}>✅ All services are online</p>
      </div>
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Pages</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Home</a></li>
          <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Models</a></li>
          <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Docs</a></li>
          <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Status</a></li>
          <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Dashboard</a></li>
        </ul>
      </div>
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Company</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>News</a></li>
          <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Twitter</a></li>
          <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Discord</a></li>
        </ul>
      </div>
      <div>
        <h4 style={{ marginBottom: '1rem' }}>Legal</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Privacy Policy</a></li>
          <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Terms Of Service</a></li>
          <li style={{ marginTop: '1rem' }}><a href="mailto:support@aibridge.com" style={{ color: '#ccc', textDecoration: 'none' }}>support@aibridge.com</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

