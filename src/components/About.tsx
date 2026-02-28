import Section from "./Section";

export default function About() {
  return (
    <Section id="about">
      <div className="flex flex-col items-center text-center mx-auto">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Who we are</p>
        <h2 className="text-3xl md:text-5xl font-bold text-dark">
          About <span className="text-primary">MyWheels-EV</span>
        </h2>
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
            bg: "bg-primary/10",
            border: "hover:border-primary/30",
          },
          {
            icon: "📋",
            title: "Quick & Simple",
            desc: "Fast onboarding with minimal documentation so you can start earning without delays.",
            bg: "bg-teal/10",
            border: "hover:border-teal/30",
          },
          {
            icon: "🔧",
            title: "Zero Ownership Stress",
            desc: "We handle vehicle maintenance, support, and pickup hubs — so you focus on work, not the vehicle.",
            bg: "bg-green/10",
            border: "hover:border-green/30",
          },
        ].map((item, i) => (
          <div
            key={item.title}
            className={`bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50 border-2 border-transparent hover:shadow-xl transition-all duration-300 ${item.border} ${item.bg}`}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="font-bold text-lg text-dark mb-3">{item.title}</h3>
            <p className="text-muted leading-relaxed">{item.desc}</p>
          </div>
        ))}
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
