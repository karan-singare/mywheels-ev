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
          About <span className="text-primary">MyWheels-EV</span>
        </h2>
        <div className="mt-3 w-12 h-1 rounded-full bg-primary mx-auto" aria-hidden />
        <p className="mt-6 text-lg text-muted max-w-3xl mx-auto">
          MyWheels EV is a Hyderabad-based electric bike rental platform
          designed for delivery partners and daily commuters.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-8">
        {[
          {
            icon: "⚡",
            title: "Affordable & Accessible",
            desc: "We make clean mobility affordable and reliable with flexible rental plans built around gig-worker income cycles.",
            color: "primary",
          },
          {
            icon: "📋",
            title: "Quick & Simple",
            desc: "Fast onboarding with minimal documentation so you can start earning without delays.",
            color: "teal",
          },
          {
            icon: "🔧",
            title: "Zero Ownership Stress",
            desc: "We handle vehicle maintenance, support, and pickup hubs — so you focus on work, not the vehicle.",
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

      {/* Parallax-style strip */}
      <div className="mt-20 relative rounded-2xl overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-tertiary parallax-bg opacity-90"
          aria-hidden
        />
        <div className="absolute inset-0 bg-grid-pattern" aria-hidden />
        <div className="relative z-10 p-10 md:p-14 text-center text-white">
          <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            With simple rental plans, quick verification, and a growing network of hubs,
            we empower riders to switch to electric without the hassle of ownership.
          </p>
          <p className="mt-6 text-white/90 max-w-2xl mx-auto">
            Whether you're delivering food or commuting to work,{" "}
            <span className="font-semibold text-green">MyWheels EV</span> is your partner for a greener ride.
          </p>
        </div>
      </div>
    </Section>
  );
}
