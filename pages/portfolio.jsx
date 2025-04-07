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
            {/* Portfolio kaart 1 */}
          <motion.div 
            className="bg-[#1e1e1e] rounded-xl p-6 shadow-lg flex flex-col h-full justify-between"
            whileHover={{ scale: 1.03 }}
          >
            <img 
              src="mac.png"
              alt="Screenshot van de EK McQuiz" 
              className="rounded-md mb-4 border border-yellow-300"
            />
            <div>
              <h2 className="text-xl font-extrabold mb-2 text-yellow-400">EK McQuiz</h2>
              <p className="text-sm text-gray-300 mb-4">
                De gemaakte EK-quiz als onderdeel van de McGoal campagne. Gebruikers beantwoorden vragen over eerdere toernooien en kunnen bij hoge scores gratis producten of merch verdienen. Volledig in McDonald's-stijl met visuele feedback bij juiste antwoorden.
              </p>
            </div>
            <div className="space-y-2 mt-4">
              <a 
                href="https://i523681.hera.fontysict.net/quiz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
              >
                Speel de quiz
              </a>
              <a 
                href="https://www.figma.com/file/CrzlXUrrWntBhsqwyrxeU9/Mc-Quiz?type=design&node-id=0%3A1&mode=design" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Bekijk het Figma design
              </a>
            </div>
          </motion.div>

       {/* Portfolio kaart 2 */}
          <motion.div 
            className="bg-[#1e1e1e] rounded-xl p-6 shadow-lg flex flex-col h-full justify-between"
            whileHover={{ scale: 1.03 }}
          >
            <img 
              src="/carnaval.png" 
              alt="Screenshot van de Carnaval Game in feestelijke stijl met confetti" 
              className="rounded-md mb-4 border border-pink-400"
            />
            <div>
              <h2 className="text-xl font-extrabold mb-2 text-pink-400">Carnaval Game</h2>
              <p className="text-sm text-gray-300 mb-4">
                Voor de leeruitkomst Development maakte ik deze vrolijke Javascript-game in carnavalsstijl. Klik zo veel mogelijk zwevende ballonnen stuk binnen de tijd! De game heeft live score-updates, achtergrondmuziek en kleurrijke visuals.
              </p>
            </div>
            <div className="space-y-2 mt-4">
              <a 
                href="https://i523681.hera.fontysict.net/bewijslast/eigenn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center bg-pink-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-pink-600 transition"
              >
                Speel de game
              </a>
              <a 
                href="https://git.fhict.nl/I523681/eigen-project-code-sm2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Bekijk Git repo
              </a>
            </div>
          </motion.div>

           {/* Portfolio kaart 3 */}
          <motion.div 
            className="bg-[#1e1e1e] rounded-xl p-6 shadow-lg flex flex-col h-full justify-between"
            whileHover={{ scale: 1.03 }}
          >
            <img 
              src="/enorm.png" 
              alt="Screenshot van de EnoRm easteregg website met verborgen functies" 
              className="rounded-md mb-4 border border-blue-400"
            />
            <div>
              <h2 className="text-xl font-extrabold mb-2 text-blue-400">Eastereggs EnoRm</h2>
              <p className="text-sm text-gray-300 mb-4">
                Een speelse opdracht voor het bedrijf <strong>EnoRm</strong>. In deze webpagina zijn verschillende eastereggs verwerkt (verborgen grapjes of verrassingen) die de gebruiker kan ontdekken. Leuk én leerzaam front-end project!
              </p>
            </div>
            <div className="space-y-2 mt-4">
              <a 
                href="https://i509114.hera.fontysict.net/enorm-easter-egg/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center bg-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600 transition"
              >
                Bekijk live site
              </a>
              <a 
                href="https://git.fhict.nl/I509114/enorm-easter-egg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Bekijk Git repo
              </a>
              <a 
                href="/enorm-eastereggs" 
                className="block text-center bg-gray-800 text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-700 transition"
              >
                Lees uitleg
              </a>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
