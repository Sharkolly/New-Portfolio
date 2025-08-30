import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import TextType from "./TextType";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Fola
            </span>
            
          </h1>
          <div className="text-2xl sm:text-3xl lg:text-4xl text-white/90 mb-8 h-12">
            <span className="text-blue-400">
              {" "}
              <TextType
                text={[
                  "I'm a Software Developer",
                  "I'm a Full-Stack Developer",
                ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </span>
          </div> 
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative web solutions and bringing
            ideas to life through clean, efficient code. Specialized in modern
            JavaScript frameworks and full-stack development.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer">
            View My Work
          </button>
          <button className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center gap-2 cursor-pointer">
            <Download className="w-5 h-5" />
            Download CV
          </button>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/Sharkolly"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors duration-200 transform hover:scale-110"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/adesanya-m-8543ba256"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors duration-200 transform hover:scale-110"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a
            href="mailto:mofeoluwaadeasanya@gmail.com"
            target="_blank"
            className="text-white/70 hover:text-white transition-colors duration-200 transform hover:scale-110"
          >
            <Mail className="w-8 h-8" />
          </a>
          <a
            href="https://twitter.com/Fola22288041?t=jtz_3Jdgq0rOL9T6_6DG_g&s=09"
            target="_blank"
            className="text-white/70 hover:text-transition-colors duration-200 transform hover:scale-110"
          >
            <FaXTwitter className="w-8 h-8" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=2347035439642"
            target="_blank"
            className="text-white/70 hover:text-white transition-colors duration-200 transform hover:scale-110"
          >
            <SiWhatsapp className="w-8 h-8" />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
