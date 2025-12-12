"use client";
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 top-0 start-0 mix-blend-difference text-white py-6">
      <div className="max-w-[1800px] mx-auto flex items-center justify-between px-6 md:px-12">
        <Link href="/" className="group">
          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-tighter">Abu</span>
            <span className="text-xs text-gray-400 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Portfolio</span>
          </div>
        </Link>
        
        <ul className="hidden md:flex space-x-12 text-sm uppercase tracking-widest font-medium text-gray-300">
          {['Experience', 'Projects', 'Contacts'].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon (Simple Dot) */}
        <button className="md:hidden w-8 h-8 flex items-center justify-end">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
