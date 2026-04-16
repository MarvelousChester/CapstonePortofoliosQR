import { Menu, Search, Share2, Palette, Terminal, Users, Home, Briefcase, Mail } from 'lucide-react';
import { motion } from 'motion/react';

const TEAM = [
  {
    name: 'ALEX RIVERA',
    role: 'Lead Architect & Strategy',
    desc: 'Pioneering spatial computing interfaces and distributed systems for the next generation of creative tools.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEcaFdEaacBLwFM3QTdAZI4s3eMtw4oul9eRxArYmI0YwRHL1ZUYcAKUUUznsO3hYYUroFgg7V1v0y4DK0q4XossaPZ13m5XsrKGh8XjwsOIFfZ4IfVLmzWjwHDzh58W4AhgHYxStKsqQawCtQ_mTF5v2bx2kW6S2e26LTmMs7hjJOmqjOq9Zu5Zhq8AJlsnCvz0xC9TSdgbTZxKY8bBuoEi6k9jUMR5ncZnITuOoqQJG08pXJt2rfAL1iyQ0fhLfJxnqW0M1zyg',
    icon: Share2,
  },
  {
    name: 'MAYA CHEN',
    role: 'Visual Experience Director',
    desc: 'Crafting immersive brand narratives through motion design and cinematic digital experiences.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLO-4P3sl_kxtpzzoWyzQbGBmIOuorDUxU8YxFmyLsjCwfo-pwQdKskkSRY6xiOgxRNefnVHDdu6IXDv1LhQon4v4cSXrWyv3wnJvGA-lF5t5NSAqgykHbvUvNVoliv9ubktOEd9VBDoSxHm5FeaSowvMuXF8HNk6c1N8vTqRVrzlOpJow2RBXB1xfqEZklH9cELfFQ3akft1JY-88wzpU6yDDOY_nEezr4ehOvkjEFwaxscGRl9QHY4p0Xb4_qN8nG3c9lK_lpQ',
    icon: Palette,
  },
  {
    name: 'JORDAN VANCE',
    role: 'Full-Stack Engineer',
    desc: 'Expert in scalable cloud infrastructures and high-performance real-time data visualization.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUP0p3TjfHuZ40es03JivHvu8Wp6Q6C0yNoGpevtdeoMZLk2IjoCF6Nwq1O5njB6i1O5cX7TJ9sNY4of7ywSilqAzMYvHTYfAsI431svaLByOyARAFQZiog9-80U9jRpGRd66YfW-4XKrEehfza8h6Tu6A7lIBryYby7AJYy1mZSPVKNOzi-imLGpq4xcppVPpI8wsOoRaIceE4ZVpN7t--fhtUZGPJC-GmNnq0ByKRnDlDOAnBXqZxZQ-L0k21V14VQc7w07_Fw',
    icon: Terminal,
  },
  {
    name: 'ELENA MORITZ',
    role: 'Principal Product Lead',
    desc: 'Bridging human behavior and machine intelligence through elegant, intuitive interface design.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDit5wCjrhePtIRmA-68GrWUiWOwi0brd7A2-yqU8u7JvYud7PGWNAaJdsi0cYT3GKVyWEMsJdBHFYjVM9faHGw3QpsAYvIuIk0oaN3G0Cg5rQNGoRODDPhbrUJ401aEjC8JGIWHtAHRhPKyl-yP6rO2drvf69VuOWCt5wvHNAwKOcrE7uZfISSJiO74wD26j5ZXT08npZ9wZ0RGmkhCPdVTb6_xMLUtZG1an8wreB0x_RO1fGcpuFP14yOu0fEXzdAdeVyWx90gA',
    icon: Users,
  }
];

export default function App() {
  return (
    <div className="bg-background text-white font-sans min-h-screen relative overflow-hidden flex flex-col">
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(79, 168, 255, 0.15) 0%, transparent 40%),
          radial-gradient(circle at 90% 80%, rgba(157, 116, 255, 0.15) 0%, transparent 40%),
          radial-gradient(circle at 50% 50%, rgba(30, 35, 60, 1) 0%, rgba(15, 17, 26, 1) 100%)
        `,
        backgroundAttachment: 'fixed'
      }}></div>

      {/* Header */}
      <header className="w-full z-50 pt-10 pb-6 px-6 lg:px-10 relative">
        <nav className="flex items-center justify-between w-full max-w-screen-2xl mx-auto">
          <Menu className="text-white/60 hover:text-white transition-colors cursor-pointer" size={24} />
          <h1 className="text-xl lg:text-2xl font-bold tracking-[2px] uppercase bg-gradient-to-r from-white to-[#AAA] bg-clip-text text-transparent">
            THE COLLECTIVE
          </h1>
          <Search className="text-white/60 hover:text-white transition-colors cursor-pointer" size={24} />
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-12 pb-40 px-6 max-w-sm md:max-w-7xl mx-auto relative z-10 w-full">
        <section className="mb-20 lg:text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative inline-block mb-4"
          >
            <span className="text-white/60 tracking-[1px] text-[14px] uppercase block mb-4">
              Our Visionaries
            </span>
            <h2 className="text-[52px] lg:text-[84px] font-[200] text-white leading-[1.1] my-[10px] tracking-tight">
              The Creative <br className="lg:hidden" />Engine
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-white/60 text-[14px] leading-relaxed max-w-[280px] lg:max-w-md mt-6 lg:mx-auto"
          >
            A specialized team of four high-caliber individuals redefining digital boundaries through code and cinematic design.
          </motion.p>
        </section>

        {/* Profile Card Stack/Grid */}
        <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-8">
          {TEAM.map((member, i) => {
            const Icon = member.icon;
            return (
              <motion.article 
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 + 0.3, duration: 0.6 }}
                className="glass-card p-6 lg:p-8 group flex flex-col gap-6"
              >
                {/* Image Section */}
                <div className="relative w-full aspect-[4/5] rounded-[16px] overflow-hidden mb-2">
                  <img 
                    src={member.img} 
                    alt={member.role}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out transform group-hover:scale-105" 
                  />
                </div>
                
                {/* Content Section */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <p className="text-white/60 text-[11px] mb-2 uppercase tracking-[1px]">{member.role}</p>
                      <h3 className="text-2xl font-medium text-white tracking-tight">{member.name}</h3>
                    </div>
                    
                    <p className="text-white/60 text-[14px] leading-relaxed">
                      {member.desc}
                    </p>
                    
                    <div className="flex items-center gap-3 pt-2 text-white/60">
                      <a href="#" title="GitHub" className="hover:opacity-100 opacity-80 transition-all transform hover:-translate-y-1">
                        <img src="https://skillicons.dev/icons?i=github" alt="GitHub" className="w-[36px] h-[36px]" />
                      </a>
                      <a href="#" title="LinkedIn" className="hover:opacity-100 opacity-80 transition-all transform hover:-translate-y-1">
                        <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" className="w-[36px] h-[36px]" />
                      </a>
                      <div className="w-[1px] h-5 bg-white/10 mx-1"></div>
                      <a href="#" title="Personal Portfolio" className="w-[36px] h-[36px] flex items-center justify-center rounded-[10px] bg-white/5 hover:bg-white/15 border border-white/[0.12] hover:border-white/30 transition-all transform hover:-translate-y-1 text-white/80 hover:text-white">
                        <Icon size={16} />
                      </a>
                    </div>
                  </div>
                  
                  <button className="w-full mt-6 lg:mt-8 bg-white/[0.04] text-white/90 text-[13px] font-medium py-4 rounded-[16px] uppercase tracking-[1px] border border-white/[0.12] hover:bg-white/10 active:bg-white/5 transition-all outline-none">
                    Show Other Projects
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </main>

      {/* Floating Bottom Nav */}
      <motion.nav 
        initial={{ y: 100, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 20 }}
        className="fixed bottom-10 left-1/2 glass-nav rounded-[100px] px-8 py-2 flex items-center gap-10 z-50 transform -translate-x-1/2"
      >
        <a href="#" className="text-white/60 hover:text-white transition-colors py-3 text-[13px] font-medium whitespace-nowrap border-b-2 border-transparent flex items-center gap-2">
          <Home size={20} className="sm:hidden" />
          <span className="hidden sm:inline">Overview</span>
        </a>
        <a href="#" className="text-white border-b-2 border-accent-blue py-3 text-[13px] font-medium whitespace-nowrap flex items-center gap-2">
          <Users size={20} className="sm:hidden" />
          <span className="hidden sm:inline">The Team</span>
        </a>
        <a href="#" className="text-white/60 hover:text-white transition-colors py-3 text-[13px] font-medium whitespace-nowrap border-b-2 border-transparent flex items-center gap-2">
          <Briefcase size={20} className="sm:hidden" />
          <span className="hidden sm:inline">Projects</span>
        </a>
        <a href="#" className="text-white/60 hover:text-white transition-colors py-3 text-[13px] font-medium whitespace-nowrap border-b-2 border-transparent flex items-center gap-2">
          <Mail size={20} className="sm:hidden" />
          <span className="hidden sm:inline">Contact</span>
        </a>
      </motion.nav>

      {/* Footer */}
      <footer className="w-full py-12 px-8 flex flex-col items-center justify-center text-center relative z-10">
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <a href="#" className="text-white/40 hover:text-white transition-colors text-[11px] uppercase tracking-[1px]">Privacy Policy</a>
          <a href="#" className="text-white/40 hover:text-white transition-colors text-[11px] uppercase tracking-[1px]">Terms of Service</a>
          <a href="#" className="text-white/40 hover:text-white transition-colors text-[11px] uppercase tracking-[1px]">Contact Us</a>
        </div>
        <p className="text-[11px] uppercase tracking-[1px] text-white/30">
          © {new Date().getFullYear()} THE COLLECTIVE
        </p>
      </footer>
    </div>
  );
}
