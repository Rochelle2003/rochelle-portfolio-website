import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Contact() {
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

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F5EBF4] to-white text-black py-20 px-6 font-['Vinila Test']">
      <motion.section 
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-16">
          <motion.h1 
            className="text-5xl md:text-6xl font-extrabold mb-8"
            variants={itemVariants}
          >
            Neem <span className="gradient-text">contact</span> op
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Heb je een vraag, wil je samenwerken of stage aanbieden?  
            Stuur me gerust een bericht via het formulier hieronder!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <motion.h2 
              className="text-2xl font-extrabold mb-6 gradient-text"
              variants={itemVariants}
            >
              Stuur een bericht
            </motion.h2>

            <motion.form 
              action="https://formspree.io/f/xeoapkky"  
              method="POST" 
              className="space-y-6"
              variants={itemVariants}
            >
              <div>
                <label className="block text-sm font-semibold text-purple-700 mb-2">
                  Naam *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Jouw naam"
                  className="w-full p-4 border border-gray-300 rounded-xl font-normal focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-purple-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="jij@email.com"
                  className="w-full p-4 border border-gray-300 rounded-xl font-normal focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-purple-700 mb-2">
                  Onderwerp
                </label>
                <select
                  name="subject"
                  className="w-full p-4 border border-gray-300 rounded-xl font-normal focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Kies een onderwerp</option>
                  <option value="samenwerking">Samenwerking</option>
                  <option value="stage">Stage aanbod</option>
                  <option value="vraag">Algemene vraag</option>
                  <option value="project">Project bespreking</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-purple-700 mb-2">
                  Bericht *
                </label>
                <textarea
                  name="message"
                  placeholder="Wat wil je me laten weten?"
                  rows="6"
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
              className="text-sm text-gray-500 mt-6 text-center"
              variants={itemVariants}
            >
              Je bericht wordt rechtstreeks doorgestuurd naar mijn inbox 💌
            </motion.p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-extrabold mb-6 gradient-text">
                Laten we samenwerken!
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <h3 className="font-extrabold text-lg mb-2">Wat ik zoek</h3>
                    <p className="text-gray-700">
                      Stage-ervaring in UX design, front-end development of digitale branding. 
                      Ik sta open voor interessante projecten en nieuwe uitdagingen!
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl">💼</span>
                  <div>
                    <h3 className="font-extrabold text-lg mb-2">Mijn expertise</h3>
                    <p className="text-gray-700">
                      UX/UI design, prototyping, front-end development, responsive design, 
                      en het maken van toegankelijke digitale ervaringen.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <h3 className="font-extrabold text-lg mb-2">Beschikbaarheid</h3>
                    <p className="text-gray-700">
                      Momenteel op zoek naar stage-ervaring en interessante projecten. 
                      Ik ben flexibel en enthousiast om nieuwe dingen te leren!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-extrabold mb-4 gradient-text">
                Bekijk mijn werk
              </h3>
              
              <div className="space-y-4">
                <Link href="/portfolio" passHref legacyBehavior>
                  <a className="block w-full btn-primary text-center">
                    Portfolio bekijken
                  </a>
                </Link>
                
                <Link href="/over-mij" passHref legacyBehavior>
                  <a className="block w-full btn-secondary text-center">
                    Meer over mij
                  </a>
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-extrabold mb-4 gradient-text">
                Snelle reactie
              </h3>
              
              <p className="text-gray-700 mb-4">
                Ik probeer altijd binnen 24 uur te reageren op berichten. 
                Voor dringende zaken kun je me ook direct benaderen.
              </p>
              
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Meestal online tussen 9:00 - 18:00
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
