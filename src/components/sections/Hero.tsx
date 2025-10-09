import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ChevronDown } from 'lucide-react';
import { Button } from '../ui';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-primary overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMy4zMTQtMi42ODYgNi02IDZMNEY2YzMuMzE0IDAgNiAyLjY4NiA2IDZ2NGNLNC42ODYgNi02IDZMODY2Yy0zLjMxNCAwLTYtMi42ODYtNi02di00em0yMCAyMGMwIDMuMzE0LTIuNjg2IDYtNiA2bC00IDBDNC42ODYgNi02IDZMODY2Yy0zLjMxNCAwLTYtMi42ODYtNi02di00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20">
              Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-display text-white mb-6 leading-tight">
            Shubham Ganesh
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 via-gold-300 to-accent-300">
              Nagargoje
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
            Marketing Data Analyst | Data Operations Analyst | Full Stack Developer
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 text-white/80">
            <a
              href="mailto:shubh05nagargoje@gmail.com"
              className="inline-flex items-center gap-2 hover:text-accent-300 transition-colors"
            >
              <Mail size={18} />
              <span className="text-sm md:text-base">shubh05nagargoje@gmail.com</span>
            </a>
            <span className="hidden md:inline">•</span>
            <a
              href="tel:7972724504"
              className="inline-flex items-center gap-2 hover:text-accent-300 transition-colors"
            >
              <Phone size={18} />
              <span className="text-sm md:text-base">7972724504</span>
            </a>
            <span className="hidden md:inline">•</span>
            <div className="inline-flex items-center gap-2">
              <MapPin size={18} />
              <span className="text-sm md:text-base">Pune, India</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://linkedin.com/in/shubham-nagargoje-sn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/89270-Shubham"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection('#projects')}
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="!text-white !border-white hover:!bg-white hover:!text-primary-900"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('#about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};
