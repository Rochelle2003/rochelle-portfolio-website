import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      rotateX: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const projects = [
    {
      id: 1,
      title: "EK McQuiz",
      description: "De gemaakte EK-quiz als onderdeel van de McGoal campagne. Gebruikers beantwoorden vragen over eerdere toernooien en kunnen bij hoge scores gratis producten of merch verdienen. Volledig in McDonald's-stijl met visuele feedback bij juiste antwoorden.",
      image: "/mac.png",
      color: "yellow",
      category: "Web Development",
      tech: ["JavaScript", "HTML", "CSS"],
      links: [
        { url: "https://i523681.hera.fontysict.net/quiz/", label: "Speel de quiz", type: "primary" },
        { url: "https://www.figma.com/file/CrzlXUrrWntBhsqwyrxeU9/Mc-Quiz?type=design&node-id=0%3A1&mode=design", label: "Bekijk Figma design", type: "secondary" }
      ]
    },
    {
      id: 2,
      title: "Carnaval Game",
      description: "Voor de leeruitkomst Development maakte ik deze vrolijke Javascript-game in carnavalsstijl. Klik zo veel mogelijk zwevende ballonnen stuk binnen de tijd! De game heeft live score-updates, achtergrondmuziek en kleurrijke visuals.",
      image: "/carnaval.png",
      color: "pink",
      category: "Game Development",
      tech: ["JavaScript", "Canvas API", "HTML5"],
      links: [
        { url: "https://i523681.hera.fontysict.net/bewijslast/eigenn/", label: "Speel de game", type: "primary" },
        { url: "https://git.fhict.nl/I523681/eigen-project-code-sm2", label: "Bekijk Git repo", type: "secondary" }
      ]
    },
    {
      id: 3,
      title: "Eastereggs EnoRm",
      description: "Een speelse opdracht voor het bedrijf EnoRm. In deze webpagina zijn verschillende eastereggs verwerkt (verborgen grapjes of verrassingen) die de gebruiker kan ontdekken. Het draait om de eastereggs niet de webpagina zelf. Leuk én leerzaam front-end project!",
      image: "/enorm.png",
      color: "blue",
      category: "Frontend Development",
      tech: ["HTML", "CSS", "JavaScript"],
      links: [
        { url: "https://i509114.hera.fontysict.net/enorm-easter-egg/", label: "Bekijk live site", type: "primary" },
        { url: "https://git.fhict.nl/I509114/enorm-easter-egg", label: "Bekijk Git repo", type: "secondary" },
        { url: "/enorm-eastereggs", label: "Lees uitleg", type: "tertiary" }
      ]
    },
    {
      id: 4,
      title: "KNMI Weerapp",
      description: "Een moderne weersvoorspellingstool gebaseerd op het KNMI, met regio-specifieke info en een toegankelijke visuele interface. De app is ontworpen met duidelijke UI-componenten, een strakke layout en animaties.",
      image: "/knmiweerapp.png",
      color: "purple",
      category: "Web App",
      tech: ["Next.js", "Tailwind CSS", "API Integration"],
      links: [
        { url: "https://knmiweerapp.vercel.app/", label: "Bekijk live site", type: "primary" },
        { url: "https://github.com/Rochelle2003/knmiweerapp", label: "Bekijk Git repo", type: "secondary" },
        { url: "https://www.figma.com/design/ZqlTWJmGuww7AlVaIwGzkp/Designs?node-id=23-269&t=nWREOz4idpwkPq5P-1", label: "Bekijk Figma design", type: "tertiary" }
      ]
    },
    {
      id: 5,
      title: "Brandguide voor Claudy",
      description: "Voor de beginnende artiest Claudy ontwierp ik een visuele merkidentiteit. De brandguide bevat kleuren, typografie, logo's en social media stijlen waarmee Claudy haar merk professioneel en herkenbaar kan presenteren.",
      image: "/claudy.jpg",
      color: "pink",
      category: "Branding",
      tech: ["Figma", "Adobe Creative Suite", "Brand Strategy"],
      links: [
        { url: "https://i523681.hera.fontysict.net/bewijslast/BrandguideClaudy.pdf", label: "Bekijk de brandguide (PDF)", type: "primary" }
      ]
    },
    {
      id: 6,
      title: "Contentstrategie Claudy",
      description: "Naast de branding maakten we ook een contentstrategie voor Claudy. Hierin staat hoe ze haar muziek en imago kan promoten via sociale media en andere kanalen, met concrete richtlijnen en formats.",
      image: "/claudycontentstrategie.jpg",
      color: "pink",
      category: "Content Strategy",
      tech: ["Content Planning", "Social Media", "Marketing"],
      links: [
        { url: "https://i523681.hera.fontysict.net/bewijslast/contentstrategie.pdf", label: "Bekijk contentstrategie (PDF)", type: "primary" }
      ]
    },
    {
      id: 7,
      title: "DotSecure: awareness-tool",
      description: "In samenwerking met 2manydots ontwikkelde ik de visuele stijl voor DotSecure: een interactieve tool die medewerkers alert houdt op digitale en fysieke risico's binnen kantooromgevingen. Het project is succesvol afgerond met een volledig interactief prototype. Het design is speels, AI-achtig en sluit perfect aan bij cybersecurity-awareness.",
      image: "/dotsecure.png",
      color: "cyan",
      category: "UX/UI Design",
      tech: ["Figma", "Prototyping", "User Research"],
      links: [
        { url: "https://www.figma.com/proto/9wGPhZ5oIb04V5UMSDeU1j/DESIGN-Dotsecure?node-id=0-1&t=LT1RVsLjmtf4D59e-1", label: "Bekijk prototype", type: "primary" },
        { url: "https://www.figma.com/design/9wGPhZ5oIb04V5UMSDeU1j/DESIGN-Dotsecure?node-id=0-1&t=LT1RVsLjmtf4D59e-1", label: "Bekijk design", type: "secondary" }
      ]
    },
    {
      id: 8,
      title: "CineVault - Film Website",
      description: "Een moderne filmwebsite gebouwd met Next.js en Tailwind CSS. CineVault biedt een premium cinema experience met duizenden films, reviews, aanbevelingen en een watchlist functie. De website heeft een donker thema met oranje accenten en een gebruiksvriendelijke interface voor film liefhebbers.",
      image: "/cinevault-screenshot.png",
      color: "orange",
      category: "Web Development",
      tech: ["Next.js", "Tailwind CSS", "JavaScript", "API Integration"],
      links: [
        { url: "https://cinevaultt-mocha.vercel.app/", label: "Bekijk live site", type: "primary" },
        { url: "https://github.com/Rochelle2003/cinevault", label: "Bekijk Git repo", type: "secondary" }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      yellow: {
        border: 'border-yellow-400',
        text: 'text-yellow-400',
        bg: 'bg-gradient-to-r from-yellow-400 to-orange-400',
        hover: 'hover:from-yellow-500 hover:to-orange-500',
        glow: 'shadow-yellow-400/50'
      },
      pink: {
        border: 'border-pink-400',
        text: 'text-pink-400',
        bg: 'bg-gradient-to-r from-pink-400 to-purple-400',
        hover: 'hover:from-pink-500 hover:to-purple-500',
        glow: 'shadow-pink-400/50'
      },
      blue: {
        border: 'border-blue-400',
        text: 'text-blue-400',
        bg: 'bg-gradient-to-r from-blue-400 to-cyan-400',
        hover: 'hover:from-blue-500 hover:to-cyan-500',
        glow: 'shadow-blue-400/50'
      },
      purple: {
        border: 'border-purple-400',
        text: 'text-purple-400',
        bg: 'bg-gradient-to-r from-purple-400 to-pink-400',
        hover: 'hover:from-purple-500 hover:to-pink-500',
        glow: 'shadow-purple-400/50'
      },
             cyan: {
         border: 'border-cyan-400',
         text: 'text-cyan-400',
         bg: 'bg-gradient-to-r from-cyan-400 to-blue-400',
         hover: 'hover:from-cyan-500 hover:to-blue-500',
         glow: 'shadow-cyan-400/50'
       },
       orange: {
         border: 'border-orange-400',
         text: 'text-orange-400',
         bg: 'bg-gradient-to-r from-orange-400 to-red-400',
         hover: 'hover:from-orange-500 hover:to-red-500',
         glow: 'shadow-orange-400/50'
       }
    };
    return colors[color] || colors.purple;
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-purple-900 via-pink-900 to-black text-white font-['Vinila Test'] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 py-20 px-6">
        <motion.section 
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div 
            className="text-center mb-20"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-6xl md:text-7xl font-extrabold mb-6"
              variants={itemVariants}
            >
              Mijn <span className="gradient-text">Projecten</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Een overzicht van mijn creatieve werk, van web development tot branding en UX/UI design
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {projects.map((project, index) => {
              const colors = getColorClasses(project.color);
              
              return (
                <motion.div 
                  key={project.id}
                  className="group relative"
                  variants={cardVariants}
                  whileHover="hover"
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-300"></div>
                  
                  {/* Card Content */}
                  <div className="relative p-8 h-full">
                    {/* Category Badge */}
                    <motion.div 
                      className={`inline-block px-4 py-2 rounded-full text-xs font-bold mb-4 ${colors.bg} text-white`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      {project.category}
                    </motion.div>

                    {/* Image */}
                    <motion.div 
                      className="relative mb-6 overflow-hidden rounded-2xl"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`absolute inset-0 ${colors.glow} blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
                      <Image
                        src={project.image}
                        alt={`Screenshot van ${project.title}`}
                        width={400}
                        height={250}
                        className="relative z-10 w-full h-48 object-contain rounded-2xl border-2 border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-300 bg-gray-900/50"
                      />
                    </motion.div>
                    
                    {/* Project Info */}
                    <div className="space-y-4">
                      <motion.h2 
                        className={`text-2xl font-extrabold mb-3 ${colors.text} group-hover:scale-105 transition-transform duration-300`}
                      >
                        {project.title}
                      </motion.h2>
                      
                                             <p className="text-gray-300 text-sm leading-relaxed mb-6">
                         {project.description}
                       </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700/50"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + 0.7 + techIndex * 0.1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                      
                      {/* Links */}
                      <div className="space-y-3">
                        {project.links.map((link, linkIndex) => (
                          <motion.a
                            key={linkIndex}
                            href={link.url}
                            target={link.url.startsWith('http') ? "_blank" : undefined}
                            rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                            className={`block text-center px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                              link.type === 'primary' 
                                ? `${colors.bg} text-white ${colors.hover} shadow-lg hover:shadow-xl` 
                                : link.type === 'secondary'
                                ? 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20'
                                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.9 + linkIndex * 0.1 }}
                          >
                            {link.label}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="mt-32 text-center"
            variants={itemVariants}
          >
            <motion.div 
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 backdrop-blur-sm">
                <motion.h2 
                  className="text-4xl font-extrabold mb-6 text-white"
                  variants={itemVariants}
                >
                  Interesse in samenwerking?
                </motion.h2>
                
                <motion.p 
                  className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto"
                  variants={itemVariants}
                >
                  Ik sta altijd open voor nieuwe uitdagingen en interessante projecten. 
                  Laten we samen iets geweldigs maken!
                </motion.p>
                
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  variants={itemVariants}
                >
                  <Link href="/contact" passHref legacyBehavior>
                    <a className="btn-primary transform hover:scale-105 transition-transform duration-300">
                      Neem contact op
                    </a>
                  </Link>
                  <Link href="/over-mij" passHref legacyBehavior>
                    <a className="btn-secondary transform hover:scale-105 transition-transform duration-300">
                      Meer over mij
                    </a>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
}
