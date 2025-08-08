import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function OverMij() {
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

  const skills = [
    'UX Research', 'Accessibility', 'Prototyping', 'UI Design', 'Responsiveness', 'Design Thinking'
  ];

  const tools = [
    'Figma', 'HTML', 'CSS', 'Tailwind', 'JavaScript', 'Next.js'
  ];

  return (
    <main className="bg-gradient-to-b from-[#F5EBF4] to-white text-black min-h-screen py-20 px-6 font-['Vinila Test']">
      <motion.section 
        className="max-w-6xl mx-auto font-['Vinila Test']"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Titel */}
        <motion.h1 
          className="text-5xl md:text-6xl font-extrabold text-center mb-16"
          variants={itemVariants}
        >
          Over <span className="gradient-text">mij</span>
        </motion.h1>

        {/* Profiel + intro */}
        <div className="flex flex-col lg:flex-row gap-16 items-center justify-between mb-20">
          <motion.div 
            className="flex-1 text-center lg:text-left"
            variants={itemVariants}
          >
            <motion.p 
              className="text-xl text-gray-800 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              Hoi! Ik ben <strong>Rochelle</strong>, een enthousiaste media design student met een liefde voor design én development.
              Mijn kracht ligt in het maken van digitale ervaringen die niet alleen mooi zijn, maar ook intuïtief werken.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-700 mb-6 leading-relaxed"
              variants={itemVariants}
            >
              Ik verdiep me graag in <strong>UX/UI design</strong>, prototyping in Figma en het bouwen van toegankelijke, moderne websites met Next.js en Tailwind CSS.
              Naast school werk ik graag aan persoonlijke projecten om mijn skills verder te ontwikkelen.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-700 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Op deze site deel ik mijn schoolopdrachten, UX onderzoeken, design cases én frontend werk.  
              Neem gerust een kijkje bij mijn projecten!
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/portfolio" passHref legacyBehavior>
                <a className="btn-primary">
                  Bekijk Projecten
                </a>
              </Link>
              <Link href="/contact" passHref legacyBehavior>
                <a className="btn-secondary">
                  Neem contact op
                </a>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex-1 lg:pl-12"
            variants={itemVariants}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-30 animate-pulse" />
              <div className="image-container">
                <Image
                  src="/ik.jpg"
                  alt="Profielfoto van Rochelle"
                  width={400}
                  height={400}
                  className="rounded-2xl border-4 shadow-2xl"
                  style={{ borderColor: '#FFBFF9' }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills sectie */}
        <motion.div 
          className="mt-20"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-extrabold text-center mb-12 gradient-text"
            variants={itemVariants}
          >
            Skills
          </motion.h2>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center mb-16"
            variants={itemVariants}
          >
            {skills.map((skill, i) => (
              <motion.span
                key={i}
                className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover-lift"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl font-extrabold text-center mb-12 gradient-text"
            variants={itemVariants}
          >
            Tools
          </motion.h2>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center mb-16"
            variants={itemVariants}
          >
            {tools.map((tool, i) => (
              <motion.span
                key={i}
                className="bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover-lift"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Opleiding / ervaring */}
        <motion.div 
          className="mt-20 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-extrabold text-center mb-12 gradient-text"
            variants={itemVariants}
          >
            Opleiding & Ervaring
          </motion.h2>
          
          <motion.ul 
            className="space-y-6 text-lg text-gray-700"
            variants={itemVariants}
          >
            <motion.li 
              className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover-lift"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-2xl">🎓</span>
              <div>
                <strong className="text-xl">ICT Creative Media & Design</strong> – Fontys Hogeschool (lopend)
                <p className="text-gray-600 mt-2">Focus op UX/UI design, development en digitale media</p>
              </div>
            </motion.li>
            
            <motion.li 
              className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover-lift"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-2xl">💻</span>
              <div>
                <strong className="text-xl">Stage-ervaring</strong> (nog te plannen)
                <p className="text-gray-600 mt-2">Interesse in UX design, front-end of digitale branding</p>
              </div>
            </motion.li>
            
            <motion.li 
              className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover-lift"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-2xl">🌐</span>
              <div>
                <strong className="text-xl">Persoonlijke projecten</strong>
                <p className="text-gray-600 mt-2">Portfolio site, weerapp concept, schoolopdrachten</p>
              </div>
            </motion.li>
          </motion.ul>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-20 text-center"
          variants={itemVariants}
        >
          <motion.h3 
            className="text-2xl font-extrabold mb-6 gradient-text"
            variants={itemVariants}
          >
            Interesse in samenwerking?
          </motion.h3>
          
          <motion.p 
            className="text-lg text-gray-700 mb-8"
            variants={itemVariants}
          >
            Ik sta altijd open voor nieuwe uitdagingen en interessante projecten!
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Link href="/portfolio" passHref legacyBehavior>
              <a className="btn-primary">
                Bekijk mijn werk
              </a>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <a className="btn-secondary">
                Neem contact op
              </a>
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
}
