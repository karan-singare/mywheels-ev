import { useScrollReveal } from "../hooks/useScrollReveal";

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="bg-white">
      <div ref={ref} className="px-6 md:px-[60px] mx-auto max-w-7xl py-28 md:py-32">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-[13px] uppercase tracking-[0.25em] mb-3 scroll-reveal">
            Who We Are
          </p>
          <h2 className="text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] font-semibold text-dark tracking-[-0.02em] scroll-reveal scroll-reveal-delay-1">
            About <span className="text-primary">MyWheels EV</span>
          </h2>
          <div className="mt-5 w-12 h-[3px] rounded-full bg-primary mx-auto scroll-reveal scroll-reveal-delay-2" aria-hidden />
          <p className="mt-6 text-[17px] text-muted max-w-2xl mx-auto leading-[1.7] scroll-reveal scroll-reveal-delay-3">
            Hyderabad-based electric mobility company powering the people who keep the city moving. Affordable rentals, rapid support, and maximum uptime.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "⚡",
              title: "High Uptime",
              desc: "Vehicles that are always ready when you are. We keep you on the road earning, not waiting.",
              bg: "rgba(24,76,186,0.1)",
              color: "#184cba",
            },
            {
              icon: "💰",
              title: "Cost Efficiency",
              desc: "Save ₹300–₹500 daily compared to fuel bikes. Maximize your take-home income every month.",
              bg: "rgba(64,177,175,0.1)",
              color: "#40b1af",
            },
            {
              icon: "🛠",
              title: "Rapid Local Support",
              desc: "On-ground assistance in Hyderabad that minimizes downtime. We're just a call away.",
              bg: "rgba(132,208,110,0.1)",
              color: "#84d06e",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className={`scroll-reveal scroll-reveal-delay-${i + 1} bg-white p-12 rounded-3xl shadow-[0_4px_32px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(24,76,186,0.12)] hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-300 group`}
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-7 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: item.bg, color: item.color }}
              >
                {item.icon}
              </div>
              <h3 className="font-bold text-xl text-dark mb-3">{item.title}</h3>
              <p className="text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
