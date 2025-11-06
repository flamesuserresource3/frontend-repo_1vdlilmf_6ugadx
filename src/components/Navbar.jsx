import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'Home', href: '#' },
  { name: 'Events', href: '#events' },
  { name: 'Workshops', href: '#workshops' },
  { name: 'About', href: '#about' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-colors ${
      scrolled ? 'backdrop-blur-md bg-neutral-900/60 border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="font-black tracking-tight text-xl text-[#D4AF37]">
            Shreshta '26
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="text-sm font-medium text-neutral-200 hover:text-[#D4AF37] transition-colors"
              >
                {l.name}
              </a>
            ))}
            <a
              href="#register"
              className="rounded-full bg-[#B92525] px-5 py-2 text-sm font-semibold text-white shadow-[0_0_0_0_rgba(212,175,55,0)] hover:shadow-[0_0_20px_4px_rgba(212,175,55,0.35)] hover:scale-[1.02] active:scale-[0.99] transition-all"
            >
              Register Now
            </a>
          </div>
          <button
            className="md:hidden p-2 rounded-md text-neutral-200 hover:text-white hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="block rounded-md px-3 py-2 text-sm font-medium text-neutral-200 hover:text-[#D4AF37] hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {l.name}
              </a>
            ))}
            <a
              href="#register"
              className="block text-center rounded-full bg-[#B92525] px-5 py-2 text-sm font-semibold text-white shadow-[0_0_0_0_rgba(212,175,55,0)] hover:shadow-[0_0_20px_4px_rgba(212,175,55,0.35)] transition-shadow"
              onClick={() => setOpen(false)}
            >
              Register Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
