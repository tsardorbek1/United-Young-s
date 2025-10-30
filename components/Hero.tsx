import React from 'react';
import { JOIN_NOW_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&h=900&auto=format&fit=crop')" }}>
      <div className="absolute inset-0 bg-[#0F172A] opacity-60"></div>
      <div className="relative z-10 px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
          By the youth, for the youth — <span className="text-[#2AC1FF]">learning without borders.</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light text-slate-200">
          Founded in 2025, United Youngs unites 1,000+ members from 15+ countries in a mission to make education free, accessible, and global.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={JOIN_NOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2AC1FF] text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
          >
            Join Now
          </a>
          <a
            href="#about"
            className="bg-white text-[#0F172A] font-bold py-3 px-8 rounded-full hover:bg-slate-200 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;