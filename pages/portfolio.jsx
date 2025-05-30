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
                Een speelse opdracht voor het bedrijf <strong>EnoRm</strong>. In deze webpagina zijn verschillende eastereggs verwerkt (verborgen grapjes of verrassingen) die de gebruiker kan ontdekken. Het draait om de eastereggs niet de webpagina zelf. Leuk én leerzaam front-end project!
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

{/* Portfolio kaart - KNMI Weerapp Figma*/}
<motion.div 
  className="bg-[#1e1e1e] rounded-xl p-6 shadow-lg flex flex-col h-full justify-between"
  whileHover={{ scale: 1.03 }}
>
  <img 
    src="/knmiweerapp.png" 
    alt="Screenshot van de KNMI Weerapp" 
    className="rounded-md mb-4 border border-purple-400"
  />
  <div>
    <h2 className="text-xl font-extrabold mb-2 text-purple-400">KNMI Weerapp</h2>
    <p className="text-sm text-gray-300 mb-4">
      Een moderne weersvoorspellingstool gebaseerd op het KNMI, met regio-specifieke info en een toegankelijke visuele interface. De app is ontworpen met duidelijke UI-componenten, een strakke layout en animaties.
    </p>
  </div>
  <div className="space-y-2 mt-4">
    <a 
      href="https://knmiweerapp.vercel.app/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="block text-center bg-purple-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-600 transition"
    >
      Bekijk live site
    </a>
    <a 
      href="https://github.com/Rochelle2003/knmiweerapp" 
      target="_blank" 
      rel="noopener noreferrer"
      className="block text-center bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
    >
      Bekijk Git repo
    </a>
    <a 
      href="https://www.figma.com/design/ZqlTWJmGuww7AlVaIwGzkp/Designs?node-id=23-269&t=nWREOz4idpwkPq5P-1" 
      target="_blank" 
      rel="noopener noreferrer"
      className="block text-center bg-purple-200 text-black px-4 py-2 rounded-full font-semibold hover:bg-purple-300 transition"
    >
      Bekijk Figma design
    </a>
  </div>
</motion.div>

{/* Portfolio kaart 5 - Brandguide Claudy */}
<motion.div 
  className="bg-[#1e1e1e] rounded-xl p-6 shadow-lg flex flex-col h-full justify-between"
  whileHover={{ scale: 1.03 }}
>
  <img 
    src="/claudy.jpg"
    alt="Voorbeeldpagina uit de Claudy Brandguide" 
    className="rounded-md mb-4 border border-pink-300"
  />
  <div>
    <h2 className="text-xl font-extrabold mb-2 text-pink-400">Brandguide voor Claudy</h2>
    <p className="text-sm text-gray-300 mb-4">
      Voor de beginnende artiest <strong>Claudy</strong> ontwierp ik een visuele merkidentiteit. De brandguide bevat kleuren, typografie, logo's en social media stijlen waarmee Claudy haar merk professioneel en herkenbaar kan presenteren.
    </p>
  </div>
  <div className="space-y-2 mt-4">
    <a 
      href="https://i523681.hera.fontysict.net/bewijslast/BrandguideClaudy.pdf" 
      target="_blank" 
      rel="noopener noreferrer"
      className="block text-center bg-pink-400 text-white px-4 py-2 rounded-full font-semibold hover:bg-pink-500 transition"
    >
      Bekijk de brandguide (PDF)
    </a>
  </div>
</motion.div>
{/* Portfolio kaart 7 - Contentstrategie Claudy */}
<motion.div 
  className="bg-[#1e1e1e] rounded-xl p-6 shadow-lg flex flex-col h-full justify-between"
  whileHover={{ scale: 1.03 }}
>
  <img 
    src="/claudycontentstrategie.jpg"
    alt="Contentstrategie visueel voorbeeld" 
    className="rounded-md mb-4 border border-pink-400"
  />
  <div>
    <h2 className="text-xl font-extrabold mb-2 text-pink-400">Contentstrategie Claudy</h2>
    <p className="text-sm text-gray-300 mb-4">
      Naast de branding maakten we ook een contentstrategie voor Claudy. Hierin staat hoe ze haar muziek en imago kan promoten via sociale media en andere kanalen, met concrete richtlijnen en formats.
    </p>
  </div>
  <div className="mt-4">
    <a 
      href="https://i523681.hera.fontysict.net/bewijslast/contentstrategie.pdf" 
      target="_blank" 
      rel="noopener noreferrer"
      className="block text-center bg-pink-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-pink-600 transition"
    >
      Bekijk contentstrategie (PDF)
    </a>
  </div>
</motion.div>
{/* Portfolio kaart – DotSecure project */}
<motion.div 
  className="bg-[#1e1e1e] rounded-xl p-6 shadow-lg flex flex-col h-full justify-between"
  whileHover={{ scale: 1.03 }}
>
  <img 
    src="/dotsecure.png" 
    alt="Voorbeeld van het DotSecure ontwerp" 
    className="rounded-md mb-4 border border-cyan-400"
  />
  <div>
    <h2 className="text-xl font-extrabold mb-2 text-cyan-400">DotSecure: awareness-tool</h2>
    <p className="text-sm text-gray-300 mb-4">
      In samenwerking met <strong>2manydots</strong> ontwikkel ik de visuele stijl voor <em>DotSecure</em>: een interactieve tool die medewerkers alert houdt op digitale en fysieke risico’s binnen kantooromgevingen. Het project is nog bezig op het moment dus nog niet af. Het design is speels, AI-achtig en sluit aan bij cybersecurity-awareness.
    </p>
  </div>
  <div className="mt-4 space-y-2">
    <a 
      href="https://www.figma.com/design/A1ZoxBGk7hzOXOX98OyVxp/design-dotsecure?node-id=0-1&t=9bWyeA8pX30xfQpQ-1" 
      target="_blank" 
      rel="noopener noreferrer"
      className="block text-center bg-cyan-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-cyan-600 transition"
    >
      Bekijk Figma design
    </a>
  </div>
</motion.div>



        </div>
      </section>
    </main>
  );
}
