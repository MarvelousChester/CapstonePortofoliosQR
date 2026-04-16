import { Share2, Palette, Terminal, Users, Code, Cloud, Monitor, Reply, Layers, Sparkles, Shield, User, FileCode, Globe, RefreshCw, Target, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { TeamCard, TeamMember } from './components/TeamCard';
import { ProjectCard, ProjectInfo } from './components/ProjectCard';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Background } from './components/Background';
import { Hero } from './components/Hero';
import { FloatingNav } from './components/FloatingNav';
import { InnovationLab } from './components/InnovationLab';

const TEAM: TeamMember[] = [
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

const PROJECTS: ProjectInfo[] = [
  {
    title: 'NEURAL_DASH V2',
    skills: ['typescript', 'react', 'nodejs', 'mongodb'],
    desc: 'Real-time biometric data analysis engine built for high-performance cognitive monitoring systems.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'PRISM CORE',
    skills: ['css', 'tailwind', 'framer'],
    desc: 'A lightweight CSS-in-JS framework designed for cinematic web experiences with native glassmorphism support.',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'CRYPT_X SHELL',
    skills: ['bash', 'docker', 'aws', 'linux'],
    desc: 'Hardened terminal environment for secure cloud-native deployment orchestrations and infrastructure scaling.',
    img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'ATLAS SYNC',
    skills: ['go', 'rust', 'redis', 'postgres'],
    desc: 'Distributed database synchronization tool focusing on edge computing latency reduction and node consistency.',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<'team' | 'projects'>('team');
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  // Sync state with URL hash on load and when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'projects') {
        setActiveTab('projects');
      } else {
        setActiveTab('team');
        setSelectedMember(null); // Clear selected member when going back to team
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const navigateToProjects = (memberName: string) => {
    setSelectedMember(memberName);
    window.location.hash = 'projects';
  };

  const navigateToTeam = () => {
    window.location.hash = 'team';
  };

  return (
    <div className="bg-background text-white font-sans min-h-screen relative overflow-hidden flex flex-col">
      <Background />

      <Header />

      <AnimatePresence mode="wait">
        {activeTab === 'team' && (
          <motion.main 
            key="team"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4 }}
            className="flex-1 pt-12 pb-40 px-6 max-w-sm md:max-w-7xl mx-auto relative z-10 w-full"
          >
            <Hero 
              label="Our Visionaries"
              title={<>The Creative <br className="lg:hidden" />Engine</>}
              description="A specialized team of four high-caliber individuals redefining digital boundaries through code and cinematic design."
            />

            <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-8">
              {TEAM.map((member, i) => (
                <TeamCard 
                  key={member.name} 
                  member={member} 
                  index={i} 
                  onShowProjects={() => navigateToProjects(member.name)}
                />
              ))}
            </div>
          </motion.main>
        )}

        {activeTab === 'projects' && (
          <InnovationLab projects={PROJECTS} memberName={selectedMember} />
        )}
      </AnimatePresence>

      <FloatingNav activeTab={activeTab} setActiveTab={(tab) => window.location.hash = tab} />

      <Footer />
    </div>
  );
}
