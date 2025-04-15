import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen relative bg-brand-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10"></div>
        <img
          src="https://res.cloudinary.com/dgyocpguk/image/upload/v1744344650/narla2_kmspjx.png"
          alt="Background"
          className="w-full h-full object-cover object-[center_40%]"
        />
      </div>
      
      <div className="relative z-20 container mx-auto px-4 min-h-screen flex flex-col justify-center items-center text-center">
        <div className="space-y-6">
          <h1 className="font-montserrat text-6xl md:text-7xl lg:text-8xl gradient-text">
            Narla Lopes
          </h1>
          <div className="space-y-2">
            <p className="text-2xl md:text-3xl text-white">
              Estrategista de Marketing
            </p>
            <p className="text-2xl md:text-3xl text-brand-gold font-semibold">
              & Posicionamento de Marcas
            </p>
          </div>
          
          <a
            href="https://ey8tcaodk2x.typeform.com/to/ATKrC3ok"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-brand-gold text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all duration-300 mt-8"
          >
            Quero estruturar meu marketing
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;