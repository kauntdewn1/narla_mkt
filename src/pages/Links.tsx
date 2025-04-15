import React from 'react';
import { Instagram, MessageCircle, Globe, ArrowRight } from 'lucide-react';

const Links = () => {
  return (
    <div className="min-h-screen bg-brand-black text-white py-16 px-4">
      <div className="max-w-md mx-auto space-y-12">
        {/* Profile Section */}
        <div className="text-center space-y-4">
          <div className="relative w-32 h-32 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-gold to-brand-gold rounded-full blur-xl opacity-50"></div>
            <img
              src="https://res.cloudinary.com/dgyocpguk/image/upload/v1744344637/IMG_4492_hzhbku.png"
              alt="Narla Lopes"
              className="relative w-full h-full object-cover object-[center_30%] rounded-full border-2 border-brand-gold"
            />
          </div>
          <h1 className="font-montserrat text-2xl font-bold">Narla Lopes</h1>
          <p className="text-brand-gold">Estrategista de Marketing e Posicionamento de Marcas</p>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/+19083132957"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-gradient-to-r from-brand-gold to-brand-gold text-brand-black p-4 rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-brand-gold/20"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="flex-1">Fale comigo no WhatsApp</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Brazil Agency Instagram */}
          <a
            href="https://www.instagram.com/essenciacriativamkt"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-white/10 backdrop-blur p-4 rounded-xl font-medium transition-all hover:bg-white/20"
          >
            <Instagram className="w-6 h-6 text-brand-gold" />
            <span className="flex-1">Instagram da Agência 🇧🇷</span>
            <ArrowRight className="w-5 h-5 text-brand-gold group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Brazil Agency Website */}
          <a
            href="https://br.creativeessencemarketing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-white/10 backdrop-blur p-4 rounded-xl font-medium transition-all hover:bg-white/20"
          >
            <Globe className="w-6 h-6 text-brand-gold" />
            <span className="flex-1">Site da Agência 🇧🇷</span>
            <ArrowRight className="w-5 h-5 text-brand-gold group-hover:translate-x-1 transition-transform" />
          </a>

          {/* US Agency Instagram */}
          <a
            href="https://www.instagram.com/creativeessencemkt"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-white/10 backdrop-blur p-4 rounded-xl font-medium transition-all hover:bg-white/20"
          >
            <Instagram className="w-6 h-6 text-brand-gold" />
            <span className="flex-1">Instagram da Agência 🇺🇸</span>
            <ArrowRight className="w-5 h-5 text-brand-gold group-hover:translate-x-1 transition-transform" />
          </a>

          {/* US Agency Website */}
          <a
            href="https://creativeessencemarketing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-white/10 backdrop-blur p-4 rounded-xl font-medium transition-all hover:bg-white/20"
          >
            <Globe className="w-6 h-6 text-brand-gold" />
            <span className="flex-1">Site da Agência 🇺🇸</span>
            <ArrowRight className="w-5 h-5 text-brand-gold group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Quote */}
        <p className="text-center text-gray-400 italic">
          Todos os caminhos levam à estratégia certa. 👣
        </p>

        {/* Fixed CTA Button */}
        <div className="fixed bottom-6 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[400px]">
          <a
            href="https://ey8tcaodk2x.typeform.com/to/ATKrC3ok"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 w-full bg-gradient-to-r from-brand-gold to-brand-gold text-brand-black py-4 px-6 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-brand-gold/20"
          >
            Quero estruturar meu marketing
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;