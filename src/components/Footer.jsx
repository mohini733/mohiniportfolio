import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-bg-dark pt-20 pb-8 border-t border-white/10">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-16">
        <div>
          <Link to="/" className="text-2xl font-heading font-extrabold tracking-wider mb-6 inline-block">
            <span className="gradient-text">MOHINI</span>
          </Link>
          <p className="text-text-dim mb-8 max-w-[300px]">
           Crafting seamless digital experiences through clean UI and smooth interactions. Passionate Frontend Developer based in India.          </p>
          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-2xl text-text-dim hover:text-primary transition-all hover:-translate-y-1"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-2xl text-text-dim hover:text-primary transition-all hover:-translate-y-1"><FaLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-2xl text-text-dim hover:text-primary transition-all hover:-translate-y-1"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-2xl text-text-dim hover:text-primary transition-all hover:-translate-y-1"><FaInstagram /></a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6 text-text-light">Quick Links</h3>
          <ul className="flex flex-col gap-3">
            <li><Link to="/" className="text-text-dim hover:text-primary hover:pl-2 transition-all">Home</Link></li>
            <li><Link to="/about" className="text-text-dim hover:text-primary hover:pl-2 transition-all">About</Link></li>
            <li><Link to="/projects" className="text-text-dim hover:text-primary hover:pl-2 transition-all">Projects</Link></li>
            <li><Link to="/contact" className="text-text-dim hover:text-primary hover:pl-2 transition-all">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6 text-text-light">Contact Info</h3>
          <p className="text-text-dim mb-3">Email: mohinitanwar30@gmail.com</p>
          <p className="text-text-dim">Location: Hisar , Haryana</p>
        </div>
      </div>
      <div className="text-center mt-20 pt-8 border-t border-white/10 text-text-dim text-sm">
        <p>&copy; {new Date().getFullYear()} Mohini Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
