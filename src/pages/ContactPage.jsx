import { motion } from 'framer-motion';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <div className="container pt-12">
        <div className="text-center">
          <span className="gradient-text uppercase font-bold tracking-[2px] text-sm block mb-2">Connection</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="max-w-2xl mx-auto text-text-dim text-lg">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>
        </div>
      </div>

      <Contact />
    </motion.div>
  );
};

export default ContactPage;
