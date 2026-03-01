import Section from "./Section";

export default function About() {
  const iconStyles: Record<string, { bg: string; color: string }> = {
    primary: { bg: "rgba(24,76,186,0.15)", color: "#184cba" },
    teal: { bg: "rgba(64,177,175,0.15)", color: "#40b1af" },
    green: { bg: "rgba(132,208,110,0.15)", color: "#84d06e" },
  };

  return (
    <Section id="about" tightTop variant="tint">
      <div className="flex flex-col items-center text-center mx-auto">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Who we are</p>
        <h2 className="text-3xl md:text-5xl font-bold text-dark">
          About <span className="text-primary">MyWheels EV</span>
        </h2>
        <div className="mt-3 w-12 h-1 rounded-full bg-primary mx-auto" aria-hidden />
        <p className="mt-6 text-lg text-muted max-w-3xl mx-auto">
          MyWheels EV is a Hyderabad-based electric mobility company, strategically operating out of{" "}
          <span className="font-medium text-dark">Ameerpet</span>—a central hub that seamlessly connects IT corridors,
          residential communities, and high-density commercial zones. We power the people who keep the city moving.
        </p>
        <p className="mt-4 text-muted max-w-3xl mx-auto">
          Our electric two-wheeler rentals are purpose-built for today’s fast-paced workforce—serving delivery partners
          across platforms like Blinkit, Zepto, Swiggy Instamart, Zomato, Swiggy, as well as last-mile operators
          working with Amazon and Flipkart. We also support gig workers and corporate field teams who rely on
          dependable mobility to perform at their best.
        </p>
        <p className="mt-6 text-dark font-medium max-w-2xl mx-auto">
          At MyWheels EV, we recognize a simple but critical truth: <span className="text-primary">mobility is income.</span>{" "}
          When a vehicle is down, productivity drops. When it’s reliable, earnings grow.
        </p>
        <p className="mt-4 text-muted max-w-2xl mx-auto">
          That’s why we are built around three core promises:
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-8">
        {[
          {
            icon: "⚡",
            title: "High Uptime",
            desc: "Vehicles that are always ready when you are.",
            color: "primary",
          },
          {
            icon: "💰",
            title: "Cost Efficiency",
            desc: "Affordable plans that maximize take-home earnings.",
            color: "teal",
          },
          {
            icon: "🔧",
            title: "Rapid Local Support",
            desc: "On-ground assistance that minimizes downtime.",
            color: "green",
          },
        ].map((item) => {
          const style = iconStyles[item.color];
          return (
            <div
              key={item.title}
              className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50 border-2 border-transparent hover:shadow-xl hover:border-primary/30 transition-all duration-300 group overflow-hidden"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: style.bg, color: style.color }}
              >
                {item.icon}
              </div>
              <h3 className="font-bold text-lg text-dark mb-3">{item.title}</h3>
              <p className="text-muted leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Why MyWheels EV strip */}
      <div className="mt-20 relative rounded-2xl overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-tertiary parallax-bg opacity-90"
          aria-hidden
        />
        <div className="absolute inset-0 bg-grid-pattern" aria-hidden />
        <div className="relative z-10 p-10 md:p-14 text-center text-white">
          <h3 className="text-xl font-bold mb-6">Why MyWheels EV</h3>
          <ul className="text-left max-w-2xl mx-auto space-y-3 text-white/95">
            <li><strong>Built for high-demand fleet usage</strong> – Optimized for 100–140 km daily usage and dense traffic conditions across Hyderabad.</li>
            <li><strong>Lower operating costs</strong> – Reduced running costs compared to petrol vehicles, increasing rider take-home income.</li>
            <li><strong>Local presence</strong> – Headquartered in ESI for faster support and on-ground response.</li>
            <li><strong>Minimal downtime</strong> – Regular preventive maintenance and structured support.</li>
            <li><strong>Transparent plans</strong> – Clear pricing with predictable weekly and monthly expenses.</li>
          </ul>
          <p className="mt-8 text-white/90 max-w-2xl mx-auto">
            Whether you're an independent gig worker optimizing daily earnings or a corporate team scaling field operation,{" "}
            <span className="font-semibold text-green">MyWheels EV</span> delivers mobility that works as hard as you do.
          </p>
        </div>
      </div>
    </Section>
  );
}
