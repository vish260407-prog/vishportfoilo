import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  // Animation settings
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const imageFade = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }
    }
  };

  return (
    <section className="w-full bg-cream py-24 md:py-32 lg:py-40 px-6 md:px-16 lg:px-24" id="about">
      <div className="max-w-[1400px] mx-auto bg-cream-panel border border-charcoal/5 rounded-[32px] p-10 md:p-20 lg:p-24 shadow-sm relative overflow-visible">

        {/* Main Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Left Column: Portrait Image (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              variants={imageFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="w-full max-w-[450px] aspect-[4/5] rounded-2xl overflow-hidden shadow-md group"
            >
              <img
                src="assets/about-portrait-final.png"
                alt="Vishmitha leaning on railing, looking to her right"
                className="w-full h-full object-cover transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Right Column: Bio Copy & Details (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start relative">

            {/* Polaroid image pinned in the top-right corner of the text section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 7 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -top-16 right-[-20px] z-20 hidden sm:block polaroid-wrapper"
            >
              <div className="polaroid-card group cursor-pointer transition-all duration-300 hover:rotate-[-2deg] hover:scale-105">
                <div className="w-full aspect-square overflow-hidden bg-cream-panel">
                  <img
                    src="assets/polaroid-event-final.png"
                    alt="Vishmitha sitting on couch smiling"
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
                <p className="font-script text-[1.35rem] leading-none mt-3 text-center text-charcoal/80 select-none">
                  ACET Coimbatore 🎓
                </p>
              </div>
            </motion.div>

            {/* Handwritten intro label */}
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-script text-[2rem] md:text-[2.25rem] text-gold mb-2 block transform -rotate-1"
            >
              Hey, I'm Vishmitha
            </motion.span>

            {/* Title */}
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-bold text-burgundy tracking-tight leading-snug mb-6 pr-0 sm:pr-40"
            >
              Full Stack Developer & CSE Student
            </motion.h2>

            {/* Storytelling Text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-6 font-sans text-sm md:text-base text-charcoal/85 leading-relaxed"
            >
              {/* Highlight italicized introductory bio line */}
              <p className="font-serif italic text-lg text-burgundy font-medium border-l-2 border-gold pl-4 py-1">
                Aspiring Full Stack Developer with hands-on experience in developing web applications through academic projects and internship experience. Proficient in front-end and back-end development with a strong foundation in web technologies, database management, and software development.
              </p>
              <p>
                Currently pursuing a <strong>Bachelor of Engineering (B.E.) in Computer Science & Engineering</strong> at Akshaya College of Engineering and Technology, Coimbatore (Expected Graduation: 2028).
              </p>
              <p>
                Passionate about building efficient, scalable, and user-friendly applications while continuously learning new technologies. My core strengths include Problem Solving, Team Collaboration, Quick Learner, Communication Skills, and Time Management. I am fluent in English and Tamil.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 md:mt-12 flex flex-wrap gap-4 items-center w-full sm:w-auto"
            >
              <a
                href="#contact"
                className="bg-burgundy text-white hover:bg-burgundy-dark font-sans text-[10px] font-bold tracking-widest uppercase py-3.5 px-8 rounded-full shadow-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] inline-block text-center w-full sm:w-auto"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                download="Vishmitha_M_Resume.pdf"
                className="bg-transparent border border-burgundy text-burgundy hover:bg-burgundy hover:text-cream font-sans text-[10px] font-bold tracking-widest uppercase py-3.5 px-8 rounded-full shadow-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] inline-block text-center w-full sm:w-auto"
              >
                Download Resume
              </a>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
