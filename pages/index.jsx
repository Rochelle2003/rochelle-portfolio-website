
import Image from 'next/image';
import Header from '../components/Header';

export default function Home() {
  return (
    <main className="bg-black text-white font-sans">
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-[#2d0052]">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          <span className="text-white block">Creative</span>
          <span className="text-purple-400 block">Media</span>
          <span className="text-pink-400 block">Design</span>
          <span className="text-white block">Student</span>
        </h1>
        <p className="mt-6 max-w-xl text-gray-200">
          Media design studente met een passie voor UX/UI en een groeiende liefde voor code. Ik combineer creativiteit met techniek om gebruiksvriendelijke, visueel sterke interfaces te maken.
        </p>

        <Image
          src="/path/to/your/profile.jpg" // Replace with your image path
          alt="Mijn profielfoto"
          width={200}
          height={200}
          className="rounded-xl border border-purple-500 shadow-md"
        />

        <div className="mt-6 flex gap-4">
          <button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600">Projecten</button>
          <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200">Contact</button>
        </div>
        <div className="mt-8">
          <Image src="/profile.jpg" alt="Rochelle" width={200} height={200} className="rounded-xl" />
        </div>
      </section>

      {/* Over Mij */}
      <section className="bg-white text-black py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Over <span className="text-purple-600">mij</span></h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-4xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              Creative <br /> Media <br /> Design <br /> Student
            </h3>
          </div>
          <div>
            <p className="text-gray-800">
              Hi! Ik ben Rochelle een media design student met een passie voor UX/UI en een nieuwsgierigheid naar code.
              Op mijn portfolio site deel ik mijn schoolopdrachten en projecten waarin ik design en development combineer om gebruiksvriendelijke digitale ervaringen te maken.
            </p>
            <button className="mt-4 bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600">Over mij</button>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-[#2d0052] text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Skills en <span className="text-purple-400">Tools</span></h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          <div className="bg-black text-white px-6 py-6 rounded-xl shadow-lg w-52">
            <p className="font-bold text-purple-300 mb-2">UI Design</p>
            <p className="text-sm">Figma</p>
          </div>
          <div className="bg-black text-white px-6 py-6 rounded-xl shadow-lg w-52">
            <p className="font-bold text-purple-300 mb-2">Development</p>
            <p className="text-sm">HTML, CSS, JS, Next.js</p>
          </div>
        </div>
        <p className="mt-6 text-sm text-gray-300">Lerende om nog meer skills en tools te beheersen</p>
      </section>

      {/* Contact */}
      <section className="bg-white text-black py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">Contact <span className="text-purple-600">Me</span></h2>
        <form className="max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Naam" className="w-full p-3 border border-gray-300 rounded-md" />
          <input type="email" placeholder="E-mail adres" className="w-full p-3 border border-gray-300 rounded-md" />
          <input type="text" placeholder="Bedrijfsnaam (optioneel)" className="w-full p-3 border border-gray-300 rounded-md" />
          <textarea placeholder="Bericht" rows="4" className="w-full p-3 border border-gray-300 rounded-md"></textarea>
          <button type="submit" className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600">Verstuur</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center text-sm py-4">
        2025 Rochelle M. All rights reserved
      </footer>
      
    </main>
  );
}
