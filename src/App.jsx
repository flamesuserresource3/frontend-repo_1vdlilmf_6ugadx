import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import GridSections from './components/GridSections';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <Hero />
      <Sections />
      <GridSections />
      <div id="register" className="bg-neutral-950/95 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold">Ready to join Shreshta '26?</h2>
          <p className="mt-2 text-neutral-300">Secure your spot and be part of the Year of the Innovator.</p>
          <a
            href="#"
            className="mt-6 inline-block rounded-full bg-[#B92525] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_0_0_rgba(212,175,55,0)] hover:shadow-[0_0_24px_6px_rgba(212,175,55,0.35)] transition-shadow"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
