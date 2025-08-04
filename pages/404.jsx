import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Custom404() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-pink-900 text-white flex items-center justify-center px-6 font-['Vinila Test']">
      <motion.div 
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-8xl md:text-9xl font-extrabold mb-8 gradient-text"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          404
        </motion.h1>
        
        <motion.h2 
          className="text-3xl md:text-4xl font-extrabold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Oeps! Pagina niet gevonden
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-300 mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          De pagina die je zoekt bestaat niet of is verplaatst. 
          Geen zorgen, hier zijn enkele links om je verder te helpen!
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Link href="/" passHref legacyBehavior>
            <a className="btn-primary">
              Terug naar home
            </a>
          </Link>
          
          <Link href="/portfolio" passHref legacyBehavior>
            <a className="btn-secondary">
              Bekijk portfolio
            </a>
          </Link>
          
          <Link href="/contact" passHref legacyBehavior>
            <a className="btn-secondary">
              Neem contact op
            </a>
          </Link>
        </motion.div>
        
        <motion.div 
          className="mt-12 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p>Of gebruik de navigatie bovenaan de pagina</p>
        </motion.div>
      </motion.div>
    </main>
  );
} 