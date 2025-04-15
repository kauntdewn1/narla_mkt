import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Trabalhar com a Narla Lopes mudou totalmente minha visão de marketing.",
  },
  {
    quote: "Ela entrega clareza e estrutura com muita leveza.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-black via-gray-900 to-brand-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(198,163,95,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-effect p-8 rounded-2xl relative group hover:shadow-xl hover:shadow-brand-gold/10 transition-all duration-300"
            >
              <Quote className="text-brand-gold w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-xl text-white">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;