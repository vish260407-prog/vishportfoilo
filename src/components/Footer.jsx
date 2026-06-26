import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-cream py-16 px-6 md:px-16 lg:px-24 border-t border-charcoal/5 relative z-10">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0 pb-12" id="contact">
          
          {/* Logo & Tagline */}
          <div className="max-w-md">
            <span className="font-serif text-2xl font-black text-burgundy tracking-tight block mb-3">
              VISHMITHA M
            </span>
            <p className="font-sans text-xs md:text-sm text-charcoal/70 leading-relaxed mb-6">
              Aspiring Full Stack Developer & B.E. CSE student passionate about building scalable, efficient, and user-friendly web solutions.
            </p>
            
            {/* Contact Details */}
            <div className="flex flex-col gap-2.5 font-sans text-xs md:text-sm text-charcoal/80">
              <p className="flex items-center gap-2.5">
                <i className="fas fa-map-marker-alt text-burgundy w-4 text-center"></i>
                <span>Coimbatore, Tamil Nadu, India</span>
              </p>
              <p className="flex items-center gap-2.5">
                <i className="fas fa-phone text-burgundy w-4 text-center"></i>
                <a href="tel:+919751651847" className="hover:text-burgundy transition-colors">+91 9751651847</a>
              </p>
              <p className="flex items-center gap-2.5">
                <i className="fas fa-envelope text-burgundy w-4 text-center"></i>
                <a href="mailto:vishmithamoorthy@gmail.com" className="hover:text-burgundy transition-colors">vishmithamoorthy@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Navigation links */}
          <nav aria-label="Footer Navigation" className="lg:pt-2">
            <ul className="flex flex-wrap items-center gap-6 lg:gap-8 font-sans text-[10px] font-bold tracking-widest uppercase text-charcoal/80">
              <li><a href="#about" className="hover:text-burgundy transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-burgundy transition-colors">Skills</a></li>
              <li><a href="#experience" className="hover:text-burgundy transition-colors">Experience</a></li>
              <li><a href="#projects" className="hover:text-burgundy transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-burgundy transition-colors">Contact</a></li>
            </ul>
          </nav>

        </div>

        {/* Divider line */}
        <hr className="border-charcoal/10 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-0">
          
          {/* Copyright */}
          <p className="font-sans text-[10px] md:text-xs text-charcoal/50 text-center md:text-left">
            &copy; {new Date().getFullYear()} Vishmitha M. All Rights Reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-6 text-charcoal/70">
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

        </div>

      </div>
    </footer>
  );
}
