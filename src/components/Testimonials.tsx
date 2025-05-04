import React from 'react';

// Placeholder for individual testimonial card
const TestimonialCard: React.FC<{ quote: string; author: string; title: string }> = ({ quote, author, title }) => (
  <div style={{ backgroundColor: '#222', padding: '1.5rem', borderRadius: '8px', flex: '1 1 30%', minWidth: '280px', margin: '1rem', display: 'flex', flexDirection: 'column' }}>
    <p style={{ fontStyle: 'italic', color: '#ccc', flexGrow: 1 }}>"{quote}"</p>
    <div style={{ marginTop: '1rem', borderTop: '1px solid #444', paddingTop: '1rem' }}>
      <p style={{ fontWeight: 'bold' }}>{author}</p>
      <p style={{ fontSize: '0.9rem', color: '#aaa' }}>{title}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  // Basic structure based on shuttleai.com testimonials section
  // Using placeholder content
  const testimonialsData = [
    {
      quote: "AIBridge has revolutionized how we integrate AI into our workflow. The API is incredibly fast and easy to use.",
      author: "Jane Doe",
      title: "Lead Developer, TechCorp"
    },
    {
      quote: "The pricing model is unbeatable, and the variety of models available covers all our needs. Highly recommended!",
      author: "John Smith",
      title: "CTO, Innovate Solutions"
    },
    {
      quote: "Fantastic support and a constantly improving platform. AIBridge is our go-to for AI services.",
      author: "Alex Green",
      title: "AI Researcher, Future AI Labs"
    }
  ];

  return (
    <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>People love using AIBridge.</h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '3rem', color: '#ccc' }}>
        We're proud to have helped thousands of developers build amazing projects with AIBridge. Here's what they have to say.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

