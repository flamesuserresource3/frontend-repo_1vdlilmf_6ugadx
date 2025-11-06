import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="text-white font-semibold">Shreshta '26</p>
            <p className="text-sm text-neutral-400">MITS • Year of the Innovator</p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-neutral-200 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
            >
              <Instagram size={16} /> Instagram
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-neutral-200 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} MITS — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
