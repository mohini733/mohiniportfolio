import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Projects = ({ isSlider = true }) => {
  const projects = [
    {
      id: 1,
      title: 'Hospital',
      category: 'Next .js / TailwindCss',
      image: '  /img/healthcare.jpg',
      live: 'https://healthcare-murex-eight.vercel.app/'
    },
    {
      id: 2,
      title: 'RadhaDoors',
      category: 'React / TailwindCss',
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
      category: 'UI / Ux',
      image: '/img/notes.avif',
      live: 'https://notes-ashy-eight.vercel.app/'
    }
  ];

  return (
    <section className="section-padding" id="projects">
      <div className="container">
        <div className="text-center mb-16">
          <span className="gradient-text uppercase font-bold tracking-[2px] text-sm block mb-2">Portfolio</span>
          <h2 className="text-4xl text-text-light">Featured Projects</h2>
        </div>

        {isSlider ? (
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-16"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="h-full">
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>

      <style>{`
        .swiper-pagination-bullet { background: #94a3b8 !important; opacity: 0.5 !important; }
        .swiper-pagination-bullet-active { background: #6366f1 !important; opacity: 1 !important; width: 25px !important; border-radius: 5px !important; }
        .swiper-button-next, .swiper-button-prev { color: #6366f1 !important; }
      `}</style>
    </section>
  );
};

const ProjectCard = ({ project }) => (
  <motion.div
    className="glass rounded-[20px] overflow-hidden h-full group"
    whileHover={{ y: -10 }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative h-[250px] overflow-hidden">
      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute top-0 left-0 w-full h-full bg-bg-dark/60 backdrop-blur-[4px] flex justify-center items-center opacity-0 transition-all duration-300 group-hover:opacity-100">
        <div className="flex gap-6">
          {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="w-12 h-12 flex justify-center items-center rounded-full glass text-white text-xl hover:bg-primary transition-colors"><FiGithub /></a>}
          {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="w-12 h-12 flex justify-center items-center rounded-full glass text-white text-xl hover:bg-primary transition-colors"><FiExternalLink /></a>}
        </div>
      </div>
    </div>
    <div className="p-6">
      <span className="text-xs text-primary font-bold uppercase tracking-wider">{project.category}</span>
      <h3 className="mt-2 text-xl font-bold text-text-light">{project.title}</h3>
    </div>
  </motion.div>
);

export default Projects;
export { ProjectCard };
