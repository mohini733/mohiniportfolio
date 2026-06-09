import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, level: 90, color: '#e34c26' },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 85, color: '#264de4' },
    { name: 'JavaScript', icon: <FaJs />, level: 80, color: '#f7df1e' },
    { name: 'React', icon: <FaReact />, level: 85, color: '#61dbfb' },
    { name: 'Tailwind', icon: <SiTailwindcss />, level: 80, color: '#06b6d4' },
    { name: 'Node.js', icon: <FaNodeJs />, level: 70, color: '#339933' },
    { name: 'Figma', icon: <FaFigma />, level: 75, color: '#f24e1e' },
  ];

  return (
    <section className="section-padding" id="skills">
      <div className="container">
        <div className="text-center mb-16">
          <span className="gradient-text uppercase font-bold tracking-[2px] text-sm block mb-2">My Expertise</span>
          <h2 className="text-4xl text-text-light">Skills & Technologies</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className="glass p-10 rounded-[20px] text-center transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl mb-6 flex justify-center" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h3 className="text-lg font-bold mb-6 text-text-light">{skill.name}</h3>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mb-3">
                <motion.div 
                  className="h-full rounded-full" 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  style={{ background: `linear-gradient(90deg, ${skill.color}, #ec4899)` }}
                />
              </div>
              <span className="font-semibold text-text-dim text-sm">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
