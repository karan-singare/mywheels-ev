interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  featured?: boolean;
  features?: string[];
  tag?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period = "/day",
  featured = false,
  features = [],
  tag,
}) => {
  return (
    <div
      className={`relative rounded-3xl text-center transition-all duration-300 ${featured
          ? "bg-primary text-white shadow-[0_20px_60px_-12px_rgba(24,76,186,0.35)] md:scale-[1.06] border-2 border-primary z-10 hover:md:scale-[1.09] hover:shadow-[0_30px_70px_-12px_rgba(24,76,186,0.45)] p-12"
          : "bg-white shadow-[0_4px_32px_rgba(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(24,76,186,0.12)] hover:border-primary/40 hover:md:scale-[1.03] hover:-translate-y-1 p-10"
        }`}
    >
      {featured && (
        <div className="mb-5 inline-block px-5 py-1.5 rounded-full bg-green text-dark text-xs font-bold uppercase tracking-wider">
          Most Popular
        </div>
      )}
      {tag && (
        <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${featured ? "text-white/70" : "text-primary/60"}`}>
          {tag}
        </p>
      )}
      <h3 className={`font-bold text-xl mb-2 ${featured ? "text-white" : "text-dark"}`}>
        {title}
      </h3>
      <div className={`text-5xl font-extrabold mt-4 ${featured ? "text-white" : "text-primary"}`}>
        {price === "—" ? (
          <span className="text-lg font-semibold">Contact for pricing</span>
        ) : (
          <>₹{price}<span className="text-lg font-normal opacity-70">{period}</span></>
        )}
      </div>
      <ul className="mt-8 space-y-3 text-left">
        {features.map((f) => (
          <li
            key={f}
            className={`flex items-start gap-3 text-sm leading-relaxed ${featured ? "text-white/90" : "text-muted"}`}
          >
            <span className="mt-0.5 flex-shrink-0 text-green">✓</span>
            {f}
          </li>
        ))}
      </ul>
      <a
        href="tel:+919121969734"
        className={`mt-10 inline-block w-full py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg ${featured
            ? "bg-white text-primary hover:bg-gray-50"
            : "bg-primary text-white hover:bg-primary/90"
          }`}
      >
        Get Started
      </a>
    </div>
  );
};

export default PricingCard;
