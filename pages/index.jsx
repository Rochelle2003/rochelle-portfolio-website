import Image from 'next/image';
import Header from '../components/Header';

export default function Home() {
  return (
    <main className="bg-black text-white font-[Vinila Test]">
      

      {/* Hero */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center text-left px-6 gap-10 bg-[#2d0052]">
        {/* Tekst links */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="text-white block">Creative</span>
            <span className="text-purple-400 block">Media</span>
            <span className="text-pink-400 block">Design</span>
            <span className="text-white block">Student</span>
          </h1>
          <p className="mt-6 text-gray-200 font-normal">
            Media design studente met een passie voor UX/UI en een groeiende liefde voor code. 
            Ik combineer creativiteit met techniek om gebruiksvriendelijke, visueel sterke interfaces te maken.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="min-w-[140px] text-center font-extrabold bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600">
              Projecten
            </button>
            <button className="min-w-[140px] text-center font-extrabold bg-black text-white px-6 py-2 rounded-full hover:bg-gray-200">
              Contact
            </button>
          </div>
        </div>

        {/* Afbeelding rechts */}
        <div className="mt-8 md:mt-0">
          <Image
            src="/profile.jpg"
            alt="Mijn profielfoto"
            width={300}
            height={300}
            className="rounded-xl border-4 shadow-md"
            style={{ borderColor: '#FFBFF9' }}
          />
        </div>
      </section>

      {/* Over Mij */}
      <section id="overmij" className="bg-white text-black py-20 px-6 font-[Vinila Test]">
        <h2 className="text-4xl font-extrabold text-center mb-10">
          Over <span className="text-purple-600">mij</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto text-left">
          {/* Linkerzijde: Titel + tekst */}
          <div className="flex-1 max-w-xl">
            <div className="relative w-fit mb-6 leading-tight">
              {/* Stroke-layer */}
              <h3
                className="text-5xl md:text-6xl font-extrabold absolute top-0 left-0 text-black z-0 whitespace-pre-line"
                style={{
                  WebkitTextStroke: '6px black',
                  color: 'transparent',
                  fontFamily: 'Vinila Test',
                }}
              >
                Creative{'\n'}Media{'\n'}Design{'\n'}Student
              </h3>

              {/* Gekleurde bovenlaag */}
              <h3
                className="text-5xl md:text-6xl font-extrabold z-10 relative whitespace-pre-line"
                style={{ fontFamily: 'Vinila Test' }}
              >
                <span style={{ color: '#FBD6F5' }}>Creative</span>{'\n'}
                <span style={{ color: '#C084FC' }}>Media</span>{'\n'}
                <span style={{ color: '#FF6EF0' }}>Design</span>{'\n'}
                <span style={{ color: '#FFBFF9' }}>Student</span>
              </h3>
            </div>

            <p className="mb-6 text-base text-gray-800 font-normal">
              Hi! Ik ben Rochelle, een media design student met een passie voor UX/UI en een nieuwsgierigheid naar code. <br />
              Op mijn portfolio site deel ik mijn schoolopdrachten en projecten waarin ik design en development combineer
              om gebruiksvriendelijke digitale ervaringen te maken.
            </p>

            <button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 font-extrabold">
              Over mij
            </button>
          </div>

          {/* Afbeelding rechts */}
          <div className="flex-1">
            <img
              src="/profile.jpg"
              alt="Rochelle"
              className="rounded-xl border-4 shadow-xl w-full max-w-sm mx-auto"
              style={{ borderColor: '#FFBFF9' }}
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-[#2d0052] text-white py-16 text-center font-[Vinila Test]">
        <h2 className="text-3xl font-extrabold mb-6">Skills en <span className="text-purple-400">Tools</span></h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          <div className="bg-black text-white px-6 py-6 rounded-xl shadow-lg w-52">
            <p className="font-extrabold text-purple-300 mb-2">UI Design</p>
            <p className="text-sm font-normal">Figma</p>
          </div>
          <div className="bg-black text-white px-6 py-6 rounded-xl shadow-lg w-52">
            <p className="font-extrabold text-purple-300 mb-2">Development</p>
            <p className="text-sm font-normal">HTML, CSS, JS, Next.js</p>
          </div>
        </div>
        <p className="mt-6 text-sm text-gray-300 font-normal">Lerende om nog meer skills en tools te beheersen</p>
      </section>

      {/* Contact */}
      <section className="bg-white text-black py-16 px-6 text-center font-[Vinila Test]">
        <h2 className="text-2xl font-extrabold mb-6">Contact <span className="text-purple-600">Me</span></h2>
        <form className="max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Naam" className="w-full p-3 border border-gray-300 rounded-md font-normal" />
          <input type="email" placeholder="E-mail adres" className="w-full p-3 border border-gray-300 rounded-md font-normal" />
          <input type="text" placeholder="Bedrijfsnaam (optioneel)" className="w-full p-3 border border-gray-300 rounded-md font-normal" />
          <textarea placeholder="Bericht" rows="4" className="w-full p-3 border border-gray-300 rounded-md font-normal"></textarea>
          <button type="submit" className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 font-extrabold">Verstuur</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center text-sm py-4 font-normal font-[Vinila Test]">
        2025 Rochelle M. All rights reserved
      </footer>
    </main>
  );
}
