import { useScrollReveal } from "../hooks/useScrollReveal";

const bullets = [
  {
    icon: "💸",
    title: "Save ₹300–₹500 Daily on Fuel",
    desc: "Electric vehicles drastically cut your daily running costs compared to petrol bikes.",
  },
  {
    icon: "🔧",
    title: "Low Maintenance Cost",
    desc: "Fewer moving parts mean fewer breakdowns and lower repair expenses.",
  },
  {
    icon: "🏛️",
    title: "Government-Backed EV Push",
    desc: "Take advantage of government subsidies and policies promoting electric mobility.",
  },
  {
    icon: "🌱",
    title: "Eco-Friendly & Future-Ready",
    desc: "Reduce your carbon footprint and be part of India's green transportation revolution.",
  },
];

const WhyElectric: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-tertiary/[0.03]" aria-hidden />
      <div ref={ref} className="relative px-6 md:px-[60px] mx-auto max-w-7xl py-28 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — lighter card with gradient border */}
          <div className="scroll-reveal flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-[1px] bg-gradient-to-br from-primary/40 via-tertiary/30 to-green/20 rounded-[2rem] blur-[1px]" aria-hidden />
              <div className="relative bg-white rounded-[2rem] p-10 md:p-14 text-center shadow-[0_8px_40px_rgba(24,76,186,0.08)]">
                <div className="text-8xl mb-6">🔋</div>
                <h3 className="text-2xl font-bold text-dark mb-3">Go Electric</h3>
                <p className="text-muted text-lg leading-relaxed">Save more, earn more, ride cleaner.</p>
                <div className="mt-8 grid grid-cols-2 gap-5">
                  <div className="bg-primary/[0.06] rounded-2xl p-5 border border-primary/10">
                    <p className="text-3xl font-extrabold text-primary">₹500</p>
                    <p className="text-mutedLight text-sm mt-1">Daily savings</p>
                  </div>
                  <div className="bg-tertiary/[0.06] rounded-2xl p-5 border border-tertiary/10">
                    <p className="text-3xl font-extrabold text-tertiary">100+</p>
                    <p className="text-mutedLight text-sm mt-1">KM range</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — bullet points */}
          <div>
            <p className="text-primary font-semibold text-[13px] uppercase tracking-[0.25em] mb-3 scroll-reveal">
              Why Go Electric?
            </p>
            <h2 className="text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] font-semibold text-dark tracking-[-0.02em] mb-10 scroll-reveal scroll-reveal-delay-1">
              Switch to <span className="text-primary">Electric</span> & Earn More
            </h2>
            <div className="space-y-8">
              {bullets.map((b, i) => (
                <div
                  key={b.title}
                  className={`scroll-reveal scroll-reveal-delay-${i + 1} flex items-start gap-5 group`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/[0.08] flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 group-hover:bg-primary/[0.12] transition-all duration-300">
                    {b.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-lg mb-1.5">{b.title}</h4>
                    <p className="text-muted leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyElectric;
