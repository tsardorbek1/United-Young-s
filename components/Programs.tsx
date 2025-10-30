
import React from 'react';
import { programs } from '../constants';

const ProgramCard: React.FC<{ title: string, description: string }> = ({ title, description }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#2AC1FF]">
        <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
);

const Programs: React.FC = () => {
    return (
        <section id="programs" className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                        Our Programs
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                        Led by peers, for peers. Our programs are designed to help you excel academically and personally.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program) => (
                        <ProgramCard key={program.title} title={program.title} description={program.description} />
                    ))}
                </div>

                <p className="text-center mt-16 text-slate-700 italic text-lg">
                    New programs appear every week — because knowledge never stops growing.
                </p>
            </div>
        </section>
    );
};

export default Programs;
