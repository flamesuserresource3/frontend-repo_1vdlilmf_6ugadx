import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[88vh] w-full overflow-hidden bg-neutral-950" id="hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/20 to-neutral-950/95" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
          Shreshta 2026: Ignite the Year of Innovation
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-200">
          Welcome to the official tech fest of MITS, where tradition fuels technology.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#register"
            className="rounded-full bg-[#B92525] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_0_0_rgba(212,175,55,0)] hover:shadow-[0_0_24px_6px_rgba(212,175,55,0.35)] hover:scale-[1.02] active:scale-[0.99] transition-all"
          >
            Register Now
          </a>
          <a
            href="#about"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
