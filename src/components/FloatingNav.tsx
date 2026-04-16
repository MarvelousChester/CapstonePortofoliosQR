import { motion } from 'motion/react';
import { Users, Briefcase, Mail } from 'lucide-react';

interface FloatingNavProps {
  activeTab: 'team' | 'projects';
  setActiveTab: (tab: 'team' | 'projects') => void;
}

export const FloatingNav = ({ activeTab, setActiveTab }: FloatingNavProps) => {
  return (
    <motion.nav 
      initial={{ y: 100, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-10 left-1/2 glass-nav rounded-[100px] px-8 py-2 flex items-center gap-10 z-50 transform -translate-x-1/2"
    >
      <button 
        onClick={() => setActiveTab('team')}
        className={`py-3 text-[13px] font-medium whitespace-nowrap border-b-2 flex items-center gap-2 transition-colors ${activeTab === 'team' ? 'border-accent-blue text-white' : 'border-transparent text-white/60 hover:text-white'}`}
      >
        <Users size={20} className="sm:hidden" />
        <span className="hidden sm:inline">The Team</span>
      </button>
      <a href="#" className="text-white/60 hover:text-white transition-colors py-3 text-[13px] font-medium whitespace-nowrap border-b-2 border-transparent flex items-center gap-2">
        <Mail size={20} className="sm:hidden" />
        <span className="hidden sm:inline">Contact</span>
      </a>
    </motion.nav>
  );
};
