//src/components/Hero.tsx
'use client';
import * as React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full h-auto flex flex-col md:flex-row bg-black text-white">
      
      {/* 左邊圖片 */}
      <div className="w-full md:w-1/2 h-64 md:h-screen">
        <img
          src="/images/background.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 右邊文字 */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-10 md:h-screen text-center md:text-left">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-xl">
            SCAA Lab
          </h1>
          <p className="text-lg md:text-2xl drop-shadow-md">
            Society-centered AI and Automation Lab
          </p>
        </div>
      </div>
      
    </section>
  );
}
