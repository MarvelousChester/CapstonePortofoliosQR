import { motion } from 'motion/react';
import { Globe } from 'lucide-react';

export interface TeamMember {
  name: string;
  role: string;
  desc: string;
  img: string;
}

interface TeamCardProps {
  member: TeamMember;
  index: number;
  onShowProjects?: () => void;
}

export function TeamCard({ member, index, onShowProjects }: TeamCardProps) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 + 0.1, duration: 0.6 }}
      className="glass-card p-6 lg:p-8 group flex flex-col gap-6"
    >
      <div className="relative w-full aspect-[4/5] rounded-[16px] overflow-hidden mb-2">
        <img 
          src={member.img} 
          alt={member.role}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-all duration-700 ease-in-out transform group-hover:scale-105" 
        />
      </div>
      
      <div className="flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          <div>
            <p className="text-white/60 text-[11px] mb-2 uppercase tracking-[1px]">{member.role}</p>
            <h3 className="text-2xl font-medium text-white tracking-tight">{member.name}</h3>
          </div>
          
          <p className="text-white/60 text-[14px] leading-relaxed">
            {member.desc}
          </p>
          
          <div className="flex items-center flex-wrap gap-3 pt-2 text-white/60">
            <a href="#" title="GitHub" className="hover:opacity-100 opacity-80 transition-all transform hover:-translate-y-1 flex-shrink-0">
              <img src="https://skillicons.dev/icons?i=github" alt="GitHub" className="w-[36px] h-[36px] rounded-[10px]" />
            </a>
            <a href="#" title="LinkedIn" className="hover:opacity-100 opacity-80 transition-all transform hover:-translate-y-1 flex-shrink-0">
              <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" className="w-[36px] h-[36px] rounded-[10px]" />
            </a>
            <a href="#" title="Personal Portfolio" className="flex items-center gap-3 group hover:opacity-100 transition-all">
              <div className="w-[36px] h-[36px] flex items-center justify-center rounded-[10px] bg-white/5 group-hover:bg-white/15 border border-white/[0.12] group-hover:border-white/30 transition-all transform group-hover:-translate-y-1 text-white/80 group-hover:text-white flex-shrink-0">
                <Globe size={16} />
              </div>
              <span className="text-white/60 group-hover:text-white transition-colors text-[11px] uppercase tracking-[1px] font-medium whitespace-nowrap">
                Personal Portfolio
              </span>
            </a>
          </div>
        </div>
        
        <button 
          onClick={onShowProjects}
          className="w-full mt-6 lg:mt-8 bg-accent-blue text-white text-[13px] font-medium py-4 rounded-[16px] uppercase tracking-[1px] border border-transparent shadow-[0_0_15px_rgba(79,168,255,0.2)] hover:bg-accent-blue/90 hover:shadow-[0_0_20px_rgba(79,168,255,0.4)] active:scale-[0.98] transition-all outline-none"
        >
          Show Other Projects
        </button>
      </div>
    </motion.article>
  );
}
