interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  featured?: boolean;
  features?: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period = "/day",
  featured = false,
  features = [],
}) => {
  const defaultFeatures: Record<string, string[]> = {
    Daily: ["Full day rental", "Pick & return same day", "Ideal for trials"],
    Weekly: ["7 days", "Best for short gigs", "Great value"],
    Monthly: ["30 days", "Best for regular riders", "Lowest per-day rate"],
  };
  const list = features.length ? features : defaultFeatures[title] || [];

  return (
    <div
      className={`relative rounded-2xl p-8 text-center transition-all duration-300 ${
        featured
          ? "bg-primary text-white shadow-xl shadow-primary/25 scale-105 border-2 border-primary z-10"
          : "bg-white shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:border-primary/20"
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-green text-dark text-xs font-bold uppercase tracking-wide">
          Most popular
        </div>
      )}
      <h3 className={`font-bold text-lg mb-1 ${featured ? "text-white" : "text-dark"}`}>
        {title}
      </h3>
      <div className={`text-4xl font-bold mt-4 ${featured ? "text-white" : "text-primary"}`}>
        ₹{price}
        <span className="text-lg font-normal opacity-80">{period}</span>
      </div>
      <ul className="mt-6 space-y-3 text-left">
        {list.map((f) => (
          <li
            key={f}
            className={`flex items-center gap-2 text-sm ${featured ? "text-white/90" : "text-muted"}`}
          >
            <span className="text-green">✓</span>
            {f}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={`mt-8 inline-block w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
          featured
            ? "bg-white text-primary hover:bg-gray-100"
            : "bg-primary text-white hover:bg-primary/90"
        }`}
      >
        Get started
      </a>
    </div>
  );
};

export default PricingCard;
