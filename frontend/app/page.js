"use client";
import Navbar from '../components/Navbar';
import ActionCard from '@/components/ActionCards';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#DBEAFE] font-sans selection:bg-blue-200">
      <Navbar />
      
      <main className="max-w-[1440px] mx-auto px-4 py-10 md:py-16">
        <Hero>
          <div className="flex flex-col sm:flex-row gap-8 w-full lg:w-[65%]">
            <ActionCard 
              title="Check Skills" 
              iconSrc="https://cdn-icons-png.flaticon.com/512/1055/1055644.png"
              buttonBg="bg-[#3B82F6] hover:bg-blue-700 shadow-blue-100"
              isCheckSkills={true}
            />
            <ActionCard 
              title="View Recommendations" 
              iconSrc="https://cdn-icons-png.flaticon.com/512/3176/3176298.png"
              buttonBg="bg-[#1E40AF] hover:bg-blue-900 shadow-blue-200"
              isCheckSkills={false}
            />
          </div>
        </Hero>
      </main>
    </div>
  );
}