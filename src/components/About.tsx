import React from 'react';

const About = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white/90 backdrop-blur-3xl"></div>
        <img
          src="https://res.cloudinary.com/dgyocpguk/image/upload/v1744345912/image_fx_bgq5gi.png"
          alt="Office Background"
          className="w-full h-full object-cover grayscale opacity-10"
        />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-gold to-brand-gold rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <img
              src="https://res.cloudinary.com/dgyocpguk/image/upload/v1744344637/IMG_4492_hzhbku.png"
              alt="Narla Lopes Profile"
              className="relative rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="font-montserrat text-4xl mb-8 gradient-text uppercase">SOBRE MIM</h2>
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur p-6 rounded-lg shadow-lg">
                <p className="text-xl text-gray-700">
                  Com mais de 10 anos no marketing, ajudo negócios a se posicionarem de forma estratégica, 
                  com clareza, autoridade e resultados reais.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur p-6 rounded-lg shadow-lg">
                <p className="text-xl text-gray-700">
                  Acredito em estratégias personalizadas, que respeitam a essência de cada marca e 
                  conectam presença com performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;