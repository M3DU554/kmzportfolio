import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white bg-opacity-75 backdrop-blur px-6 py-4 flex justify-center space-x-6 z-50">
      {['Home','About','Case Studies','Projects','Résumé','Contact'].map((label) => {
        const href = label === 'Home' ? '/' : `/${label.toLowerCase().replace(/ /g,'-')}`;
        return (
          <Link key={href} href={href}>
            <a className="hover:underline">{label}</a>
          </Link>
        );
      })}
    </nav>
  );
}
