import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ModelsSection from './components/ModelsSection';
import FeaturesSection from './components/FeaturesSection';
import ImageGallery from './components/ImageGallery';
import Testimonials from './components/Testimonials';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container" style={{ backgroundColor: '#0f0f0f', color: 'white', minHeight: '100vh' }}>
      <Header />
      <main>
        <HeroSection />
        <ModelsSection />
        <FeaturesSection />
        <ImageGallery />
        <Testimonials />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

