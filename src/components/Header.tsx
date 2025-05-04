import React from 'react';

const Header: React.FC = () => {
  // Basic structure based on shuttleai.com header
  // Styling will be added later using CSS or a UI library
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', backgroundColor: '#1a1a1a' }}>
      <div>
        {/* Placeholder for Logo */}
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>AIBridge</span>
      </div>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        {/* Placeholder Navigation Links */}
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>News</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Models</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Status</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Docs</a>
      </nav>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {/* Placeholder Auth Buttons */}
        <button style={{ padding: '0.5rem 1rem' }}>Login</button>
        <button style={{ padding: '0.5rem 1rem', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;

