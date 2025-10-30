import React from 'react';
import DiversityIcon from './icons/DiversityIcon';
import CuriosityIcon from './icons/CuriosityIcon';
import CollaborationIcon from './icons/CollaborationIcon';
import ImpactIcon from './icons/ImpactIcon';

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1">
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600">{children}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Our Story, Our Mission
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            United Youngs born from a simple idea: education should have no barriers. We are a global community empowering the next generation of leaders, thinkers, and innovators.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&h=400&auto=format&fit=crop" alt="Students collaborating" className="rounded-xl shadow-lg w-full"/>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-[#0F172A]">Our Mission</h3>
              <p className="text-slate-600 mt-2">To make education free, accessible, and collaborative for every young person, everywhere.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0F172A]">Our Vision</h3>
              <p className="text-slate-600 mt-2">A world where every learner can become a teacher, and knowledge is shared freely across borders.</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-[#0F172A]">Our Core Values</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard icon={<DiversityIcon />} title="Diversity">
            We celebrate our global community and believe different perspectives create stronger ideas.
          </ValueCard>
          <ValueCard icon={<CuriosityIcon />} title="Curiosity">
            We foster a love for lifelong learning, encouraging questions that challenge the status quo.
          </ValueCard>
          <ValueCard icon={<CollaborationIcon />} title="Collaboration">
            We believe in the power of peer-to-peer learning and working together to achieve common goals.
          </ValueCard>
          <ValueCard icon={<ImpactIcon />} title="Impact">
            We are committed to creating tangible, positive change in our communities and the world.
          </ValueCard>
        </div>
      </div>
    </section>
  );
};

export default About;