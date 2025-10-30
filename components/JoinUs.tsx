import React from 'react';
import { JOIN_NOW_URL } from '../constants';

const JoinUs: React.FC = () => {
  return (
    <section id="join" className="py-20 lg:py-32 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573496773905-f5b17e76b254?q=80&w=1600&h=500&auto=format&fit=crop')" }}>
        <div className="container mx-auto px-6 text-center bg-[#0F172A]/70 py-16 rounded-xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                Ready to Change the World?
            </h2>
            <p className="mt-4 text-lg text-slate-200 max-w-2xl mx-auto">
                Join our global family of learners and leaders. Whether you want to learn or volunteer, your journey starts here.
            </p>
            <a
                href={JOIN_NOW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block bg-[#2AC1FF] text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={(e) => {
                  try {
                    if (localStorage.getItem('uyOwner') === '1') {
                      e.preventDefault();
                      window.dispatchEvent(new Event('open-join-modal'));
                    }
                  } catch {}
                }}
            >
                Join Now →
            </a>
        </div>
    </section>
  );
};

export default JoinUs;