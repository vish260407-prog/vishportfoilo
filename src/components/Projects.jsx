import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const projectsData = [
    {
      title: 'Car Showroom Management System',
      description: 'Developed a web-based application for managing vehicle inventory, customer records, and sales transactions. Implemented database operations for efficient data storage and retrieval.',
      tech: ['JavaScript', 'Node.js', 'Express.js', 'MySQL', 'HTML5', 'CSS3']
    },
    {
      title: 'Hospital Booking System',
      description: 'Designed an online appointment booking platform for patients and healthcare providers with appointment scheduling and management functionalities.',
      tech: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'HTML5', 'CSS3']
    },
    {
      title: 'Fabrication Company Management Website',
      description: 'Developed a business website to showcase services, projects, and company information with a user-friendly interface.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap']
    },
    {
      title: 'Iron and Steel Company Website',
      description: 'Built a responsive corporate website for product display and business operations with inquiry management features.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap']
    },
    {
      title: 'Learning Website',
      description: 'Developed an educational platform for students to access learning materials and resources with interactive pages.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap']
    }
  ];

  return (
    <section className="w-full bg-cream py-20 md:py-28 lg:py-36 px-6 md:px-16 lg:px-24" id="projects">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center lg:text-left">
          <span className="font-sans text-[10px] md:text-xs font-semibold tracking-[0.25em] text-gold uppercase block mb-3">
            PORTFOLIO SHOWCASE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-burgundy tracking-tight leading-snug">
            Featured Projects
          </h2>
        </div>

        {/* Projects List / Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-12 lg:gap-16"
        >
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              variants={projectVariants}
              className="bg-cream-panel border border-charcoal/5 rounded-[24px] p-8 md:p-12 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden"
            >
              {/* Sleek top border accent */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Index Number Indicator */}
                <div className="lg:col-span-1 hidden lg:flex justify-start items-center">
                  <span className="font-serif text-4xl font-extrabold text-gold/30 group-hover:text-gold/80 transition-colors duration-300">
                    0{idx + 1}
                  </span>
                </div>

                {/* Main content area */}
                <div className="lg:col-span-11 flex flex-col gap-4">
                  
                  {/* Title & Accent */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <h3 className="font-serif text-2xl md:text-2xl font-bold text-burgundy group-hover:text-burgundy-dark transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-sm md:text-base text-charcoal/85 leading-relaxed pr-0 lg:pr-12">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="bg-burgundy/5 text-burgundy text-[11px] font-semibold tracking-wider font-sans uppercase py-1 px-3 rounded-full border border-burgundy/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
