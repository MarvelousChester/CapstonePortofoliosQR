import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

export interface ProjectInfo {
  title: string;
  icons: LucideIcon[];
  desc: string;
  linkText: string;
  linkIcon: LucideIcon;
  img: string;
}

interface ProjectCardProps {
  project: ProjectInfo;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 + 0.1, duration: 0.6 }}
      className="glass-card p-6 lg:p-8 group flex flex-col gap-6"
    >
      <div className="relative w-full aspect-video rounded-[16px] overflow-hidden mb-2">
        <img 
          src={project.img} 
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-all duration-700 ease-in-out transform group-hover:scale-105" 
        />
      </div>
      
      <div className="flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-medium text-white tracking-tight uppercase">{project.title}</h3>
            
            <div className="flex items-center gap-4 mt-3 text-accent-blue">
              {project.icons.map((ProjectIcon, idx) => (
                <ProjectIcon key={idx} size={20} strokeWidth={2.5} />
              ))}
            </div>
          </div>
          
          <p className="text-white/60 text-[14px] leading-relaxed mt-4">
            {project.desc}
          </p>
          
          <div className="flex items-center gap-3 pt-4">
            <a href="#" className="w-[36px] h-[36px] flex items-center justify-center rounded-[10px] bg-white/5 hover:bg-white/15 border border-white/[0.12] hover:border-white/30 transition-all transform hover:-translate-y-1 text-white/80 hover:text-white flex-shrink-0">
              <project.linkIcon size={16} />
            </a>
            <span className="text-white/60 text-[11px] uppercase tracking-[1px] font-medium whitespace-nowrap">
              {project.linkText}
            </span>
          </div>
        </div>
        
        <button className="w-full mt-8 bg-accent-blue text-white text-[13px] font-medium py-4 rounded-[16px] uppercase tracking-[1px] border border-transparent shadow-[0_0_15px_rgba(79,168,255,0.2)] hover:bg-accent-blue/90 hover:shadow-[0_0_20px_rgba(79,168,255,0.4)] active:scale-[0.98] transition-all outline-none">
          View on GitHub
        </button>
      </div>
    </motion.article>
  );
}
