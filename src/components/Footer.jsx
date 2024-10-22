import logo from "../assets/logo.png";
import { SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="mb-8 mt-20">
      <div className="flex items-center justify-center">
        <motion.img 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={logo} 
          width={190} 
          className="my-20" 
        />
      </div>
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a 
            initial={{ opacity: 0, scale: 0.5 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.5 }} 
            transition={{ duration: 0.3, delay: index * 0.3 }} 
            key={index} 
            href={link.href} 
            target="_blank"
            rel="noopener noreferrer">
            {link.icon}
          </motion.a>
        ))}
      </div>
      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
        &copy;Bruno Blasco. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;