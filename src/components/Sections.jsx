import { Rocket, Shield, CircuitBoard } from 'lucide-react';

const Stat = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl sm:text-4xl font-extrabold text-[#D4AF37]">{value}</div>
    <div className="mt-1 text-sm text-neutral-300">{label}</div>
  </div>
);

const Card = ({ icon: Icon, title, desc, link }) => (
  <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-[#D4AF37]/60 hover:bg-white/10">
    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-[#B92525]/20 p-2 text-[#D4AF37]">
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <p className="mt-3 text-sm text-neutral-300">{desc}</p>
    <a
      href={link}
      className="mt-4 inline-block text-sm font-semibold text-[#D4AF37] hover:underline"
    >
      Learn More →
    </a>
  </div>
);

export default function Sections() {
  return (
    <section className="relative bg-neutral-950 py-16" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-white">About the Fest</h2>
            <p className="mt-4 text-neutral-300">
              Shreshta is more than a fest; it's a celebration where curiosity meets craft. We
              blend cutting-edge technology with timeless aesthetics to inspire the next wave of
              innovators.
            </p>
            <p className="mt-3 text-neutral-300">
              Across multiple days, experience competitions, workshops, showcases, and talks — all
              designed to spark imagination and build community in the Year of the Innovator.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6">
              <Stat value="20+" label="Events" />
              <Stat value="5+" label="Workshops" />
              <Stat value="5K+" label="Footfall" />
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card
              icon={Rocket}
              title="Robo-Wars"
              desc="Build, battle, and push the limits of engineering in the arena."
              link="#events"
            />
            <Card
              icon={CircuitBoard}
              title="Hackathon"
              desc="Prototype bold ideas and ship impactful solutions in 24 hours."
              link="#events"
            />
            <Card
              icon={Shield}
              title="Code-Sprint"
              desc="Race against time to solve algorithmic challenges with elegance."
              link="#events"
            />
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#B92525]/20 to-transparent p-6 text-white">
              <h3 className="text-lg font-semibold">Year of the Innovator</h3>
              <p className="mt-2 text-sm text-neutral-300">
                Subtle patterns, crafted experiences, and a spark of gold — celebrating progress with
                grace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
