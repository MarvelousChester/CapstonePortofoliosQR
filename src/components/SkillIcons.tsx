interface SkillIconProps {
  skill: string;
  size?: number;
}

export const SkillIcon = ({ skill, size = 32 }: SkillIconProps) => {
  // skillicons.dev uses lowercase for icon names
  const iconName = skill.toLowerCase().replace(/ /g, '');
  const url = `https://skillicons.dev/icons?i=${iconName}`;

  return (
    <div 
      className="flex items-center justify-center transition-transform hover:scale-110"
      style={{ width: size, height: size }}
      title={skill}
    >
      <img 
        src={url} 
        alt={skill} 
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
};

interface SkillIconsProps {
  skills: string[];
  size?: number;
}

export const SkillIcons = ({ skills, size = 26 }: SkillIconsProps) => {
  return (
    <div className="flex items-center gap-3 mt-3">
      {skills.map((skill) => (
        <SkillIcon key={skill} skill={skill} size={size} />
      ))}
    </div>
  );
};
