import React from 'react';
import { Instagram } from 'lucide-react';

const Agency = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="grid md:grid-cols-2">
        {/* Left side - Dark background */}
        <div className="bg-gradient-to-br from-gray-900 to-brand-black py-24 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_rgba(198,163,95,0.1),transparent_70%)]"></div>
          <div className="px-4 md:px-8 lg:px-12 xl:px-16 relative space-y-8">
            <img
              src="https://res.cloudinary.com/dgyocpguk/image/upload/v1744344622/bcopng_l8znlt.png"
              alt="Essência Criativa Logo"
              className="w-auto h-24 object-contain"
            />
            <div className="bg-white rounded-lg p-6 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/png;base64,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')] opacity-10"></div>
              <p className="text-2xl text-gray-900 font-medium mix-blend-multiply [text-shadow:1px_1px_0_white,2px_2px_0_white] tracking-tight">
                Tenha um time feito sob medida para atender seu negócio.
              </p>
            </div>
            
            <div className="animate-slide-up opacity-0 [animation-delay:500ms] [animation-fill-mode:forwards] bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-gray-300 leading-relaxed">
                Com nossa abordagem de estratégia e criatividade, você terá soluções personalizadas e inovadoras que impulsionam o crescimento do seu negócio. Trabalhamos lado a lado com você para entender suas necessidades, criar campanhas impactantes e desenvolver estratégias que gerem resultados reais, sempre com um olhar atento às tendências do mercado.
              </p>
            </div>

            <a
              href="https://www.instagram.com/essenciacriativamkt"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-brand-gold to-brand-gold text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-brand-gold/20 transition-all duration-300"
            >
              Siga no Instagram
              <Instagram size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right side - White background */}
        <div className="bg-white py-24 relative">
          <div className="px-4 md:px-8 lg:px-12 xl:px-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/5 to-brand-gold/5 rounded-2xl blur-3xl"></div>
              <div className="relative overflow-hidden rounded-2xl border border-brand-gold/10">
                <img
                  src="https://res.cloudinary.com/dgyocpguk/image/upload/v1744344648/Narla_Perfet_h4s2q3.png"
                  alt="Narla Lopes"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agency;