import { motion } from 'motion/react';
import { ProjectCard, ProjectInfo } from './ProjectCard';
import { Hero } from './Hero';

interface InnovationLabProps {
  projects: ProjectInfo[];
  memberName?: string | null;
}

export const InnovationLab = ({ projects, memberName }: InnovationLabProps) => {
  return (
    <motion.main 
      key="projects"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="flex-1 pt-12 pb-40 px-6 max-w-sm md:max-w-7xl mx-auto relative z-10 w-full"
    >
      <Hero 
        label="ARCHIVE V.04"
        labelClassName="text-accent-blue font-bold"
        title={memberName ? (
          <>{memberName.split(' ')[0]} <br className="lg:hidden" /><span className="text-accent-blue font-medium">{memberName.split(' ')[1]}</span></>
        ) : (
          <>AUGI <br className="lg:hidden" /><span className="text-accent-blue font-medium">TEAM</span></>
        )}
        description="A curated showcase of experimental prototypes, open-source utilities, and architectural blueprints developed by the collective."
      />

      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </motion.main>
  );
};
