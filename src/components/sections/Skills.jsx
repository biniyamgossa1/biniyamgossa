import React from 'react';

const Skills = () => {
  const categories = [
    {
      title: "Frontend Development",
      color: "purple",
      skills: ["React.js", "JavaScript", "Tailwind CSS", "HTML5/CSS3", "Vite"]
    },
    {
      title: "IT & Systems",
      color: "blue",
      skills: ["Networking", "System Security", "Hardware Fix", "Windows OS", "Auditing"]
    },
    {
      title: "Workflow Tools",
      color: "emerald",
      skills: ["Git/GitHub", "Vercel",  "VS Code", "Microsoft Office","Blender3D","..."]
    }
  ];

  return (
    <section id="skills" className="space-y-1 md:space-y-6">
      <div className="flex items-center gap-3">
        <h2 className="text-xs md:text-xl font-black uppercase tracking-[0.2em] italic text-emerald-500">
          02. Technical Skills
        </h2>
        <div className="h-[1px] bg-white/10 flex-grow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
        {categories.map((cat) => (
          <div key={cat.title} className="glass-card p-4 md:p-6 relative overflow-hidden group">
            {/* Background Glow */}
            <div className={`absolute -top-10 -right-10 w-20 h-20 bg-${cat.color}-500 blur-2xl rounded-full`} />
            
            <h3 className={`text-[10px] md:text-xs font-mono font-bold uppercase mb-4 text-${cat.color}-400 tracking-widest`}>
              {cat.title}
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span 
                  key={skill} 
                  className={`text-[9px] md:text-xs px-2.5 py-1 rounded-md bg-${cat.color}-500/5 border border-${cat.color}-500/10 text-black hover:border-${cat.color}-500/40 hover:text-white transition-all`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;