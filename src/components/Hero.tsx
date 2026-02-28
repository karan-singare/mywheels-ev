const Hero: React.FC = () => {
  const bgImage = `${import.meta.env.BASE_URL}home-bg.webp`;

  return (
    <section className="relative min-h-screen min-h-[100dvh] w-full flex flex-col -mt-24 pt-24">
      {/* Full-bleed background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-hidden
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(20,28,108,0.72) 0%, rgba(20,28,108,0.62) 35%, rgba(20,28,108,0.68) 65%, rgba(20,28,108,0.78) 100%)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" aria-hidden />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" aria-hidden />
      <div className="absolute bottom-32 right-10 w-80 h-80 bg-teal/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} aria-hidden />
      <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-green/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} aria-hidden />

      {/* Hero content - pt-24 keeps it below the navbar */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 md:px-16 pt-24 pb-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#84d06e] text-sm md:text-base font-semibold uppercase tracking-widest mb-4 animate-fade-in-up drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]" style={{ color: "#a8e092" }}>
          Electric bike rentals · Hyderabad
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]" style={{ animationDelay: "0.1s" }}>
          Affordable EV Rentals for{" "}
          <span className="text-[#84d06e]">Everyday Riders</span>
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-10 animate-fade-in-up drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]" style={{ animationDelay: "0.2s" }}>
          Electric bikes for delivery partners and commuters. Simple plans, quick verification, zero ownership stress.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-[#141c6c] bg-[#84d06e] hover:bg-[#7ac766] shadow-lg shadow-black/20 transition-all duration-300 hover:scale-105"
          >
            View plans
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white bg-white/20 border-2 border-white/50 hover:bg-white/30 transition-all duration-300"
          >
            Contact us
          </a>
        </div>
        </div>
      </div>

      {/* Scroll indicator - scrolls to About */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer"
        aria-label="Scroll to next section"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/60 flex justify-center pt-1">
          <div className="w-1 h-2 rounded-full bg-white animate-bounce" />
        </div>
      </a>
    </section>
  );
};

export default Hero;
