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
                                <a href="mailto:unitedyoungs2025@gmail.com" className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors">
                                    <span className="inline-block h-2 w-2 rounded-full bg-[#2AC1FF]"></span>
                                    <span>unitedyoungs2025@gmail.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/sardorturdimurodov79b417365?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors">
                                    <span>🔗</span>
                                    <span>LinkedIn</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/unitedyoungs" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors">
                                    <span>💬</span>
                                    <span>Telegram</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/reel/DMkYfpwIKqV/?igsh=MWRwcmhuNnpub20xYQ==" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors">
                                    <span>📸</span>
                                    <span>Instagram</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com/UnitedYoungs?s=09" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors">
                                    <span>𝕏</span>
                                    <span>Twitter/X</span>
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