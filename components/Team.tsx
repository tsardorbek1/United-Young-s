
import React from 'react';
import { teamMembers } from '../constants';

interface TeamMemberCardProps {
    name: string;
    role: string;
    gender: 'male' | 'female';
    index: number;
    imageUrl?: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, gender, index, imageUrl }) => {
    const fallbackUrl = `https://xsgames.co/randomusers/assets/avatars/${gender}/${index}.jpg`;
    const localNameToPath = (fullName: string) => {
        const slug = fullName
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
        return `/team/${slug}.jpg`;
    };
    const initialSrc = imageUrl ?? localNameToPath(name);
    return (
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
            <img
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                src={initialSrc}
                alt={name}
                onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    if (img.src !== fallbackUrl) {
                        img.src = fallbackUrl;
                    }
                }}
            />
            <h3 className="text-lg font-bold text-slate-900">{name}</h3>
            <p className="text-[#2AC1FF] font-medium">{role}</p>
        </div>
    );
};

const Team: React.FC = () => {
    return (
        <section id="team" className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                        Meet Our Team
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                        Our passionate team of 27 volunteers from around the globe is the heart of United Youngs.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard
                            key={index}
                            name={member.name}
                            role={member.role}
                            gender={member.gender}
                            index={index}
                            imageUrl={(member.role === 'Founder & President' || member.name.toLowerCase().startsWith('sardorbek')) ? '/Sardorbek.jpg' : undefined}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
