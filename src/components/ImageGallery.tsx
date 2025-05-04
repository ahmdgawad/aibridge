import React from 'react';

const ImageGallery: React.FC = () => {
  // Basic structure based on shuttleai.com image gallery
  // Placeholder for actual images and grid styling
  const placeholderImages = Array(12).fill('https://via.placeholder.com/300x200?text=AI+Image'); // Example placeholder

  return (
    <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Create images with AIBridge.</h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '3rem', color: '#ccc' }}>
        Generate high-quality images with our image generation model. Perfect for creating art, designs, and more.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        {placeholderImages.map((src, index) => (
          <img key={index} src={src} alt={`AI Generated Image ${index + 1}`} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        ))}
      </div>
      <button style={{ marginTop: '2rem', padding: '0.8rem 1.5rem', backgroundColor: 'transparent', color: 'white', border: '1px solid white', cursor: 'pointer' }}>
        Explore Image Generation Docs
      </button>
    </section>
  );
};

export default ImageGallery;

