const CTAStrip: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-tertiary"
        aria-hidden
      />
      <div className="absolute inset-0 bg-dark/20" aria-hidden />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" aria-hidden />
      <div className="relative z-10 px-6 md:px-[60px] py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to ride?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Join hundreds of riders in Hyderabad. Choose a plan and get started in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-primary bg-white hover:bg-gray-100 shadow-lg transition-all duration-300"
            >
              View plans
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white border-2 border-white/80 hover:bg-white/15 transition-all duration-300"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAStrip;
