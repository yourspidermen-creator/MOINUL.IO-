import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Facebook,
  Instagram,
  MessageSquare,
  Mail, 
  ExternalLink, 
  Code2, 
  Palette, 
  Terminal, 
  Cpu,
  ChevronRight,
  Menu,
  X,
  ArrowUpRight,
  Zap,
  Info
} from 'lucide-react';

const PROJECTS = [
  {
    id: 0,
    title: "SPIDER GUY",
    category: "Personalized AI",
    description: "My biggest build yet. A personalized AI ecosystem designed for seamless interaction and intelligent automation. Personalization in Maintenance.",
    tags: ["AI", "LLM", "Python", "React"],
    link: "https://spider-guy-ai.vercel.app/",
    color: "bg-purple-50",
    isBiggest: true
  },
  {
    id: 1,
    title: "Ramadan Time",
    category: "Web Utility",
    description: "A comprehensive utility for tracking Ramadan timings. Working perfectly.",
    tags: ["React", "Vite", "Tailwind"],
    link: "https://ramadantime-ten.vercel.app/",
    color: "bg-emerald-50"
  },
  {
    id: 2,
    title: "Quick SavePro",
    category: "API Tool",
    description: "A high-performance media downloader utilizing advanced API integrations. Working fine.",
    tags: ["API", "React", "Next.js"],
    link: "https://quicksavepro.vercel.app/",
    color: "bg-blue-50"
  },
  {
    id: 3,
    title: "Cumilla Iftar Dibe",
    category: "Community Platform",
    description: "A platform for coordinating Iftar distribution. Note: Currently experiencing Supabase connection issues.",
    tags: ["Supabase", "React", "Database"],
    link: "https://cumillaiftardibe.vercel.app/",
    color: "bg-orange-50"
  }
];

const SKILLS = [
  { name: "Frontend", icon: <Code2 className="w-5 h-5" />, items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { name: "Backend", icon: <Terminal className="w-5 h-5" />, items: ["Node.js", "Supabase", "PostgreSQL", "Neon"] },
  { name: "Tools", icon: <Cpu className="w-5 h-5" />, items: ["GitHub", "GitLab", "Render", "Vercel"] }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const triggerSpidyMessage = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 5000);
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-zinc-200/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter"
          >
            MOINUL<span className="text-zinc-400">.DEV</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Work', 'Skills', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-zinc-600 hover:text-black transition-colors"
              >
                {item}
              </a>
            ))}
            <button 
              onClick={triggerSpidyMessage}
              className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all"
            >
              Get in touch
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Spidy Message Toast */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-10 left-1/2 z-[100] w-[90%] max-w-md"
          >
            <div className="bg-black text-white p-6 rounded-2xl shadow-2xl border border-zinc-800 flex items-start gap-4">
              <div className="bg-zinc-800 p-2 rounded-lg">
                <Zap className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="font-medium leading-tight">
                  Hold on, I'm working to build my own personalized AI called <span className="text-purple-400 font-bold underline decoration-2 underline-offset-4">SPIDER GUY</span>.
                </p>
                <p className="text-xs text-zinc-500 mt-2">This will be my biggest build yet!</p>
              </div>
              <button onClick={() => setShowMessage(false)} className="ml-auto text-zinc-500 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {['Work', 'Skills', 'About', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-bold tracking-tight"
                >
                  {item}
                </a>
              ))}
              <button 
                onClick={(e) => {
                  setIsMenuOpen(false);
                  triggerSpidyMessage(e);
                }}
                className="bg-black text-white px-8 py-4 rounded-full font-medium text-xl mt-4"
              >
                Get in touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-bold uppercase tracking-widest mb-6">
                Open for new ideas
              </span>
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-bold leading-[0.9] mb-8">
                Moinul <br />
                <span className="italic text-zinc-400">Islam</span> <br />
                Portfolio.
              </h1>
              <p className="text-xl text-zinc-600 max-w-2xl mb-10 leading-relaxed">
                I develop these websites as a hobby. I build functional prototypes and 
                community-driven applications with a focus on real-world impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-black text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-zinc-800 transition-all group"
                >
                  View My Work
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center gap-4 px-4">
                  <a href="https://www.facebook.com/yourspidermen" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-black transition-colors"><Facebook /></a>
                  <a href="https://www.instagram.com/yourspidermenn/" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-black transition-colors"><Instagram /></a>
                  <a href="https://wa.me/8801805530585" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-black transition-colors"><MessageSquare /></a>
                  <a href="mailto:yourspidermen@gmail.com" className="p-2 text-zinc-400 hover:text-black transition-colors"><Mail /></a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-24 bg-white border-y border-zinc-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">Live Prototypes</h2>
                <h3 className="text-4xl md:text-5xl font-serif font-bold">Recent Projects</h3>
              </div>
              <p className="text-zinc-500 max-w-sm">
                Explore my latest work, from community tools to high-performance API integrations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project, idx) => (
                <motion.a
                  key={project.id}
                  href={project.link}
                  target={project.link === '#' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  onClick={project.link === '#' ? triggerSpidyMessage : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`group cursor-pointer block p-1 rounded-[2.5rem] transition-all ${project.isBiggest ? 'ring-2 ring-purple-500/20 bg-purple-50/30 shadow-xl shadow-purple-500/5' : ''}`}
                >
                  <div className={`relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 ${project.color} flex items-center justify-center`}>
                    <div className={project.isBiggest ? 'text-purple-300' : 'text-zinc-300'}>
                      {project.isBiggest ? <Zap className="w-16 h-16" /> : <Code2 className="w-12 h-12" />}
                    </div>
                    {project.isBiggest && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Biggest Build</span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white/90 backdrop-blur p-2 rounded-full shadow-sm">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  <div className="px-4 pb-6 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-bold uppercase tracking-wider ${project.isBiggest ? 'text-purple-500' : 'text-zinc-400'}`}>{project.category}</span>
                    </div>
                    <h4 className="text-xl font-bold group-hover:text-zinc-600 transition-colors">{project.title}</h4>
                    <p className="text-zinc-500 text-sm line-clamp-2">
                      {project.description.split(/Coming Soon|Maintenance/).map((part, i, arr) => (
                        <React.Fragment key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span className="text-purple-500 font-bold underline decoration-2 underline-offset-2">
                              {project.description.includes('Coming Soon') ? 'Coming Soon' : 'Maintenance'}
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map(tag => (
                        <span key={tag} className={`text-[10px] font-medium px-2 py-1 rounded-md ${project.isBiggest ? 'bg-purple-100 text-purple-600' : 'bg-zinc-100 text-zinc-600'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">Expertise</h2>
              <h3 className="text-4xl font-serif font-bold mb-6">My Stack</h3>
              <p className="text-zinc-600 leading-relaxed">
                I build prototypes and community tools. I focus on making things that actually work and help people.
              </p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
              {SKILLS.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.5, 
                    delay: idx * 0.1,
                    ease: "easeOut"
                  }}
                  className="p-8 rounded-3xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center mb-6 text-zinc-900">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-4">{skill.name}</h4>
                  <ul className="space-y-2">
                    {skill.items.map(item => (
                      <li key={item} className="text-zinc-500 text-sm flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-zinc-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-black text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <a 
                href="mailto:yourspidermen@gmail.com" 
                className="text-2xl sm:text-4xl md:text-6xl font-serif font-bold hover:text-zinc-400 transition-colors break-all sm:break-words block mb-12 px-4"
              >
                yourspidermen@gmail.com
              </a>
              
              <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                <div className="text-left">
                  <p className="text-zinc-500 text-xs uppercase font-bold tracking-widest mb-2">Social</p>
                  <div className="flex gap-6">
                    <a href="https://www.facebook.com/yourspidermen" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">Facebook</a>
                    <a href="https://www.instagram.com/yourspidermenn/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">Instagram</a>
                    <a href="https://wa.me/8801805530585" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">WhatsApp</a>
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-zinc-500 text-xs uppercase font-bold tracking-widest mb-2">Location</p>
                  <p>Cumilla, Bangladesh</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} Moinul Islam.
          </p>
          <div className="flex gap-8 text-sm font-medium text-zinc-600">
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
            <a href="#" className="hover:text-black transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

