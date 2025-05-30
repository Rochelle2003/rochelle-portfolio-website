import Image from 'next/image';
import { motion } from 'framer-motion';

export default function OverMij() {
  return (
    <main className="bg-[#F5EBF4] text-black min-h-screen py-20 px-6 font-['Vinila Test']">
      <section className="max-w-6xl mx-auto font-['Vinila Test']">
        {/* Titel */}
        <motion.h1 
          className="text-4xl md:text-5xl font-extrabold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Over <span className="text-purple-600">mij</span>
        </motion.h1>

        {/* Profiel + intro */}
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg text-gray-800 mb-4">
              Hoi! Ik ben <strong>Rochelle</strong>, een enthousiaste media design student met een liefde voor design én development.
              Mijn kracht ligt in het maken van digitale ervaringen die niet alleen mooi zijn, maar ook intuïtief werken.
            </p>
            <p className="text-gray-700 mb-4">
              Ik verdiep me graag in <strong>UX/UI design</strong>, prototyping in Figma en het bouwen van toegankelijke, moderne websites met Next.js en Tailwind CSS.
              Naast school werk ik graag aan persoonlijke projecten om mijn skills verder te ontwikkelen.
            </p>
            <p className="text-gray-700">
              Op deze site deel ik mijn schoolopdrachten, UX onderzoeken, design cases én frontend werk.  
              Neem gerust een kijkje bij mijn projecten!
            </p>
          </div>

          <div className="flex-1 md:pl-12">
            <Image
              src="/ik.png"
              alt="Profielfoto van Rochelle"
              width={300}
              height={300}
              className="rounded-xl border-4 shadow-md mx-auto md:mx-0"
              style={{ borderColor: '#FFBFF9' }}
            />
          </div>
        </div>

     {/* Skills sectie */}
<div className="mt-16">
  <h2 className="text-2xl font-extrabold text-center mb-6 text-purple-600">Skills</h2>
  <div className="flex flex-wrap gap-4 justify-center mb-12">
    {[
      'UX Research', 'Accessibility', 'Prototyping', 'UI Design', 'Responsiveness', 'Design Thinking'
    ].map((skill, i) => (
      <span
        key={i}
        className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold shadow"
      >
        {skill}
      </span>
    ))}
  </div>

  <h2 className="text-2xl font-extrabold text-center mb-6 text-purple-600">Tools</h2>
  <div className="flex flex-wrap gap-4 justify-center">
    {[
      'Figma', 'HTML', 'CSS', 'Tailwind', 'JavaScript', 'Next.js'
    ].map((tool, i) => (
      <span
        key={i}
        className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold shadow"
      >
        {tool}
      </span>
    ))}
  </div>
</div>


        {/* Opleiding / ervaring */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-6 text-purple-600">Opleiding & Ervaring</h2>
          <ul className="space-y-4 text-gray-700 text-base">
            <li>
              🎓 <strong>ICT Creative Media & Design</strong> – Fontys Hogeschool (lopend)
            </li>
            <li>
              💻 Stage-ervaring (nog te plannen): interesse in UX design, front-end of digitale branding.
            </li>
            <li>
              🌐 Persoonlijke projecten: portfolio site, weerapp concept, schoolopdrachten.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
