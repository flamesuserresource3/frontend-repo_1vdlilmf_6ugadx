import { BadgeCheck, Layers, Shield, CircuitBoard, Rocket } from 'lucide-react';

const FilterBar = ({ title, categories, active, onChange }) => (
  <div className="flex flex-wrap items-center justify-between gap-3">
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {['All', ...categories].map((c) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
            active === c
              ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]'
              : 'border-white/15 bg-white/5 text-neutral-200 hover:border-white/25'
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  </div>
);

const ItemCard = ({ icon: Icon, title, tag }) => (
  <div className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-[#D4AF37]/60 hover:bg-white/10">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-[#B92525]/20 p-2 text-[#D4AF37]">
          <Icon size={20} />
        </div>
        <div>
          <h4 className="font-semibold text-white">{title}</h4>
          <p className="text-xs text-neutral-400">{tag}</p>
        </div>
      </div>
      <a
        href="#register"
        className="rounded-full bg-[#B92525] px-3 py-1.5 text-xs font-semibold text-white shadow-[0_0_0_0_rgba(212,175,55,0)] hover:shadow-[0_0_16px_4px_rgba(212,175,55,0.35)] transition-shadow"
      >
        Register
      </a>
    </div>
  </div>
);

export default function GridSections() {
  const eventCategories = ['Robotics', 'Coding', 'Design'];
  const workshopCategories = ['AI & ML', 'Cybersecurity', 'Web 3.0'];

  return (
    <section className="bg-neutral-950 py-16" id="events">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
        <div className="space-y-6">
          <FilterBar
            title="Flagship Events"
            categories={eventCategories}
            active={"All"}
            onChange={() => {}}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ItemCard icon={Rocket} title="Robo-Wars" tag="Robotics" />
            <ItemCard icon={CircuitBoard} title="Hackathon" tag="Coding" />
            <ItemCard icon={Shield} title="Code-Sprint" tag="Coding" />
          </div>
        </div>

        <div id="workshops" className="space-y-6">
          <FilterBar
            title="Workshops"
            categories={workshopCategories}
            active={"All"}
            onChange={() => {}}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ItemCard icon={Layers} title="AI & ML" tag="AI & ML" />
            <ItemCard icon={BadgeCheck} title="Cybersecurity" tag="Cybersecurity" />
            <ItemCard icon={CircuitBoard} title="Web 3.0" tag="Web 3.0" />
          </div>
        </div>
      </div>
    </section>
  );
}
