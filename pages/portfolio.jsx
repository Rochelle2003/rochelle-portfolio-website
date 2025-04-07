import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <main className="bg-black text-white min-h-screen py-20 px-6 font-['Vinila Test']">
      <section className="max-w-6xl mx-auto text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-extrabold mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Mijn <span className="text-purple-400">Projecten</span>
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Project 1 */}
          <motion.div 
            className="bg-[#1e1e1e] rounded-xl p-6 shadow-lg"
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-xl font-extrabold mb-2 text-purple-300">Weer App Concept</h2>
            <p className="text-sm text-gray-300 mb-4">
              Een UI/UX ontwerp voor een moderne weerapp. Gericht op duidelijke informatie en KNMI-stijl.
            </p>
            <a 
              href="#" 
              className="inline-block mt-auto bg-purple-500 text-white px-4 py-2 rounded-full text-sm hover:bg-purple-600 transition"
            >
              Bekijk project
            </a>
          </motion.div>

          {/* Project 2 */}
          <motion.div 
            className="bg-[#1e1e1e] rounded-xl p-6 shadow-lg"
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-xl font-extrabold mb-2 text-purple-300">Portfolio Website</h2>
            <p className="text-sm text-gray-300 mb-4">
              Deze site! Volledig in Next.js gebouwd, met custom animaties en toegankelijkheidsprincipes.
            </p>
            <a 
              href="#" 
              className="inline-block mt-auto bg-purple-500 text-white px-4 py-2 rounded-full text-sm hover:bg-purple-600 transition"
            >
              Bekijk project
            </a>
          </motion.div>

          {/* Project 3 */}
          <motion.div 
            className="bg-[#1e1e1e] rounded-xl p-6 shadow-lg"
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-xl font-extrabold mb-2 text-purple-300">UX Onderzoek School</h2>
            <p className="text-sm text-gray-300 mb-4">
              Een gebruikerstest en herontwerp voor een FAQ-pagina binnen een schoolproject.
            </p>
            <a 
              href="#" 
              className="inline-block mt-auto bg-purple-500 text-white px-4 py-2 rounded-full text-sm hover:bg-purple-600 transition"
            >
              Bekijk project
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
