import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black text-white px-6 py-4 flex justify-between items-center font-[Vinila Test] sticky top-0 z-50 shadow-md">
      <Link href="/">
        <span className="text-xl font-extrabold cursor-pointer hover:text-purple-400 transition">
          Rochelle <span className="text-purple-400">M</span>
        </span>
      </Link>
      <nav className="space-x-6 font-extrabold">
        <Link href="/portfolio" className="hover:text-purple-300">Portfolio</Link>
        <Link href="/over-mij" className="hover:text-purple-300">Over mij</Link>
        <Link href="/contact" className="text-purple-300">Contact</Link>
      </nav>
    </header>
  );
}
