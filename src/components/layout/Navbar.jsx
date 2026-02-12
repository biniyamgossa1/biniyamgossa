import React from 'react';
import { Home, User, Zap, Briefcase, MessageSquare, FileText } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: 'home', icon: <Home size={20} /> },
    { name: 'About', href: 'about', icon: <User size={20} /> },
    { name: 'Skills', href: 'skills', icon: <Zap size={20} /> },
    { name: 'Works', href: 'projects', icon: <Briefcase size={20} /> },
    { name: 'Contact', href: 'contact', icon: <MessageSquare size={20} /> },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Brand Logo - mix-blend-difference makes it flip color based on background */}
      <div className="absolute top-3 left-6 z-[100] mix-blend-difference">
        <span className="text-xl font-black tracking-tighter text-white uppercase">
          B<span className="text-purple-500">-PRIME</span>
        </span>
      </div>

      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:right-8 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 z-[100]">
        {/* Dock: Black in Day, White in Night */}
        <div className="flex md:flex-col items-center gap-2 p-2 bg-gray-900 dark:bg-white backdrop-blur-2xl rounded-3xl border border-white/10 dark:border-black/10 shadow-2xl transition-colors duration-500">
          
          <div className="p-2 border-r md:border-r-0 md:border-b border-white/10 dark:border-black/10">
            <ThemeToggle />
          </div>

          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => scrollToSection(link.href)}
              className="group relative w-12 h-12 flex items-center justify-center rounded-2xl hover:bg-purple-600 transition-all duration-300"
            >
              {/* Icons: White in Day-Dock, Black in Night-Dock */}
              <div className="text-white dark:text-black group-hover:text-white transition-colors">
                {link.icon}
              </div>
              
              <span className="hidden md:block absolute right-16 px-3 py-1 rounded-lg bg-gray-900 text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest pointer-events-none">
                {link.name}
              </span>
            </button>
          ))}

          <button className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-lg active:scale-90 transition-all">
            <FileText size={20} />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;