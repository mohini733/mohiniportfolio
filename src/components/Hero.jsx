import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-[100px]">
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-5 py-2 rounded-full glass text-primary font-semibold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm Mohini
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl leading-[1.1] mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Building <span className="gradient-text">Modern</span> & Responsive User Interfaces
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-text-dim mb-10 max-w-[500px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            A passionate Frontend Developer specializing in building beautiful,
            interactive, and user-centric web applications with modern technologies.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link to="/projects" className="btn btn-primary">
              View My Work <FiArrowRight />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Hire Me
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="order-1 md:order-2 relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-primary to-secondary blur-[80px] rounded-full opacity-30 z-0 animate-pulse"></div>
          <img
            src="/img/mohiniimg.jpeg"
            alt="Mohini Portfolio"
            className="w-full max-w-[450px] h-[400px] md:h-[550px] object-cover rounded-[30px] relative z-10 shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
