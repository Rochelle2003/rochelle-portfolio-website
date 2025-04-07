import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#F5EBF4] text-black py-20 px-6 font-['Vinila Test']">
      <motion.section 
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Neem <span className="text-purple-600">contact</span> op
        </h1>
        <p className="text-gray-700 mb-10">
          Heb je een vraag, wil je samenwerken of stage aanbieden?  
          Stuur me gerust een bericht via het formulier hieronder!
        </p>

        <form 
          action="https://formspree.io/f/xeoapkky"  
          method="POST" 
          className="space-y-5 text-left" 
          aria-label="Contactformulier"
        >
          <label className="block">
            <span className="text-sm font-semibold text-purple-700">Naam</span>
            <input
              type="text"
              name="name"
              placeholder="Jouw naam"
              className="mt-1 w-full p-3 rounded-md border border-gray-300 font-normal"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-purple-700">E-mail</span>
            <input
              type="email"
              name="email"
              placeholder="jij@email.com"
              className="mt-1 w-full p-3 rounded-md border border-gray-300 font-normal"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-purple-700">Bericht</span>
            <textarea
              name="message"
              placeholder="Wat wil je me laten weten?"
              rows="5"
              className="mt-1 w-full p-3 rounded-md border border-gray-300 font-normal"
              required
            ></textarea>
          </label>

          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-3 rounded-full font-extrabold hover:bg-purple-600 transition focus:outline-none focus:ring-2 focus:ring-purple-300"
          >
            Verstuur bericht
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-8">
          Je bericht wordt rechtstreeks doorgestuurd naar mijn inbox 💌
        </p>
      </motion.section>
    </main>
  );
}
