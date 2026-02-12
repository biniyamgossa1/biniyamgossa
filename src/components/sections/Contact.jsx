import React from 'react';

const Contact = () => {
  const socials = [
     { 
      name: 'LinkedIn', 
      link: 'https://t.me/yourusername', 
      img: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
      shadow: 'shadow-md shadow-blue-500',       // always visible on mobile
      hoverShadow: 'hover:shadow-sky-500/40',          // extra glow on hover (desktop)
      border: 'hover:border-sky-500/50'
    },
     { 
      name: 'Email', 
      link: 'mailto:biniyam.gossa@gmail.com', 
      img: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg',
      shadow: '[box-shadow:-15px_10px_30px_-10px_rgba(59,130,246,0.5),0px_10px_30px_-10px_rgba(239,68,68,0.5),15px_10px_30px_-10px_rgba(234,179,8,0.5),30px_10px_30px_-10px_rgba(34,197,94,0.5)]',      // always visible on mobile
      hoverShadow: 'hover:shadow-sky-500/40',          // extra glow on hover (desktop)
      border: 'hover:border-sky-500/50'
    },
    { 
      name: 'Telegram', 
      link: 'https://t.me/yourusername', 
      img: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg',
      shadow: 'shadow-md shadow-sky-500',       // always visible on mobile
      hoverShadow: 'hover:shadow-blue-500',          // extra glow on hover (desktop)
      border: 'hover:border-sky-500/50'
    },
    { 
      name: 'Instagram', 
      link: 'https://instagram.com/yourusername', 
      img: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
      shadow: 'shadow-md shadow-red-500',
      hoverShadow: 'hover:shadow-pink-500/40',
      border: 'hover:border-pink-500/50'
    },
    { 
      name: 'TikTok', 
      link: 'https://facebook.com/yourusername', 
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Ionicons_logo-tiktok.svg',
      shadow: 'shadow-md shadow-black',
      hoverShadow: 'hover:shadow-blue-600/40',
      border: 'hover:border-blue-600/50'
    },
    { 
      name: 'Facebook', 
      link: 'https://facebook.com/yourusername', 
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png',
      shadow: 'shadow-md shadow-sky-800',
      hoverShadow: 'hover:shadow-blue-600/40',
      border: 'hover:border-blue-600/50'
    },
  ];

  return (
    <section id="contact" className="py-8 px-4 md:px-8 scroll-mt-32 space-y-6 grid col-span-2">
      {/* Section Header */}
      <div className="flex items-center gap-3">
        <h2 className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400 italic">
          04. Connect
        </h2>
        <div className="flex-grow h-px bg-gray-200 dark:bg-white/10"></div>
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 md:gap-6">
       

        {/* Socials */}
        {socials.map((social) => (
          <a 
            key={social.name} 
            href={social.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex items-center gap-3 p-4 bg-white dark:bg-white/5 rounded-lg transition-shadow
                       ${social.shadow} ${social.hoverShadow} ${social.border} active:scale-95`}
          >
            <img 
              src={social.img} 
              alt={social.name} 
              className="w-10 h-10 object-contain"
            />
            <p className="text-gray-900 dark:text-white font-bold text-sm">{social.name}</p>
          </a>
        ))}
      </div>

      {/* Footer Note */}
      <p className="mt-6 text-xs text-gray-400 dark:text-gray-500 text-center">
        © {new Date().getFullYear()} Biniyam Gossa. All rights reserved.
      </p>
    </section>
  );
};

export default Contact;
