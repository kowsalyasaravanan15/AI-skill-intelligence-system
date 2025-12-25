import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#3B82F6] md:px-16 text-white shadow-md">
      <div className="flex items-center gap-2">
        <div className="bg-white/20 p-2 rounded-full">
          <span className="text-xl">☁️</span>
        </div>
        <span className="font-bold text-2xl tracking-tight">AI Powered</span>
      </div>
      
      <div className="hidden md:flex items-center gap-10 font-semibold">
        <a href="#" className="border-b-2 border-white pb-1">Home</a>
        <a href="#" className="hover:opacity-80 transition">About</a>
        <a href="#" className="hover:opacity-80 transition">Career Insight</a>
        <a href="#" className="hover:opacity-80 transition">Contact</a>
      </div>

      <button className="bg-transparent border border-white/40 px-8 py-1.5 rounded-lg hover:bg-white/10 transition font-bold">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;