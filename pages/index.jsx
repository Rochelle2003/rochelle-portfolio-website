import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <main className="bg-black text-white font-['Vinila Test'] overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`
          }}
        />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center text-left px-6 gap-10 relative">
        <motion.div 
          className="max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
            variants={itemVariants}
          >
            <span className="block text-white">Creative</span>
            <span className="block gradient-text">Media</span>
            <span className="block text-pink-400">Design</span>
            <span className="block text-white">Student</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 font-normal mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Media design studente met een passie voor UX/UI en een groeiende liefde voor code. 
            Ik combineer creativiteit met techniek om gebruiksvriendelijke, visueel sterke interfaces te maken.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <Link href="/portfolio" passHref legacyBehavior>
              <a className="btn-primary group relative overflow-hidden">
                <span className="relative z-10">Bekijk Projecten</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </Link>

            <Link href="/contact" passHref legacyBehavior>
              <a className="btn-secondary group relative overflow-hidden">
                <span className="relative z-10">Neem Contact</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-8 md:mt-0 relative"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-30 animate-pulse" />
            <Tilt 
              tiltMaxAngleX={15} 
              tiltMaxAngleY={15} 
              scale={1.05} 
              transitionSpeed={250}
              className="relative"
            >
              <div className="image-container">
                <Image
                  src="/profile.jpg"
                  alt="Portret van Rochelle, media design studente met donkere haren en paarse achtergrond"
                  width={400}
                  height={400}
                  className="rounded-2xl border-4 shadow-2xl"
                  style={{ borderColor: '#FFBFF9' }}
                  priority
                />
              </div>
            </Tilt>
          </div>
          
          {/* Floating Elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        id="overmij"
        className="min-h-screen bg-gradient-to-b from-[#F5EBF4] to-white text-black py-20 px-6 font-['Vinila Test'] relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-5xl md:text-6xl font-extrabold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Over <span className="gradient-text">mij</span>
          </motion.h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
            <motion.div 
              className="flex-1 max-w-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-8">
                <h3 className="text-6xl md:text-7xl font-extrabold text-gray-200 absolute -top-4 -left-4">
                  Creative
                </h3>
                <h3 className="text-6xl md:text-7xl font-extrabold gradient-text relative z-10">
                  Creative
                </h3>
              </div>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Hi! Ik ben <strong>Rochelle</strong>, een enthousiaste media design student met een liefde voor design én development.
                Mijn kracht ligt in het maken van digitale ervaringen die niet alleen mooi zijn, maar ook intuïtief werken.
              </p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Ik verdiep me graag in <strong>UX/UI design</strong>, prototyping in Figma en het bouwen van toegankelijke, moderne websites met Next.js en Tailwind CSS.
                Naast school werk ik graag aan persoonlijke projecten om mijn skills verder te ontwikkelen.
              </p>

              <Link href="/over-mij" passHref legacyBehavior>
                <a className="btn-primary inline-block">
                  Meer over mij
                </a>
              </Link>
            </motion.div>

            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={250}>
                <div className="image-container">
                  <Image
                    src="/ik.jpg"
                    alt="Profielfoto van Rochelle met een glimlach en ronde hoeken"
                    width={500}
                    height={500}
                    className="rounded-2xl border-4 shadow-2xl"
                    style={{ borderColor: '#FFBFF9' }}
                  />
                </div>
              </Tilt>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills" 
        className="bg-gradient-to-br from-[#2d0052] via-purple-900 to-black text-white py-20 text-center font-['Vinila Test'] relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Skills en <span className="gradient-text">Tools</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'UI Design', desc: 'Figma, Adobe XD', color: 'purple' },
              { title: 'Development', desc: 'HTML, CSS, JS, Next.js', color: 'pink' },
              { title: 'UX Research', desc: 'User Testing, Prototyping', color: 'cyan' },
              { title: 'Accessibility', desc: 'WCAG Guidelines', color: 'purple' },
              { title: 'Responsive Design', desc: 'Mobile-first approach', color: 'pink' },
              { title: 'Design Thinking', desc: 'Problem-solving', color: 'cyan' }
            ].map((skill, index) => (
              <motion.div 
                key={skill.title}
                className="glass-effect rounded-2xl p-8 hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className={`text-2xl font-extrabold mb-3 text-${skill.color}-300`}>
                  {skill.title}
                </h3>
                <p className="text-gray-300 font-normal">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="bg-gradient-to-b from-white to-[#F5EBF4] text-black py-20 px-6 text-center font-['Vinila Test']"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-2xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Contact <span className="gradient-text">Me</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-700 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Heb je een vraag, wil je samenwerken of stage aanbieden?  
            Stuur me gerust een bericht!
          </motion.p>

          <motion.form 
            action="https://formspree.io/f/xeoapkky"
            method="POST" 
            className="space-y-6 text-left max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div>
              <label className="block text-sm font-semibold text-purple-700 mb-2">Naam</label>
              <input
                type="text"
                name="name"
                placeholder="Jouw naam"
                className="w-full p-4 border border-gray-300 rounded-xl font-normal focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all duration-300"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-purple-700 mb-2">E-mail</label>
              <input
                type="email"
                name="email"
                placeholder="jij@email.com"
                className="w-full p-4 border border-gray-300 rounded-xl font-normal focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all duration-300"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-purple-700 mb-2">Bericht</label>
              <textarea
                name="message"
                placeholder="Wat wil je me laten weten?"
                rows="5"
                className="w-full p-4 border border-gray-300 rounded-xl font-normal focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all duration-300 resize-none"
                required
              ></textarea>
            </div>
            
            <motion.button
              type="submit"
              className="w-full btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Verstuur Bericht
            </motion.button>
          </motion.form>

          <motion.p 
            className="text-sm text-gray-500 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Je bericht wordt rechtstreeks doorgestuurd naar mijn inbox 💌
          </motion.p>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="bg-black text-white text-center py-8 font-normal font-['Vinila Test']"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm text-gray-400">
            © 2025 Rochelle M. All rights reserved
          </p>
        </div>
      </motion.footer>
    </main>
  );
}
