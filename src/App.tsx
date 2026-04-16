import { Share2, Palette, Terminal, Users, Code, Cloud, Monitor, Reply, Layers, Sparkles, Shield, User, FileCode, Globe, RefreshCw, Target, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { TeamCard, TeamMember } from './components/TeamCard';
import { ProjectCard, ProjectInfo } from './components/ProjectCard';
import { Header } from './components/Header';
import { Background } from './components/Background';
import { Hero } from './components/Hero';
import { InnovationLab } from './components/InnovationLab';

const TEAM: TeamMember[] = [
  {
    name: 'Karandeep Sandhu',
    role: 'Software Engineer',
    desc: 'Pioneering spatial computing interfaces and distributed systems for the next generation of creative tools.',
    img: '/Karandeep.png',
    linkedin: 'https://www.linkedin.com/in/karandeep-sandhu/',
    github: 'https://github.com/MarvelousChester',
  },
  {
    name: 'Jasmine Kaur',
    role: 'Software Engineer',
    desc: 'Crafting immersive brand narratives through motion design and cinematic digital experiences.',
    img: '/Jasmine.png',
    linkedin: 'https://www.linkedin.com/in/jasminekaur1707/',
    github: 'https://github.com/imjas-mine',
    portfolio: 'https://jasminepersonalportfolio.vercel.app/',
  },
  {
    name: 'Andrei Haboc',

    role: 'Software Engineer',
    desc: 'Expert in scalable cloud infrastructures and high-performance real-time data visualization.',
    img: 'https://github.com/andreipogi2727.png',
    linkedin: 'https://www.linkedin.com/in/andrei-haboc-7b8583291/',
    github: 'https://github.com/andreipogi2727',
  },
  {
    name: 'Salman Nouman',
    role: 'Software Engineer',
    desc: 'Bridging human behavior and machine intelligence through elegant, intuitive interface design.',
    img: 'https://github.com/SalmanNouman.png',
    linkedin: 'https://www.linkedin.com/in/salmannouman/',
    github: 'https://github.com/SalmanNouman',
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
  }
];

const JASMINE_PROJECTS: ProjectInfo[] = [
  {
    title: 'GitHub Analyzer',
    skills: ['python', 'fastapi', 'react', 'graphql', 'redis', 'threejs'],
    desc: 'A full-stack developer analytics platform featuring AI-driven contribution analysis and 3D commit history visualization.',
    img: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Veterinary Website',
    skills: ['react', 'tailwind', 'spring', 'postgres', 'aws'],
    desc: 'Clinic management system with JWT authentication, S3 storage, and automated notifications.',
    img: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'E-Commerce Platform',
    skills: ['java', 'spring', 'react', 'hibernate', 'mysql'],
    desc: 'Full-stack application with RESTful APIs, custom search features, and secure user verification.',
    img: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
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
              title={<>Team behind <br className="lg:hidden" />Augi</>}
              description="Your Fixing Companion"
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
          <InnovationLab 
            projects={selectedMember === 'Jasmine Kaur' ? JASMINE_PROJECTS : PROJECTS} 
            memberName={selectedMember} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
