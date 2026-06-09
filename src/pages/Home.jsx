import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero/>

      <section className="pt-16 md:pt-20 pb-8 md:pb-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-left mb-8">
                <span className="gradient-text uppercase font-bold tracking-[2px] text-sm block mb-2">
                  Who I Am
                </span>
                <h2 className="text-4xl text-text-light">About Me</h2>
              </div>
              <p className="text-text-dim text-lg leading-relaxed">
                I am a dedicated Frontend Developer with a strong foundation in
                modern web technologies. I enjoy transforming complex ideas into
                simple, clean, and intuitive user interfaces. When I’m not
                coding, I explore the latest UI/UX trends and continuously work
                on improving my design and development skills, along with
                contributing to open-source projects.
              </p>
              <Link to="/about" className="btn btn-outline mt-8">
                Learn More <FiArrowRight />
              </Link>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass p-8 text-center rounded-[20px]">
                <h3 className="text-4xl text-primary mb-2">2+</h3>
                <p className="text-text-dim font-medium">Years Experience</p>
              </div>
              <div className="glass p-8 text-center rounded-[20px]">
                <h3 className="text-4xl text-primary mb-2">50+</h3>
                <p className="text-text-dim font-medium">Projects Done</p>
              </div>
              <div className="glass p-8 text-center rounded-[20px] col-span-2">
                <h3 className="text-4xl text-primary mb-2">20+</h3>
                <p className="text-text-dim font-medium">Happy Clients</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Skills />
      <Projects isSlider={true} />

   
      <section className="py-20 md:pb-32">
        <div className="container">
          <div className="p-12 md:p-20 rounded-[30px] text-center bg-gradient-to-br from-bg-dark/80 to-bg-dark/80 relative overflow-hidden">
            <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Have a project in mind?
              </h2>
              <p className="text-lg md:text-xl text-text-dim mb-10 max-w-2xl mx-auto">
                Let's work together to build something amazing.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
