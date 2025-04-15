import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-md bg-brand-black/50 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="py-4">
            <img
              src="https://res.cloudinary.com/dgyocpguk/image/upload/v1744344622/bcopng_l8znlt.png"
              alt="Essência Criativa Logo"
              className="h-8 invert"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;