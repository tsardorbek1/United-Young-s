import React from 'react';
import { impactStats, testimonials } from '../constants';

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Our Global Impact
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            We measure our success by the success of our community. Here's a look at our journey so far.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-20">
          {impactStats.map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-4xl md:text-5xl font-extrabold text-sky-600">{stat.value}</p>
              <p className="text-slate-600 mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-[#0F172A]">Voices of Our Community</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg flex flex-col">
              <p className="text-slate-600 italic mb-6 flex-grow">"{testimonial.quote}"</p>
              <div className="mt-auto">
                <p className="font-bold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.country}</p>
                <p className="text-sm font-semibold text-sky-600 mt-2">{testimonial.success}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;