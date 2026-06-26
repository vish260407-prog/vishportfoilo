import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="w-full py-8 px-6 md:px-16 lg:px-24 bg-transparent relative z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">

        {/* Logo Left */}
        <a href="#hero" className="font-serif text-lg md:text-xl font-bold tracking-wider text-charcoal hover:opacity-80 transition-opacity">
          VISHMITHA M
        </a>

        {/* Menu Toggle (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 z-50 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
          aria-expanded={isOpen}
          aria-label="Toggle Navigation"
        >
          <span className={`w-6 h-0.5 bg-charcoal transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-charcoal transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-charcoal transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* Desktop Centered Navigation */}
        <nav className="hidden md:flex items-center justify-center">
          <ul className="flex items-center gap-6 lg:gap-8 font-sans text-[11px] font-semibold tracking-[0.16em] uppercase text-charcoal">
            <li><a href="#about" className="hover:text-burgundy transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-burgundy hover:after:w-full after:transition-all">About</a></li>
            <li><a href="#skills" className="hover:text-burgundy transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-burgundy hover:after:w-full after:transition-all">Skills</a></li>
            <li><a href="#experience" className="hover:text-burgundy transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-burgundy hover:after:w-full after:transition-all">Experience</a></li>
            <li><a href="#projects" className="hover:text-burgundy transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-burgundy hover:after:w-full after:transition-all">Projects</a></li>
            <li><a href="#contact" className="hover:text-burgundy transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-burgundy hover:after:w-full after:transition-all">Contact</a></li>
          </ul>
        </nav>

        {/* Right Call To Action + Socials */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-4 text-charcoal">
            <a href="https://github.com/vish260407-prog" target="_blank" rel="noopener noreferrer" className="hover:text-burgundy transition-colors text-lg" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/vishmitha-m-a729a5418?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="hover:text-burgundy transition-colors text-lg" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/littlelilac_x?igsh=MW1iZ3JiY204MnVwaQ==v" target="_blank" rel="noopener noreferrer" className="hover:text-burgundy transition-colors text-lg" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <a
            href="#contact"
            className="bg-burgundy text-white hover:bg-burgundy-dark font-sans text-[10px] font-bold tracking-widest uppercase py-3 px-6 rounded-full transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Get In Touch
          </a>
        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`fixed inset-0 bg-cream/98 z-40 transition-all duration-500 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col h-full justify-between p-12 pt-28">
          <nav>
            <ul className="flex flex-col gap-6 font-serif text-3xl text-charcoal font-bold">
              <li><a href="#about" onClick={closeMenu} className="hover:text-burgundy">About</a></li>
              <li><a href="#skills" onClick={closeMenu} className="hover:text-burgundy">Skills</a></li>
              <li><a href="#experience" onClick={closeMenu} className="hover:text-burgundy">Experience</a></li>
              <li><a href="#projects" onClick={closeMenu} className="hover:text-burgundy">Projects</a></li>
              <li><a href="#contact" onClick={closeMenu} className="hover:text-burgundy">Contact</a></li>
            </ul>
          </nav>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-6 text-xl text-charcoal">
              <a href="https://github.com/vish260407-prog" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/vishmitha-m-a729a5418?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com/littlelilac_x?igsh=MW1iZ3JiY204MnVwaQ==v" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
            <a
              href="#contact"
              onClick={closeMenu}
              className="bg-burgundy text-white font-sans text-xs font-bold tracking-widest uppercase py-4 text-center rounded-full"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
