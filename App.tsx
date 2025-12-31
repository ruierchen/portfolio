
import React, { useState } from 'react';
import { PROJECTS, EXPERIENCES, SKILLS, BLOG_POSTS } from './constants';
import SnakeGame from './components/SnakeGame';

const ProjectCard = ({ project }: { project: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsExpanded(true)}
        className="glass-card rounded-2xl overflow-hidden group cursor-pointer hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-1"
      >
        <div className="relative h-56 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-500" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          <div className="absolute bottom-4 left-5">
            <span className="bg-cyan-500 text-slate-950 text-xs tech-font px-2 py-1 rounded font-bold uppercase mb-2 block w-fit">
              {project.date}
            </span>
            <h3 className="tech-font text-xl text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
          </div>
        </div>
        <div className="p-5 border-t border-cyan-500/10">
          <p className="text-slate-300 text-base line-clamp-2 mb-4 leading-relaxed">{project.content}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag: string) => (
              <span key={tag} className="text-xs mono-font text-cyan-400/80 border border-cyan-400/20 px-2 py-0.5 rounded">#{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in zoom-in duration-300">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={() => setIsExpanded(false)} />
          <div className="relative glass-card w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border-cyan-500/40 p-8 md:p-12">
            <button 
              onClick={() => setIsExpanded(false)}
              className="absolute top-6 right-8 text-slate-400 hover:text-white tech-font text-2xl"
            >
              [X]
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl">
                <img src={project.image} className="w-full h-full object-cover" alt={project.title} />
              </div>
              <div>
                <span className="text-cyan-400 tech-font text-sm tracking-[0.2em] mb-3 block">PROJECT_MANIFEST</span>
                <h2 className="tech-font text-4xl text-white mb-6">{project.title}</h2>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech: string) => (
                    <span key={tech} className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs mono-font px-3 py-1.5 rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="space-y-8">
                  <div>
                    <h4 className="tech-font text-sm text-slate-500 uppercase mb-3">Analysis</h4>
                    <p className="text-slate-200 text-lg leading-relaxed">{project.content}</p>
                  </div>
                  <div>
                    <h4 className="tech-font text-sm text-slate-500 uppercase mb-3">Key Operations</h4>
                    <ul className="space-y-3">
                      {project.contributions.map((c: string, i: number) => (
                        <li key={i} className="text-slate-300 text-base flex gap-3">
                          <span className="text-cyan-500 font-bold">{'>>'}</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cv' | 'projects' | 'blog' | 'games'>('cv');

  return (
    <div className="min-h-screen relative selection:bg-cyan-500/30">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] bg-cyan-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[150px]" />
      </div>

      {/* Top Sticky Navigation */}
      <header className="sticky top-0 z-50 glass-card border-b border-cyan-500/20 py-4 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border-2 border-cyan-400 rotate-45 flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.3)]">
              <span className="tech-font text-xl text-cyan-400 -rotate-45">R</span>
            </div>
            <h1 className="tech-font text-xl tracking-tighter text-white neon-glow hidden sm:block">RUIER_LINK</h1>
          </div>
          
          <nav className="flex gap-2">
            {[
              { id: 'cv', label: 'IDENTITY' },
              { id: 'projects', label: 'OPERATIONS' },
              { id: 'blog', label: 'BLOGS' },
              { id: 'games', label: 'RECREATION' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 sm:px-6 py-2 tech-font text-[10px] sm:text-xs tracking-widest transition-all rounded-lg border ${
                  activeTab === tab.id 
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)] font-bold' 
                  : 'text-slate-400 border-transparent hover:text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Profile Header Block */}
      <section className="max-w-6xl mx-auto px-8 pt-12 pb-8 flex flex-col lg:flex-row items-center gap-10">
        <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-3xl overflow-hidden border-2 border-cyan-500/30 bg-slate-900 group shadow-[0_0_30px_rgba(34,211,238,0.15)] shrink-0">
          {/* Avatar / Profile Image Placeholder */}
          <img 
            src="https://img.freepik.com/free-vector/cute-boy-wearing-suit-cartoon-character_1308-164478.jpg"
            alt="Profile Avatar" 
            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          />
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h1 className="tech-font text-5xl md:text-6xl text-white mb-2 tracking-tighter neon-glow">RUIER_CHEN</h1>
          <p className="mono-font text-xl text-cyan-400 tracking-[0.2em] uppercase font-bold mb-8">Waterloo CS // Data Engineer // AI Researcher</p>
          
          {/* Relocated Metrics Panel */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 glass-card rounded-2xl border-cyan-500/10 max-w-3xl mx-auto lg:mx-0">
            <div className="flex flex-col gap-1 border-r border-slate-800 last:border-0">
              <span className="text-[10px] tech-font text-slate-500 uppercase tracking-widest">LOCATION</span>
              <span className="text-sm text-slate-200 font-bold uppercase tracking-tight">WATERLOO_CA</span>
            </div>
            <div className="flex flex-col gap-1 border-r border-slate-800 last:border-0 hidden sm:flex">
              <span className="text-[10px] tech-font text-slate-500 uppercase tracking-widest">ACADEMIC_GPA</span>
              <span className="text-sm text-slate-200 font-bold uppercase tracking-tight">3.7 / 4.0</span>
            </div>
            <div className="flex flex-col gap-1 border-r border-slate-800 last:border-0">
              <span className="text-[10px] tech-font text-slate-500 uppercase tracking-widest">STATUS</span>
              <span className="text-sm text-emerald-400 animate-pulse font-bold">ACTIVE_RECRUITMENT</span>
            </div>
            <div className="flex flex-col gap-1 border-r border-slate-800 last:border-0">
              <span className="text-[10px] tech-font text-slate-500 uppercase tracking-widest">PHONE_NUMBER</span>
              <span className="text-sm text-slate-200 font-bold">N/A</span>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-8 pb-24 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-8">
            {activeTab === 'cv' && (
              <div className="space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-500">
                <section className="glass-card p-10 rounded-3xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                    <span className="tech-font text-9xl">01</span>
                  </div>
                  <h2 className="tech-font text-2xl text-cyan-400 mb-10 border-b border-cyan-500/20 pb-5">CORE_EXPERIENCE</h2>
                  <div className="space-y-12">
                    {EXPERIENCES.map((exp, idx) => (
                      <div key={idx} className="relative pl-10 border-l-2 border-cyan-500/20 group hover:border-cyan-500/50 transition-colors">
                        <div className="absolute top-0 left-[-9px] w-4 h-4 bg-slate-950 border-2 border-cyan-400 rounded-full group-hover:scale-125 transition-transform shadow-[0_0_10px_cyan]" />
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                          <h3 className="tech-font text-xl text-white group-hover:text-cyan-400 transition-colors">{exp.role}</h3>
                          <span className="mono-font text-[10px] text-cyan-500 bg-cyan-500/5 border border-cyan-500/20 px-3 py-1 rounded-full uppercase">{exp.period}</span>
                        </div>
                        <p className="text-cyan-400 mono-font text-base mb-5 font-medium">@ {exp.company}</p>
                        <ul className="space-y-3">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-slate-300 text-lg leading-relaxed flex gap-3">
                              <span className="text-cyan-500 opacity-60">_</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="glass-card p-8 rounded-2xl">
                    <h3 className="tech-font text-sm text-cyan-400 mb-8 uppercase tracking-widest border-b border-cyan-500/10 pb-3">CAPABILITIES</h3>
                    <div className="space-y-6">
                      {SKILLS.map(s => (
                        <div key={s.name} className="space-y-2">
                          <div className="flex justify-between text-xs mono-font text-slate-300">
                            <span>{s.name}</span>
                            <span className="text-cyan-500">{s.level}%</span>
                          </div>
                          <div className="h-1 bg-slate-900 rounded-full overflow-hidden">
                            <div className="h-full bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.6)]" style={{ width: `${s.level}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="glass-card p-8 rounded-2xl">
                    <h3 className="tech-font text-sm text-cyan-400 mb-8 uppercase tracking-widest border-b border-cyan-500/10 pb-3">ACCOLADES</h3>
                    <div className="space-y-6">
                      {[
                        { title: "Euclid Math Contest", detail: "TOP 25% GLOBALLY" },
                        { title: "COMC Gold Award", detail: "DISTRICT BEST" },
                        { title: "President's Scholarship", detail: "UWaterloo Distinction" }
                      ].map((item, i) => (
                        <div key={i} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                          <p className="text-white text-base tech-font mb-1">{item.title}</p>
                          <p className="text-cyan-500/70 text-xs mono-font uppercase">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-6 duration-500">
                {PROJECTS.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            )}

            {activeTab === 'blog' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                <div className="flex items-center gap-6 mb-8 glass-card p-8 rounded-3xl border-cyan-500/30 relative overflow-hidden">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border border-slate-800 shrink-0 bg-slate-900">
                    <img 
                      src="https://img.freepik.com/free-vector/cartoon-boy-reading-book-isolated_1308-164479.jpg"
                      alt="Blog Mascot" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="tech-font text-2xl text-white mb-2">NEURAL_DEBUGLOG</h2>
                    <p className="text-slate-500 text-sm mono-font italic tracking-wider uppercase">// Syncing status stream from github.cloud.local</p>
                  </div>
                  <div className="absolute top-[-20%] right-[-5%] w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl"></div>
                </div>
                
                <div className="space-y-6">
                  {BLOG_POSTS.map(post => (
                    <div key={post.id} className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all border-l-4 border-l-cyan-500/50">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-bold text-cyan-500 bg-cyan-500/10 px-3 py-1 rounded-lg border border-cyan-500/20 uppercase tracking-widest">{post.tag}</span>
                        <span className="mono-font text-xs text-slate-500 uppercase">{post.date}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-200 mb-3">{post.title}</h3>
                      <p className="text-slate-400 text-lg leading-relaxed">{post.summary}</p>
                      <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center gap-3 text-[10px] mono-font text-slate-600">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981]"></span>
                          SIGNATURE_VERIFIED
                        </div>
                        {post.githubLink && (
                          <a href={post.githubLink} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-white transition-colors text-xs mono-font flex items-center gap-2">
                             VIEW_SOURCE_UPLINK {'->'}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'games' && (
              <div className="flex flex-col items-center animate-in zoom-in duration-500 py-10">
                <div className="scale-110 md:scale-125">
                  <SnakeGame />
                </div>
                <div className="mt-16 glass-card p-8 rounded-2xl text-center max-w-md">
                  <p className="mono-font text-xs text-slate-400 leading-relaxed italic">
                    // NEURAL_OVERRIDE_INITIATED. Recreation module active to prevent cognitive fatigue.
                  </p>
                </div>
              </div>
            )}
          </div>

          <aside className="lg:col-span-4 space-y-8">
            <div className="glass-card rounded-2xl p-8 border-cyan-400/30 relative">
              <h3 className="tech-font text-xs text-slate-500 mb-8 tracking-widest uppercase">NETWORK_UPLINKS</h3>
              <div className="space-y-6 mono-font text-sm">
                <div className="flex flex-col gap-1">
                  <span className="text-slate-500 text-[10px] uppercase">GITHUB_REPOSITORY</span>
                  <a href="https://github.com/ruier-c" className="text-cyan-400 hover:text-white transition-colors">github.com/ruier-c</a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-slate-500 text-[10px] uppercase">SOCIAL_UPLINK</span>
                  <a href="#" className="text-cyan-400 hover:text-white transition-colors">linkedin.com/in/ruier-chen</a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-slate-500 text-[10px] uppercase">DIRECT_COMMS</span>
                  <span className="text-slate-200">r24chen@uwaterloo.ca</span>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-cyan-500/10">
                <p className="text-xs text-slate-500 mono-font leading-relaxed">
                  OBJECTIVE: Exploring high-impact roles in Data Infrastructure and Distributed Systems for 2026 sessions.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 bg-gradient-to-br from-slate-900/40 to-cyan-900/5 border-cyan-500/10">
              <h3 className="tech-font text-xs text-slate-500 mb-6 tracking-widest uppercase">CORE_INTERESTS</h3>
              <div className="flex flex-wrap gap-2">
                {["Game Dev", "Escape Rooms", "Badminton", "Musicals", "Digital Art"].map(h => (
                  <span key={h} className="bg-slate-950/80 border border-cyan-500/20 text-slate-400 text-[10px] px-3 py-1.5 rounded-full mono-font hover:border-cyan-400 hover:text-cyan-400 transition-colors cursor-default">
                    {h}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 text-center opacity-30">
               <p className="mono-font text-[10px] tracking-[0.5em] text-cyan-500 uppercase">System Integrity: 100% // BUILD_v2.0.1</p>
            </div>
          </aside>

        </div>
      </main>

      {/* Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      
      <footer className="py-12 text-center border-t border-cyan-900/20 bg-slate-950/40">
        <p className="mono-font text-[10px] text-slate-600 tracking-[0.8em] uppercase">Ruier Chen // Systems Overlord // 2025</p>
      </footer>
    </div>
  );
};

export default App;
