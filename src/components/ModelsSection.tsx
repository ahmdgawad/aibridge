import React from 'react';

// Placeholder for individual card component
const ModelCard: React.FC<{ title: string; description: string; icon?: string }> = ({ title, description, icon }) => (
  <div style={{ backgroundColor: '#222', padding: '1.5rem', borderRadius: '8px', flex: 1, minWidth: '250px', margin: '1rem' }}>
    {/* Placeholder for icon */}
    {icon && <span style={{ fontSize: '1.5rem', marginBottom: '0.5rem', display: 'block' }}>{icon}</span>}
    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{title}</h3>
    <p style={{ color: '#ccc' }}>{description}</p>
  </div>
);

const ModelsSection: React.FC = () => {
  // Basic structure based on shuttleai.com models section
  return (
    <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Many AIBridge models for versatility</h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '3rem', color: '#ccc' }}>
        AIBridge offers many types of models, each with unique capabilities and applications. Choose the model that best suits your needs.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <ModelCard
          icon="📄"
          title="Text Generation"
          description="AIBridge has multiple powerful and fast language models. Perfect for large-scale applications and projects, role-playing, and more."
        />
        <ModelCard
          icon="🖼️"
          title="Image Generation"
          description="AIBridge has powerful image generation models. Perfect for creating art, designs, and more. Generate high-quality images in seconds."
        />
        <ModelCard
          icon="⚡"
          title="Other Models"
          description="We have many other models, including Speech to Text, Background Remover, and more. Each model is designed to be fast, powerful, and easy to use."
        />
      </div>
    </section>
  );
};

export default ModelsSection;

