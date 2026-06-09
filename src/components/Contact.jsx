import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLink } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="section-padding" id="contact">
      <div className="container">


        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16">
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass p-6 rounded-[15px] flex items-center gap-6 transition-all duration-300 hover:translate-x-2.5 hover:bg-white/5">
              <div className="w-12 h-12 bg-primary rounded-xl flex justify-center items-center text-2xl text-white flex-shrink-0"><FiMail /></div>
              <div>
                <h3 className="text-lg font-bold text-text-light">Email</h3>
                <p className="text-text-dim text-sm">mohinitanwar30@gmail.com</p>
              </div>
            </div>
            <div className="glass p-6 rounded-[15px] flex items-center gap-6 transition-all duration-300 hover:translate-x-2.5 hover:bg-white/5">
              <div className="w-12 h-12 bg-primary rounded-xl flex justify-center items-center text-2xl text-white flex-shrink-0"><FiPhone /></div>
              <div>
                <h3 className="text-lg font-bold text-text-light">Phone</h3>
                <p className="text-text-dim text-sm">+91 7015889571</p>
              </div>
            </div>
            <div className="glass p-6 rounded-[15px] flex items-center gap-6 transition-all duration-300 hover:translate-x-2.5 hover:bg-white/5">
              <div className="w-12 h-12 bg-primary rounded-xl flex justify-center items-center text-2xl text-white flex-shrink-0"><FiMapPin /></div>
              <div>
                <h3 className="text-lg font-bold text-text-light">Location</h3>
                <p className="text-text-dim text-sm">Hisar , Haryana</p>
              </div>
            </div>
            <div className="glass p-6 rounded-[15px] flex items-center gap-6 transition-all duration-300 hover:translate-x-2.5 hover:bg-white/5">
              <div className="w-12 h-12 bg-primary rounded-xl flex justify-center items-center text-2xl text-white flex-shrink-0"><FiLink /></div>
              <div>
                <h3 className="text-lg font-bold text-text-light mb-2">Social Profiles</h3>
                <div className="flex items-center gap-4">
                  <a href="https://github.com/mohini733" target="_blank" rel="noreferrer" className="text-2xl text-text-dim hover:text-white transition-colors">
                    <FaGithub />
                  </a>
                  <a href="https://linkedin.com/in/mohini-tanwar-886a0337b" target="_blank" rel="noreferrer" className="text-2xl text-text-dim hover:text-[#0077b5] transition-colors">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="glass p-12 md:p-8 rounded-[20px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="flex flex-col gap-6">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-6 py-4 bg-white/3 border border-white/10 rounded-xl text-text-light font-inherit transition-all focus:border-primary focus:bg-white/5 outline-none"
                />
              </div>
              <div className="w-full">
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-6 py-4 bg-white/3 border border-white/10 rounded-xl text-text-light font-inherit transition-all focus:border-primary focus:bg-white/5 outline-none"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  className="w-full px-6 py-4 bg-white/3 border border-white/10 rounded-xl text-text-light font-inherit transition-all focus:border-primary focus:bg-white/5 outline-none"
                />
              </div>
              <div className="w-full">
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="w-full px-6 py-4 bg-white/3 border border-white/10 rounded-xl text-text-light font-inherit transition-all focus:border-primary focus:bg-white/5 outline-none"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-fit">
                Send Message <FiSend />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
