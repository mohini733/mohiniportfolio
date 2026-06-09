import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '../components/Projects';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');



  const projects = [
    {
      id: 1,
      title: 'Hospital',
      category: 'Next.js , TailwindCss',
      image: '/img/healthcare.jpg',
      live: 'https://healthcare-murex-eight.vercel.app/'
    },
    {
      id: 2,
      title: 'RadhaDoors',
      category: 'React , TailwindCss',
      image: '/img/images.jpg',
      live: 'https://radhadoors.vercel.app/'
    },
    {
      id: 3,
      title: 'E commerce',
      category: 'UI / UX',
      image: '/img/OIP.webp',
      live: 'https://e-commerce-eight-brown-25.vercel.app/'
    },

    {
      id: 4,
      title: 'Notes',
      category: 'UI / UX',
      image: '/img/notes.avif',
      live: 'https://notes-ashy-eight.vercel.app/'
    },
    {
      id: 5,
      title: 'To Do List',
      category: 'API',
      image: '/img/todolist.avif',
      live: 'https://to-do-list-ta6r.vercel.app/'
    }
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <section className="pb-16 md:pb-20 pt-8">
        <div className="container">
          <div className="text-center mb-16">
            <span className="gradient-text uppercase font-bold tracking-[2px] text-sm block mb-2">My Work</span>
            <h1 className="text-4xl md:text-5xl font-bold">All Projects</h1>
          </div>



          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map(project => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectsPage;
