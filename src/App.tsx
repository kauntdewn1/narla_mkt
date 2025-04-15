import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Instagram, MessageCircle } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Agency from './components/Agency';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import ComingSoon from './components/ComingSoon';
import Footer from './components/Footer';
import Links from './pages/Links';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/links" element={<Links />} />
        <Route path="/" element={
          <div className="font-inter bg-brand-black">
            <Hero />
            <About />
            <Services />
            <Agency />
            <Testimonials />
            <CallToAction />
            <ComingSoon />
            <Footer />
            
            {/* Fixed Social Links */}
            <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
              <a
                href="https://wa.me/+19083132957"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-brand-gold to-brand-gold p-3 rounded-full text-white hover:shadow-lg hover:shadow-brand-gold/20 transition-all duration-300"
              >
                <MessageCircle size={24} />
              </a>
              <a
                href="https://www.instagram.com/narla.lopes/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-brand-gold to-brand-gold p-3 rounded-full text-white hover:shadow-lg hover:shadow-brand-gold/20 transition-all duration-300"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;