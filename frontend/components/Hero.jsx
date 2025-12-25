import React from 'react';

const Hero = ({ children }) => {
  return (
    <div className="bg-[#EEF2FF]/80 backdrop-blur-md rounded-[50px] p-8 md:p-14 shadow-2xl border border-white/40 relative">
      <h1 className="text-4xl md:text-7xl font-black text-[#1E3A8A] text-center mb-16 tracking-tight">
        Welcome, <span className="text-[#3B82F6]">Kowsalya!</span>
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {children}
        <div className="w-full lg:w-[35%] flex justify-center">
          <div className="relative group">
            <img 
              src="https://ouch-cdn2.icons8.com/6vE-rR0Vz4_x_fGz2_zY-7V-v0-x8Yp8zQJpX_yF9lE/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzg3/LzlmNGE5NjE5LWVi/MmEtNDQ0YS04MmRj/LTQxZGE1YjJjYjZl/NS5zdmc.png" 
              alt="Avatar"
              className="w-64 md:w-[450px] drop-shadow-2xl transition-transform group-hover:rotate-1"
            />
            <div className="absolute top-10 right-0 bg-white p-3 rounded-full shadow-lg animate-bounce">
               <span className="text-blue-500 text-3xl">💙</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;