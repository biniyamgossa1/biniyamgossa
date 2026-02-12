import React, { useState } from 'react';
import legal from "../../assets/certificates/legal.jpg"
import udacity from "../../assets/certificates/udacity.png"

const About = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const certificates = [
    {
      name: "Legal",
      sub: "Hope Enterprise University College",
      color: "border-orange-500/20 text-orange-500",
      img: legal,
      btn: "text-white"
    },
    {
      name: "Udacity",
      sub: "Programming Fundamentals",
      color: "border-cyan-500/20 text-cyan-400",
      img: udacity,
      btn: "text-white"
    }
  ];

  return (
    <section id="about" className="-mt-16 md:mt-1 space-y-12">

      {/* ================= 01. ABOUT SECTION ================= */}
      <div className="space-y-1">
        <div className="flex items-center gap-3">
          <h2 className="text-xs md:text-xl font-black uppercase tracking-[0.2em] italic text-purple-500">
            01. About
          </h2>
          <div className="h-[1px] bg-black/50 flex-grow" />
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-5">
          {/* Main Bio Card */}
          <div className="glass-card col-span-2 md:col-span-1 p-6 md:p-8 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-green-500/40 rounded-full blur-3xl group-hover:bg-green-500/20 transition-all duration-500" />

            <div className="relative space-y-4">
              <div className="space-y-1">
                <h3 className="text-lg md:text-2xl font-black text-gray-900 text-black uppercase tracking-tighter italic">
                  BSc Computer Science <span className="text-green-500">Graduate</span>
                </h3>
                <div className="h-1 w-12 bg-green-500 rounded-full" />
              </div>

              <p className="text-[13px] md:text-base text-black text-black leading-relaxed text-pretty">
                Freshly graduated in <span className=" text-red-500 font-bold bg-green-500/30 px-1 rounded">February 2025</span>, 
                I specialize in engineering <span className="text-gray-900  font-semibold">high-performance web interfaces</span> and 
                securing robust IT infrastructure. 
              </p>

              <p className="text-[13px] md:text-base text-black  leading-relaxed">
                I am driven by a passion for solving complex problems and 
                <span className="text-green-600 dark:text-green-400 font-medium"> developing applications with real-world impact</span>. 
                Eager to contribute technical expertise to innovative teams and push the boundaries of modern technology.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-green-600 dark:text-green-400 bg-green-500/5 border border-green-500/20 px-2 py-1 rounded">
                  Security First
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-500/5 border border-blue-500/20 px-2 py-1 rounded">
                  UX Focused
                </span>
              </div>
            </div>
          </div>

          {/* Info Stats Cards */}
          <div className="grid grid-cols-2 col-span-2 md:col-span-1 gap-3">
            <div className="glass-card p-4 flex flex-col items-center justify-center text-center shadow-md rounded-sm border-red-500/10">
              <span className="text-red-600 font-black text-lg md:text-2xl uppercase">Heuc</span>
              <span className="text-[8px] uppercase text-gray-500 tracking-widest mt-1">University</span>
            </div>
            <div className="glass-card p-4 flex flex-col items-center justify-center text-center shadow-md rounded-sm border-purple-500/20">
              <span className="text-purple-500 font-black text-lg md:text-2xl lowercase">Feb/25</span>
              <span className="text-[8px] uppercase text-gray-500 tracking-widest mt-1">Graduate</span>
            </div>
            <div className="glass-card p-4 flex flex-col items-center justify-center text-center shadow-md rounded-sm border-blue-500/20">
              <span className="text-blue-400 font-black text-lg md:text-2xl uppercase">Adis</span>
              <span className="text-[8px] uppercase text-gray-500 tracking-widest mt-1">Location</span>
            </div>
            <div className="glass-card p-4 flex flex-col items-center justify-center text-center shadow-md rounded-sm border-emerald-500/20">
              <span className="text-emerald-500 font-black text-lg md:text-2xl uppercase">Hire</span>
              <span className="text-[8px] uppercase text-gray-500 tracking-widest mt-1">Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 02. CERTIFICATES SECTION ================= */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h2 className="text-xs md:text-xl font-black uppercase tracking-[0.2em] italic text-blue-500">
            02. Certificates
          </h2>
          <div className="h-[1px] bg-white/10 flex-grow" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-5">
          {certificates.map((cert, idx) => (
            <div key={idx} className={`glass-card p-4 flex flex-col items-center justify-center text-center shadow-md rounded-sm border ${cert.color} relative group hover:border-white/20 transition-all`}>
              <span className="font-black text-lg md:text-2xl uppercase leading-none transition-transform group-hover:scale-105 duration-300">{cert.name}</span>
              <span className="text-[8px] uppercase text-gray-500 tracking-widest mt-1 mb-3">{cert.sub}</span>

              <button
                onClick={() => setSelectedImg(cert.img)}
                className={`text-[10px] font-black bg-blue-500 uppercase tracking-[0.2em] px-4 py-1.5 rounded-sm outline-none hover:bg-blue-500 transition-all shadow-lg active:scale-95 ${cert.btn}`}
              >
                Show
              </button>
            </div>
          ))}

          <div className="hidden sm:flex glass-card p-4 border-dashed border-white/5 items-center justify-center text-gray-700 text-[10px] uppercase font-bold italic">
            More Cert...
          </div>
          <div className="hidden sm:flex glass-card p-4 border-dashed border-white/5 items-center justify-center text-gray-700 text-[10px] uppercase font-bold italic">
            More Cert...
          </div>
        </div>
      </div>

      {/* ================= MODAL OVERLAY ================= */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <div 
            className="relative w-full max-w-4xl flex flex-col items-center animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Minimalist Premium Header */}
            <div className="flex justify-between items-center w-full mb-4 px-2">
              <div className="flex flex-col">
                <span className="text-blue-500 font-black text-[10px] uppercase tracking-[0.3em]">Verification</span>
                <div className="h-[1px] w-8 bg-blue-500 mt-1" />
              </div>
              
              <button 
                onClick={() => setSelectedImg(null)}
                className="flex items-center gap-3 group transition-all"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">Close</span>
                <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 group-hover:rotate-90 transition-all duration-500">
                  <span className="text-white text-xs font-light">✕</span>
                </div>
              </button>
            </div>

            {/* Image Container */}
            <div className="relative glass-card p-1 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
              <img
                src={selectedImg}
                alt="Certificate Preview"
                className="max-w-full max-h-[75vh] rounded-sm object-contain"
              />
            </div>
            
            <p className="mt-6 text-[8px] text-white/20 uppercase tracking-[0.5em] font-mono">
              Click backdrop to return
            </p>
          </div>
        </div>
      )}

    </section>
  );
};

export default About;