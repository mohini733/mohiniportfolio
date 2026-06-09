import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import Skills from '../components/Skills';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <section className="pb-16 md:pb-20 pt-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-20 items-center">
            <motion.div
              className="max-w-[500px] mx-auto lg:mx-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-6 rounded-[30px] glass overflow-hidden">
                <img
                  src="/img/mohiniimg.jpeg"
                  alt="About Mohini"
                  className="w-full rounded-[20px] block transform -scale-x-100 scale-125 shadow-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="gradient-text font-bold">My Story</span>
              <h1 className="text-4xl md:text-5xl font-bold my-4 leading-tight">I'm <span className="gradient-text">Mohini</span>, a Web Developer</h1>
              <div className="flex flex-col gap-6 text-text-dim text-lg leading-relaxed">
                <p>
                  With over 2 years of experience in the digital world, I specialize in
                  building high-performance web applications. My journey started with a
                  curiosity about how things work on the internet, and now I'm here
                  creating those experiences for users worldwide.
                </p>
                <p>
                  I believe that good design is invisible and focuses on the user.
                  My goal is to merge technical excellence with creative thinking to
                  deliver products that leave a lasting impression.
                </p>
              </div>
              <div className="mt-10">
                <button className="btn btn-primary">
                  Download Resume <FiDownload />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pt-16 md:pt-20 pb-8 md:pb-12 glass">
        <div className="container">
          <div className="text-center mb-16">
            <span className="gradient-text uppercase font-bold tracking-[2px] text-sm block mb-2">My Path</span>
            <h2 className="text-4xl text-text-light">Work Experience</h2>
          </div>
          <div className="max-w-[800px] mx-auto relative before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-white/10">
            <TimelineItem
              year="2023 - Present"
              title="Senior Frontend Developer"
              company="Tech Innovators Inc."
              desc="Leading the frontend team to build scalable enterprise solutions using React and Next.js."
            />
            <TimelineItem
              year="2021 - 2023"
              title="Web Developer"
              company="Creative Digital Agency"
              desc="Developed interactive websites for various clients, focusing on animations and UI/UX."
            />
            <TimelineItem
              year="2020 - 2021"
              title="Junior Developer (Intern)"
              company="Startup Hub"
              desc="Assisted in developing the core MVP for a social networking platform."
            />
          </div>
        </div>
      </section>

      <Skills />
    </motion.div>
  );
};

const TimelineItem = ({ year, title, company, desc }) => (
  <motion.div
    className="pl-12 pb-12 relative"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
  >
    <div className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-primary shadow-[0_0_10px_#6366f1]"></div>
    <span className="text-primary font-bold text-sm">{year}</span>
    <h3 className="text-2xl font-bold my-2 text-text-light">{title}</h3>
    <h4 className="text-text-dim font-medium mb-4">{company}</h4>
    <p className="text-text-dim leading-relaxed">{desc}</p>
  </motion.div>
);

export default About;
