import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export default function SkillsAndExperience() {
  const containerRef = useRef(null);

  // Mouse move handler for cards to create a dynamic radial gradient spotlight reflection
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background = `radial-gradient(circle 300px at ${x}px ${y}px, var(--color-burgundy-light), var(--color-burgundy))`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.background = '';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const skillsData = [
    {
      category: 'Programming Languages',
      skills: ['Java', 'Python', 'JavaScript']
    },
    {
      category: 'Front-End Technologies',
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap']
    },
    {
      category: 'Back-End Technologies',
      skills: ['Node.js', 'Express.js']
    },
    {
      category: 'Databases & Tools',
      skills: ['MySQL', 'MongoDB', 'Git & GitHub', 'VS Code', 'Postman']
    }
  ];

  const internshipPoints = [
    'Assisted in the design and prototyping of interactive AR/VR applications and experiences.',
    'Developed responsive 3D user interfaces and interaction components using WebXR and Three.js.',
    'Worked on integrating real-time motion tracking, physics systems, and controller inputs.',
    'Participated in testing, performance optimization, and debugging of assets across target VR/AR devices.',
    'Collaborated with design teams to optimize 3D models and rendering performance for smooth frame rates.'
  ];

  return (
    <div className="relative w-full overflow-hidden" ref={containerRef}>

      {/* 1. Large Repeated Text Backdrop Divider */}
      <div className="w-full bg-cream py-6 overflow-hidden select-none border-b border-charcoal/5 relative z-10" aria-hidden="true">
        <div className="flex w-[200%] gap-4 divider-cutoff-container">
          <div className="animate-marquee font-serif text-[7.5rem] sm:text-[9.5rem] md:text-[11rem] font-bold text-burgundy/5 tracking-[0.12em] uppercase leading-[0.5] flex shrink-0 whitespace-nowrap">
            Skills & Experience &bull; Skills & Experience &bull; Skills & Experience &bull; Skills & Experience &bull;
          </div>
          <div className="animate-marquee font-serif text-[7.5rem] sm:text-[9.5rem] md:text-[11rem] font-bold text-burgundy/5 tracking-[0.12em] uppercase leading-[0.5] flex shrink-0 whitespace-nowrap">
            Skills & Experience &bull; Skills & Experience &bull; Skills & Experience &bull; Skills & Experience &bull;
          </div>
        </div>

        {/* Double offset outline layer directly underneath */}
        <div className="flex w-[200%] gap-4 divider-cutoff-container mt-[-10px]">
          <div className="animate-marquee font-serif text-[7.5rem] sm:text-[9.5rem] md:text-[11rem] font-bold text-burgundy/3 tracking-[0.12em] uppercase leading-[0.5] flex shrink-0 whitespace-nowrap opacity-60 ml-[25px]">
            Skills & Experience &bull; Skills & Experience &bull; Skills & Experience &bull; Skills & Experience &bull;
          </div>
          <div className="animate-marquee font-serif text-[7.5rem] sm:text-[9.5rem] md:text-[11rem] font-bold text-burgundy/3 tracking-[0.12em] uppercase leading-[0.5] flex shrink-0 whitespace-nowrap opacity-60 ml-[25px]">
            Skills & Experience &bull; Skills & Experience &bull; Skills & Experience &bull; Skills & Experience &bull;
          </div>
        </div>
      </div>

      {/* 2. Skills Grid Container Section (Dark Textured Background) */}
      <section className="relative bg-charcoal text-cream py-20 md:py-28 lg:py-36 px-6 md:px-16 lg:px-24" id="skills">
        {/* Plaster Grain Texture Filter Overlay */}
        <div className="texture-overlay" />
        {/* Cast Window Blind Diagonal Shadow Layer */}
        <div className="diagonal-shadow" />

        <div className="max-w-[1200px] mx-auto relative z-10">

          {/* Header */}
          <div className="mb-16 md:mb-20 text-center lg:text-left">
            <span className="font-sans text-[10px] md:text-xs font-semibold tracking-[0.25em] text-gold uppercase block mb-3">
              WHAT I BRING TO THE TABLE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-cream leading-tight">
              Technical Skills
            </h2>
          </div>

          {/* Grid Layout (2x2) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          >
            {skillsData.map((data, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-burgundy border border-cream/10 rounded-2xl p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.35)] shadow-inner-cream cursor-pointer"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div>
                  {/* Card Title */}
                  <h3 className="font-sans text-xs md:text-sm font-semibold tracking-[0.15em] text-gold uppercase border-b border-cream/15 pb-4 mb-6 relative">
                    {data.category}
                  </h3>

                  {/* Skills tags inside card */}
                  <div className="flex flex-wrap gap-2.5">
                    {data.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="bg-cream/10 text-cream text-[11px] md:text-xs font-medium font-sans tracking-wide py-1.5 px-3.5 rounded-full border border-cream/5 hover:bg-cream/20 hover:border-gold/35 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Section (Under Skills section in layout) */}
          <div className="mt-28 md:mt-36 pt-16 border-t border-cream/10" id="experience">

            {/* Timeline Header */}
            <div className="mb-16 text-center lg:text-left">
              <span className="font-sans text-[10px] md:text-xs font-semibold tracking-[0.25em] text-gold uppercase block mb-3">
                PROFESSIONAL EXPERIENCE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-cream leading-tight">
                Internship History
              </h2>
            </div>

            {/* Timetable card */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="bg-burgundy/40 border border-cream/10 rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden backdrop-blur-sm"
            >
              <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-0 pb-8 border-b border-cream/10">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-cream">
                    AR/VR Intern
                  </h3>
                  <p className="font-sans text-base text-gold mt-1">
                    Praya Labs
                  </p>
                </div>
                <span className="font-sans text-xs font-semibold tracking-wider text-cream/70 bg-cream/10 border border-cream/5 px-4 py-2 rounded-full">
                  Internship
                </span>
              </div>

              <div className="pt-8">
                <h4 className="font-sans text-xs font-bold tracking-widest text-gold uppercase mb-6">
                  Key Accomplishments
                </h4>
                <ul className="flex flex-col gap-4">
                  {internshipPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-sm md:text-base text-cream/80 font-light leading-relaxed">
                      <span className="text-gold mt-1.5 flex shrink-0 w-2 h-2 rounded-full bg-gold" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

    </div>
  );
}
