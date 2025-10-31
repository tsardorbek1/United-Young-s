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
                        <ul className="space-y-3">
                            <li>
                                <a href="mailto:unitedyoungs2025@gmail.com" className="group flex items-center gap-3 text-slate-200 hover:text-white transition-all bg-white/5 hover:bg-white/10 px-4 py-3 rounded-xl shadow-sm hover:shadow-lg ring-1 ring-white/10 hover:ring-[#2AC1FF]/40 transform hover:scale-[1.02]">
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 8.5l8 6 8-6V18H4V8.5z"/>
                                    </svg>
                                    <span className="text-base font-medium">unitedyoungs2025@gmail.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/sardorturdimurodov79b417365?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-slate-200 hover:text-white transition-all bg-white/5 hover:bg-white/10 px-4 py-3 rounded-xl shadow-sm hover:shadow-lg ring-1 ring-white/10 hover:ring-[#2AC1FF]/40 transform hover:scale-[1.02]">
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M19 3A2.94 2.94 0 0122 6v12a2.94 2.94 0 01-3 3H5a2.94 2.94 0 01-3-3V6a2.94 2.94 0 013-3zM8.34 18.34V9.9H6V18.34zM7.17 8.79A1.84 1.84 0 108.99 7a1.84 1.84 0 00-1.82 1.79zM18 18.34v-4.61c0-2.46-1.31-3.61-3.05-3.61a2.64 2.64 0 00-2.38 1.31h-.03V9.9H10v8.44h2.54v-4.2c0-1.11.21-2.18 1.58-2.18s1.41 1.24 1.41 2.25v4.13z"/>
                                    </svg>
                                    <span className="text-base font-medium">LinkedIn</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/unitedyoungs" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-slate-200 hover:text-white transition-all bg-white/5 hover:bg-white/10 px-4 py-3 rounded-xl shadow-sm hover:shadow-lg ring-1 ring-white/10 hover:ring-[#2AC1FF]/40 transform hover:scale-[1.02]">
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M9.04 15.13l-.37 5.28c.53 0 .76-.23 1.04-.5l2.5-2.4 5.18 3.79c.95.53 1.63.25 1.89-.88l3.43-16.09h.01c.3-1.43-.52-1.99-1.44-1.64L1.6 9.86c-1.39.54-1.38 1.31-.24 1.66l5.08 1.58L18.86 6.5c.66-.43 1.27-.19.77.23z"/>
                                    </svg>
                                    <span className="text-base font-medium">Telegram</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/reel/DMkYfpwIKqV/?igsh=MWRwcmhuNnpub20xYQ==" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-slate-200 hover:text-white transition-all bg-white/5 hover:bg-white/10 px-4 py-3 rounded-xl shadow-sm hover:shadow-lg ring-1 ring-white/10 hover:ring-[#2AC1FF]/40 transform hover:scale-[1.02]">
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm5 3.5A5.5 5.5 0 1112 18.5 5.5 5.5 0 0112 7.5zm0 2A3.5 3.5 0 1015.5 13 3.5 3.5 0 0012 9.5zM18 6.75a1.25 1.25 0 11-1.25 1.25A1.25 1.25 0 0118 6.75z"/>
                                    </svg>
                                    <span className="text-base font-medium">Instagram</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com/UnitedYoungs?s=09" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-slate-200 hover:text-white transition-all bg-white/5 hover:bg-white/10 px-4 py-3 rounded-xl shadow-sm hover:shadow-lg ring-1 ring-white/10 hover:ring-[#2AC1FF]/40 transform hover:scale-[1.02]">
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M18.244 2H21l-6.56 7.5L22 22h-6.778l-4.4-5.73L5.6 22H3l7.02-8.02L2 2h6.889l4.042 5.384L18.244 2zm-1.2 18h1.86L8.04 4H6.18z"/>
                                    </svg>
                                    <span className="text-base font-medium">Twitter/X</span>
                                </a>
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