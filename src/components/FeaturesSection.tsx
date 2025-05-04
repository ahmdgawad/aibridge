import React from 'react';

// Placeholder for individual feature card
const FeatureCard: React.FC<{ title: string; description: string; icon?: string }> = ({ title, description, icon }) => (
  <div style={{ backgroundColor: '#222', padding: '1.5rem', borderRadius: '8px', flex: '1 1 45%', minWidth: '300px', margin: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
    {/* Placeholder for icon */}
    {icon && <span style={{ fontSize: '2rem', marginBottom: '1rem' }}>{icon}</span>}
    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{title}</h3>
    <p style={{ color: '#ccc' }}>{description}</p>
  </div>
);

const FeaturesSection: React.FC = () => {
  // Basic structure based on shuttleai.com features section
  return (
    <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Packed with hundreds of features</h2>
      <p style={{ fontSize: '1.1rem	', marginBottom: '3rem', color: '#ccc' }}>
        From text completion to image generation, AIBridge has APIs for literally everything.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <FeatureCard
          icon="🚀"
          title="Fast Infrastructure"
          description="AIBridge is one of the lowest latency APIs in the market with our custom framework and optimized infrastructure."
        />
        <FeatureCard
          icon="💰"
          title="Pricing like no other"
          description="Our prices are one of the most competitive in the market, you will love it."
        />
        <FeatureCard
          icon="☁️"
          title="Ease of use"
          description="Our API is so simple to use, you will be up and running in minutes, even for beginners."
        />
        <FeatureCard
          icon="💻"
          title="Open Source Models"
          description="Our image and text generation models are open-source, supporting the open-source community."
        />
      </div>
    </section>
  );
};

export default FeaturesSection;

