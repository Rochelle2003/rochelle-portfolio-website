import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Portfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
      links: [
        { url: "https://i523681.hera.fontysict.net/bewijslast/contentstrategie.pdf", label: "Bekijk contentstrategie (PDF)", type: "primary" }
      ]
    },
    {
      id: 7,
      title: "DotSecure: awareness-tool",
      description: "In samenwerking met 2manydots ontwikkel ik de visuele stijl voor DotSecure: een interactieve tool die medewerkers alert houdt op digitale en fysieke risico's binnen kantooromgevingen. Het project is nog bezig op het moment dus nog niet af. Het design is speels, AI-achtig en sluit aan bij cybersecurity-awareness.",
      image: "/dotsecure.png",
      color: "cyan",
      links: [
        { url: "https://www.figma.com/design/A1ZoxBGk7hzOXOX98OyVxp/design-dotsecure?node-id=0-1&t=9bWyeA8pX30xfQpQ-1", label: "Bekijk Figma design", type: "primary" }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      yellow: {
        border: 'border-yellow-400',
        text: 'text-yellow-400',
        bg: 'bg-yellow-400',
        hover: 'hover:bg-yellow-500'
      },
      pink: {
        border: 'border-pink-400',
        text: 'text-pink-400',
        bg: 'bg-pink-500',
        hover: 'hover:bg-pink-600'
      },
      blue: {
        border: 'border-blue-400',
        text: 'text-blue-400',
        bg: 'bg-blue-500',
        hover: 'hover:bg-blue-600'
      },
      purple: {
        border: 'border-purple-400',
        text: 'text-purple-400',
        bg: 'bg-purple-500',
        hover: 'hover:bg-purple-600'
      },
      cyan: {
        border: 'border-cyan-400',
        text: 'text-cyan-400',
        bg: 'bg-cyan-500',
        hover: 'hover:bg-cyan-600'
      }
    };
    return colors[color] || colors.purple;
  };

  return (
    <main className="bg-gradient-to-br from-black via-purple-900 to-black text-white min-h-screen py-20 px-6 font-['Vinila Test']">
      <motion.section 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-5xl md:text-6xl font-extrabold text-center mb-16"
          variants={itemVariants}
        >
          Mijn <span className="gradient-text">Projecten</span>
        </motion.h1>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            
            return (
              <motion.div 
                key={project.id}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl hover-lift border border-gray-700"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="image-container mb-6">
                  <Image
                    src={project.image}
                    alt={`Screenshot van ${project.title}`}
                    width={400}
                    height={250}
                    className={`rounded-xl border-2 ${colors.border} shadow-lg`}
                  />
                </div>
                
                <div className="space-y-4">
                  <h2 className={`text-2xl font-extrabold mb-3 ${colors.text}`}>
                    {project.title}
                  </h2>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    {project.links.map((link, linkIndex) => (
                      <motion.a
                        key={linkIndex}
                        href={link.url}
                        target={link.url.startsWith('http') ? "_blank" : undefined}
                        rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                        className={`block text-center px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                          link.type === 'primary' 
                            ? `${colors.bg} text-white ${colors.hover} shadow-lg` 
                            : link.type === 'secondary'
                            ? 'bg-white text-black hover:bg-gray-100 shadow-lg'
                            : 'bg-gray-800 text-white hover:bg-gray-700 shadow-lg'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-20 text-center"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-3xl font-extrabold mb-6 gradient-text"
            variants={itemVariants}
          >
            Interesse in samenwerking?
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Ik sta altijd open voor nieuwe uitdagingen en interessante projecten. 
            Neem gerust contact op als je wilt samenwerken!
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Link href="/contact" passHref legacyBehavior>
              <a className="btn-primary">
                Neem contact op
              </a>
            </Link>
            <Link href="/over-mij" passHref legacyBehavior>
              <a className="btn-secondary">
                Meer over mij
              </a>
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
}
