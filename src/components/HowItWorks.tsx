import { useScrollReveal } from "../hooks/useScrollReveal";

const steps = [
  { icon: "📝", title: "Register", desc: "Contact us or walk in to get started." },
  { icon: "✅", title: "KYC Verification", desc: "Submit ID proof for quick approval." },
  { icon: "📋", title: "Choose Plan", desc: "Pick weekly, monthly, or long-term." },
  { icon: "🛵", title: "Vehicle Allocation", desc: "Collect your EV from our hub." },
  { icon: "💰", title: "Start Earning", desc: "Hit the road and maximize income." },
];

const HowItWorks: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="relative">
      {/* Connecting line with glowing dots (desktop only) */}
      <div className="hidden md:block absolute top-[56px] left-[10%] right-[10%] z-0">
        <div className="h-[2px] bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 w-full" />
        {/* Glowing progress dots */}
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_3px_rgba(24,76,186,0.3)]"
            style={{ left: `${i * 25}%` }}
          />
        ))}
      </div>

      <div className="grid md:grid-cols-5 gap-10 md:gap-6">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className={`scroll-reveal scroll-reveal-delay-${i + 1} relative flex flex-col`}
          >
            <div className="relative z-10 flex flex-col flex-1 bg-white rounded-3xl p-8 shadow-[0_4px_32px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(24,76,186,0.12)] hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-300 group text-center">
              {/* Icon */}
              <div className="w-18 h-18 w-[72px] h-[72px] rounded-2xl bg-primary/[0.08] text-4xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:bg-primary/[0.12] transition-all duration-300">
                {step.icon}
              </div>
              {/* Step number */}
              <span className="text-xs font-bold text-primary/50 uppercase tracking-widest mb-2">
                Step {i + 1}
              </span>
              <h3 className="font-bold text-lg text-dark mb-2">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed flex-1">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
