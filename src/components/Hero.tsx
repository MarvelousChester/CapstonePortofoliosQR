import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface HeroProps {
  label?: string;
  title: ReactNode;
  description: string;
  labelClassName?: string;
}

export const Hero = ({ label, title, description, labelClassName = "text-white/60" }: HeroProps) => {
  return (
    <section className="mb-20 lg:text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative inline-block mb-4"
      >
        {label && (
          <span className={`${labelClassName} tracking-[1px] text-[14px] uppercase block mb-4`}>
            {label}
          </span>
        )}
        <h2 className="text-[52px] lg:text-[84px] font-[200] text-white leading-[1.1] my-[10px] tracking-tight">
          {title}
        </h2>
      </motion.div>
      <motion.h3 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-white/70 text-[18px] lg:text-[22px] font-[300] tracking-[1px] mt-6 lg:mx-auto uppercase"
      >
        {description}
      </motion.h3>
    </section>
  );
};
