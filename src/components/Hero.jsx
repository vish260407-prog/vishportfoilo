import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  // Animation Variants
  const textReveal = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const imageReveal = {
    hidden: { opacity: 0, scale: 0.95, y: 45 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }
    }
  };

  const annotationReveal = (delay) => ({
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay }
    }
  });

  return (
    <section className="relative w-full py-12 md:py-20 lg:py-24 px-6 md:px-16 lg:px-24 overflow-visible">

      {/* Background large serif text container (Behind portrait) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        {/* We can hide this when title inside column takes place, but let's build it integrated in the layout */}
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center relative z-10">

        {/* LEFT COLUMN: Annotations (3 cols on desktop) */}
        <div className="lg:col-span-3 order-2 lg:order-1 flex flex-col gap-10 md:gap-12 lg:gap-16 items-center lg:items-start text-center lg:text-left">

          {/* Annotation 1 */}
          <motion.div
            variants={annotationReveal(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative max-w-[200px]"
          >
            <span className="font-sans text-[10px] md:text-xs font-semibold tracking-widest text-charcoal uppercase block leading-relaxed">
              B.E. CSE Student
            </span>
            {/* Curved Arrow pointing down-right */}
            <svg className="hidden lg:block absolute top-12 left-28 w-24 h-12" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10,10 C45,5 75,25 85,35" stroke="#7B1E28" strokeWidth="1.5" strokeDasharray="3,3" strokeLinecap="round" />
              <polygon points="85,35 77,32 82,28" fill="#7B1E28" />
            </svg>
          </motion.div>

          {/* Annotation 2 */}
          <motion.div
            variants={annotationReveal(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative max-w-[200px] lg:mt-8"
          >
            <span className="font-sans text-[10px] md:text-xs font-semibold tracking-widest text-charcoal uppercase block leading-relaxed">
              5+ Projects completed
            </span>
            {/* Curved Arrow pointing right-up */}
            <svg className="hidden lg:block absolute bottom-8 left-24 w-24 h-10" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10,35 C40,35 75,20 85,10" stroke="#7B1E28" strokeWidth="1.5" strokeDasharray="3,3" strokeLinecap="round" />
              <polygon points="85,10 77,12 80,18" fill="#7B1E28" />
            </svg>
          </motion.div>

        </div>

        {/* CENTER COLUMN: Large Headline & Portrait (6 cols on desktop) */}
        <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-center justify-center relative">

          {/* Header Title (Z-index behind portrait) */}
          <motion.h1
            variants={textReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-burgundy leading-none text-center mb-6 lg:mb-0 select-none z-0 lg:absolute lg:top-[-3.5rem] lg:left-1/2 lg:-translate-x-1/2 lg:w-[160%] whitespace-nowrap flex items-center justify-center gap-x-3 md:gap-x-5"
          >
            <span className="font-serif-display font-light tracking-normal text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[6.5vw]">
              Hi, I'm
            </span>
            <span className="font-signature font-normal text-[5.5rem] sm:text-[8rem] md:text-[10.5rem] lg:text-[11vw] leading-[0.2] tracking-normal inline-block transform -rotate-1 select-none pointer-events-none pt-4 md:pt-6">
              Vishmitha
            </span>
          </motion.h1>

          {/* Portrait cutout with soft silhouette shadow */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative w-[80%] sm:w-[60%] lg:w-[90%] max-w-[420px] z-10 mt-6 lg:mt-20 group select-none"
          >
            <img
              src="assets/img 3.jpeg"
              alt="Vishmitha, Full Stack Web Developer"
              className="w-full h-auto max-h-[420px] object-cover object-bottom block transform duration-700 group-hover:scale-[1.02] drop-shadow-[0_20px_35px_rgba(43,31,29,0.22)]"
            />
          </motion.div>

        </div>

        {/* RIGHT COLUMN: Annotation & Action (3 cols on desktop) */}
        <div className="lg:col-span-3 order-3 lg:order-3 flex flex-col gap-10 lg:gap-24 items-center lg:items-end text-center lg:text-right mt-4 lg:mt-0">

          {/* Annotation 3 */}
          <motion.div
            variants={annotationReveal(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative max-w-[200px]"
          >
            <span className="font-sans text-[10px] md:text-xs font-semibold tracking-widest text-charcoal uppercase block leading-relaxed">
              AR/VR Intern
            </span>
            {/* Curved Arrow pointing down-left */}
            <svg className="hidden lg:block absolute top-12 right-28 w-24 h-12" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M90,10 C55,5 25,25 15,35" stroke="#7B1E28" strokeWidth="1.5" strokeDasharray="3,3" strokeLinecap="round" />
              <polygon points="15,35 23,32 18,28" fill="#7B1E28" />
            </svg>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            variants={textReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:mr-4 flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="bg-burgundy text-white hover:bg-burgundy-dark font-sans text-[10px] font-bold tracking-widest uppercase py-4 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] inline-block text-center w-full sm:w-auto"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download="Vishmitha_M_Resume.pdf"
              className="bg-transparent border border-burgundy text-burgundy hover:bg-burgundy hover:text-cream font-sans text-[10px] font-bold tracking-widest uppercase py-4 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] inline-block text-center w-full sm:w-auto"
            >
              Download Resume
            </a>
          </motion.div>

        </div>

      </div>

    </section>
  );
}
