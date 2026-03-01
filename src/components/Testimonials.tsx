import { useScrollReveal } from "../hooks/useScrollReveal";

const testimonials = [
  {
    name: "Ravi Kumar",
    location: "Ameerpet, Hyderabad",
    quote: "Switched to MyWheels EV 3 months ago. I save over ₹400 daily on fuel and the vehicle never lets me down during peak orders.",
    initials: "RK",
    color: "from-primary to-secondary",
  },
  {
    name: "Syed Imran",
    location: "Kukatpally, Hyderabad",
    quote: "The support team is just one call away. Had a minor issue once and they resolved it within an hour. Best EV rental service in the city!",
    initials: "SI",
    color: "from-tertiary to-teal",
  },
  {
    name: "Priya Sharma",
    location: "Madhapur, Hyderabad",
    quote: "As a woman delivery partner, I feel safe with the reliable EV. Low cost, zero breakdowns, and I'm earning more than ever before.",
    initials: "PS",
    color: "from-green to-mint",
  },
];

const StarRating = () => (
  <div className="flex gap-1 mb-4">
    {[1, 2, 3, 4, 5].map((s) => (
      <svg key={s} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Testimonials: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-gradient-to-b from-primary/[0.04] to-primary/[0.08]">
      <div ref={ref} className="px-6 md:px-[60px] mx-auto max-w-7xl py-28 md:py-32">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <p className="text-primary font-semibold text-[13px] uppercase tracking-[0.25em] mb-3 scroll-reveal">
            What Riders Say
          </p>
          <h2 className="text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] font-semibold text-dark tracking-[-0.02em] scroll-reveal scroll-reveal-delay-1">
            Trusted by <span className="text-primary">Delivery Heroes</span>
          </h2>
          <div className="mt-5 w-12 h-[3px] rounded-full bg-primary mx-auto scroll-reveal scroll-reveal-delay-2" aria-hidden />
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`scroll-reveal scroll-reveal-delay-${i + 1} bg-white rounded-3xl p-10 shadow-[0_4px_32px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(24,76,186,0.12)] hover:-translate-y-1.5 transition-all duration-300`}
            >
              {/* Stars */}
              <StarRating />
              {/* Quote icon */}
              <div className="text-primary/15 text-6xl font-serif leading-none mb-3">"</div>
              <p className="text-muted leading-relaxed mb-8">{t.quote}</p>
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-base shadow-lg`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-dark">{t.name}</p>
                  <p className="text-sm text-mutedLight">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
