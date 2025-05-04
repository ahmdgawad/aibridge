import React from 'react';

const CommunitySection: React.FC = () => {
  // Basic structure based on shuttleai.com community section
  return (
    <section style={{ padding: '4rem 2rem', backgroundColor: '#1f1f1f', margin: '4rem 0', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Be apart of AIBridge community</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#ccc' }}>
          Join our community of developers with a passion for AI and machine learning and get the latest updates, news, and more.
        </p>
        <button style={{ padding: '0.8rem 1.5rem', backgroundColor: '#5865F2', /* Discord color */ color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>
          Join Discord {">"}
        </button>
      </div>
      <div>
        {/* Placeholder for Discord logo/graphic */}
        <span style={{ fontSize: '4rem' }}>👾</span>
      </div>
    </section>
  );
};

export default CommunitySection;

