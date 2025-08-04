import '../styles/globals.css';
import Head from 'next/head';
import Header from '../components/Header';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Head>
        <title>Rochelle M - Creative Media Design Student</title>
        <meta name="description" content="Portfolio van Rochelle, een enthousiaste media design student met een passie voor UX/UI design en front-end development. Bekijk mijn projecten en neem contact op!" />
        <meta name="keywords" content="UX design, UI design, front-end development, portfolio, media design, student, Figma, Next.js, React" />
        <meta name="author" content="Rochelle M" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rochelle-portfolio.vercel.app/" />
        <meta property="og:title" content="Rochelle M - Creative Media Design Student" />
        <meta property="og:description" content="Portfolio van Rochelle, een enthousiaste media design student met een passie voor UX/UI design en front-end development." />
        <meta property="og:image" content="/profile.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rochelle-portfolio.vercel.app/" />
        <meta property="twitter:title" content="Rochelle M - Creative Media Design Student" />
        <meta property="twitter:description" content="Portfolio van Rochelle, een enthousiaste media design student met een passie voor UX/UI design en front-end development." />
        <meta property="twitter:image" content="/profile.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />

        {/* Preload fonts */}
        <link rel="preload" href="/VinilaTest-Regular.otf" as="font" type="font/otf" crossOrigin="anonymous" />
        <link rel="preload" href="/VinilaTest-ExtraBold.otf" as="font" type="font/otf" crossOrigin="anonymous" />

        {/* Theme color */}
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="msapplication-TileColor" content="#8B5CF6" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Rochelle M",
              "jobTitle": "Creative Media Design Student",
              "description": "Media design student met een passie voor UX/UI design en front-end development",
              "url": "https://rochelle-portfolio.vercel.app/",
              "sameAs": [
                "https://github.com/Rochelle2003"
              ],
              "knowsAbout": [
                "UX Design",
                "UI Design", 
                "Front-end Development",
                "Figma",
                "Next.js",
                "React"
              ]
            })
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

