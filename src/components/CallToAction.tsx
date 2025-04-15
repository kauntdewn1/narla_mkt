import React from 'react';
import { ArrowRight, Sparkles, Target, TrendingUp } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(198,163,95,0.05),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          {/* Main content */}
          <div className="bg-white rounded-2xl p-12 shadow-[0_0_50px_rgba(198,163,95,0.1)] relative">
            {/* Floating elements */}
            <div className="absolute -top-6 -left-6 bg-brand-gold/10 backdrop-blur-xl p-4 rounded-2xl animate-float">
              <Target className="w-8 h-8 text-brand-gold" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-brand-gold/10 backdrop-blur-xl p-4 rounded-2xl animate-float [animation-delay:500ms]">
              <TrendingUp className="w-8 h-8 text-brand-gold" />
            </div>
            
            {/* Heading */}
            <div className="text-center space-y-6 mb-12">
              <div className="inline-flex items-center gap-2 bg-brand-gold/10 px-4 py-2 rounded-full">
                <Sparkles className="w-5 h-5 text-brand-gold" />
                <span className="text-brand-gold font-medium">Transforme seu Marketing</span>
              </div>
              <div className="space-y-2">
                <h2 className="font-montserrat text-4xl md:text-5xl text-gray-900">
                  Pronta para estruturar
                </h2>
                <h2 className="font-montserrat text-4xl md:text-5xl">
                  seu marketing com
                </h2>
                <div className="flex flex-col gap-1">
                  <span className="font-montserrat text-4xl md:text-5xl text-brand-gold">estratégia</span>
                  <span className="font-montserrat text-4xl md:text-5xl text-gray-900">&</span>
                  <span className="font-montserrat text-4xl md:text-5xl text-brand-gold">essência?</span>
                </div>
              </div>
              <p className="text-xl text-gray-600">Vamos conversar sobre o seu negócio.</p>
            </div>
            
            {/* CTA Button */}
            <div className="text-center">
              <a
                href="https://ey8tcaodk2x.typeform.com/to/ATKrC3ok"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-brand-gold to-brand-gold text-white px-12 py-6 rounded-full text-xl font-medium hover:shadow-2xl hover:shadow-brand-gold/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                Comece agora
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;