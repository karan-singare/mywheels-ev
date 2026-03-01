const Hero: React.FC = () => {
  const bgImage = `${import.meta.env.BASE_URL}home-bg.webp`;

  return (
    <section className="relative min-h-screen min-h-[100dvh] w-full flex flex-col -mt-[60px] md:-mt-[72px]">
      {/* Full-bleed background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-hidden
      />
      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background:
            "linear-gradient(135deg, rgba(20,28,108,0.92) 0%, rgba(24,76,186,0.85) 30%, rgba(28,41,139,0.88) 60%, rgba(20,28,108,0.90) 100%)",
          backgroundSize: "200% 200%",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" aria-hidden />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" aria-hidden />
      <div className="absolute bottom-32 right-10 w-96 h-96 bg-tertiary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} aria-hidden />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-green/15 rounded-full blur-2xl animate-float" style={{ animationDelay: "3s" }} aria-hidden />

      {/* Hero content */}
      <div className="relative z-10 flex flex-1 items-center px-6 md:px-16 pt-32 pb-16">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left side — text */}
          <div className="max-w-xl">
            <p
              className="text-green text-sm font-semibold uppercase tracking-[0.25em] mb-6 animate-fade-in-up"
            >
              Electric Mobility · Hyderabad
            </p>
            <h1
              className="text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] font-bold text-white mb-7 animate-fade-in-up tracking-[-0.03em] leading-[1.1]"
              style={{ animationDelay: "0.1s" }}
            >
              We Power Hyderabad's{" "}
              <span className="text-green">Delivery Heroes</span> ⚡
            </h1>
            <p
              className="text-[17px] md:text-lg text-white/80 max-w-md mb-12 leading-[1.75] animate-fade-in-up font-normal"
              style={{ animationDelay: "0.2s" }}
            >
              Reliable electric two-wheelers built for gig workers who want zero downtime and higher earnings.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-5 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-10 py-[18px] rounded-2xl font-semibold text-dark bg-green hover:bg-[#7ac766] shadow-xl shadow-green/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl text-[15px] tracking-wide"
              >
                View Plans
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-10 py-[18px] rounded-2xl font-medium text-white/80 border border-white/25 hover:bg-white/10 hover:border-white/40 hover:text-white transition-all duration-300 hover:scale-[1.03] text-[15px]"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right side — EV image with float + glow */}
          <div className="hidden md:flex justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative animate-float" style={{ animationDuration: "6s" }}>
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/40 via-tertiary/25 to-green/15 rounded-[2rem] blur-3xl animate-soft-glow" aria-hidden />
              <img
                src={`${import.meta.env.BASE_URL}home-bg.webp`}
                alt="Electric two-wheeler"
                className="relative rounded-3xl shadow-2xl shadow-black/40 max-h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#trust"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer z-10"
        aria-label="Scroll to next section"
      >
        <span className="text-[11px] uppercase tracking-[0.2em] font-medium">Scroll</span>
        <div className="w-5 h-9 rounded-full border border-white/40 flex justify-center pt-1.5">
          <div className="w-1 h-1.5 rounded-full bg-white animate-bounce" />
        </div>
      </a>
    </section>
  );
};

export default Hero;
