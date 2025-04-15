import React, { useEffect, useRef } from 'react';
import { Target, TrendingUp, MessageSquare, Brain, Rocket, Clock } from 'lucide-react';

const services = [
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Posicionamento de Marca',
    description: 'Criação da base estratégica da sua comunicação e identidade.',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Gestão de Tráfego Pago',
    description: 'Meta Ads e Google Ads com foco em conversão e escala.',
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'Conteúdo e Branding',
    description: 'Planejamento editorial com foco em autoridade e engajamento.',
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'Consultoria Estratégica',
    description: 'Diagnóstico, estruturação e plano de ação personalizado.',
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'Funis e Lançamentos',
    description: 'Da captação à retenção com automações e clareza.',
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Infoprodutos e Lançamentos',
    description: 'Criação de estratégias e suporte completo para lançamentos de produtos digitais.',
    comingSoon: true,
  },
];

const Services = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticle = () => {
      if (!particlesRef.current) return;
      
      const particle = document.createElement('div');
      particle.className = 'absolute w-2 h-2 bg-brand-gold/20 rounded-full';
      
      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      
      // Random size
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Animation
      particle.animate(
        [
          { 
            opacity: 0,
            transform: 'translate(0, 0) scale(1)',
            filter: 'blur(0px)'
          },
          { 
            opacity: 0.5,
            transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(2)`,
            filter: 'blur(2px)'
          },
          { 
            opacity: 0,
            transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(0)`,
            filter: 'blur(4px)'
          }
        ],
        {
          duration: Math.random() * 3000 + 2000,
          easing: 'ease-out'
        }
      );
      
      particlesRef.current.appendChild(particle);
      
      setTimeout(() => {
        if (particlesRef.current?.contains(particle)) {
          particlesRef.current.removeChild(particle);
        }
      }, 5000);
    };

    const interval = setInterval(createParticle, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-brand-black to-gray-900 relative overflow-hidden">
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {/* Particles will be dynamically added here */}
      </div>
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(198,163,95,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative">
        <h2 className="font-montserrat text-4xl text-center mb-16 gradient-text">
          Como posso te ajudar
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`glass-effect p-8 rounded-2xl hover:shadow-xl hover:shadow-brand-gold/10 transition-all duration-300 group ${
                service.comingSoon ? 'opacity-75' : ''
              }`}
            >
              <div className="text-brand-gold mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="font-montserrat text-xl mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;