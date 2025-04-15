import React from 'react';
import { Clock } from 'lucide-react';

const ComingSoon = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_rgba(198,163,95,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 text-center relative">
        <div className="glass-effect p-12 rounded-2xl max-w-2xl mx-auto hover:shadow-xl hover:shadow-brand-gold/10 transition-all duration-300">
          <Clock className="w-16 h-16 text-brand-gold mx-auto mb-6 animate-float" />
          <h2 className="font-montserrat text-3xl mb-4 gradient-text">Infoprodutos</h2>
          <p className="text-xl text-gray-300">Em breve</p>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;