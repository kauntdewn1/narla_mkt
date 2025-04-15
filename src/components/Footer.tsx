import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-to-br from-gray-900 to-brand-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(198,163,95,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand and Social Links */}
          <div>
            <h2 className="font-montserrat text-2xl mb-4 gradient-text">Narla Lopes</h2>
            <div className="flex gap-4">
              <a
                href="https://wa.me/19083132957"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold hover:text-brand-gold transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={24} />
              </a>
              <a
                href="https://www.instagram.com/narla.lopes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold hover:text-brand-gold transition-colors"
                aria-label="Instagram Pessoal"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.instagram.com/essenciacriativamkt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold hover:text-brand-gold transition-colors"
                aria-label="Instagram Agência"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <a
              href="/politica-de-privacidade"
              className="text-gray-400 hover:text-brand-gold transition-colors block mb-2"
            >
              Política de privacidade
            </a>
          </div>

          {/* Logo */}
          <div className="flex justify-end">
            <img
              src="https://res.cloudinary.com/dgyocpguk/image/upload/v1744344622/bcopng_l8znlt.png"
              alt="Essência Criativa"
              className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2025 Narla Lopes. Todos os direitos reservados.</p>
          <a
            href="https://flowoff.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-brand-gold transition-colors text-sm"
          >
            Desenvolvido por @FlowOFF.mkt
          </a>
        </div>
      </div>

      {/* Fixed Social Links */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a
          href="https://wa.me/19083132957"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-brand-gold to-brand-gold p-3 rounded-full text-white hover:shadow-lg hover:shadow-brand-gold/20 transition-all duration-300"
          aria-label="WhatsApp Flutuante"
        >
          <MessageCircle size={24} />
        </a>
        <a
          href="https://www.instagram.com/narla.lopes/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-brand-gold to-brand-gold p-3 rounded-full text-white hover:shadow-lg hover:shadow-brand-gold/20 transition-all duration-300"
          aria-label="Instagram Flutuante"
        >
          <Instagram size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;