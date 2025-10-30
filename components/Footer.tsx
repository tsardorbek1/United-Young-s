import React from 'react';
import Logo from './Logo';
import { navLinks } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="bg-[#0F172A] text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="md:col-span-2">
                        <Logo textColor="text-white" />
                        <p className="mt-4 text-slate-400 max-w-md">
                            A global, youth-led education initiative founded in 2025. By the youth, for the youth.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {navLinks.map(link => (
                                <li key={link.href}>
                                    <a href={link.href} className="text-slate-400 hover:text-white transition-colors">{link.label}</a>
                                </li>
                            ))}
                             <li>
                                <a href="#join" className="text-slate-400 hover:text-white transition-colors">Join Us</a>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="font-bold text-lg mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="mailto:unitedyoungs.global@gmail.com" className="text-slate-400 hover:text-white transition-colors">unitedyoungs.global@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-slate-700 pt-8 text-center text-slate-500 text-sm">
                    <p>&copy; 2025 United Youngs. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;