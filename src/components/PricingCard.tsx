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
    Weekly: ["Ideal for short-term or trial usage", "7 days", "Great for testing the fit"],
    Monthly: ["Most preferred by full-time delivery partners", "30 days", "Predictable monthly expense"],
    "Long-Term Fleet": ["3, 6, or 12 months", "Lowest equivalent monthly cost", "Maintenance support & priority assistance"],
  };
  const list = features.length ? features : defaultFeatures[title] || [];

  return (
    <div
      className={`relative rounded-2xl p-8 text-center transition-all duration-300 ${
        featured
          ? "bg-primary text-white shadow-xl shadow-primary/25 scale-105 border-2 border-primary z-10 hover:scale-[1.08] hover:shadow-2xl focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
          : "bg-white shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/40 hover:scale-[1.02] focus-within:ring-2 focus-within:ring-primary/50 focus-within:ring-offset-2"
      }`}
    >
      {featured && (
        <div className="mb-4 inline-block px-4 py-1.5 rounded-full bg-green text-dark text-xs font-bold uppercase tracking-wide">
          Most popular
        </div>
      )}
      <h3 className={`font-bold text-lg mb-1 ${featured ? "text-white" : "text-dark"}`}>
        {title}
      </h3>
      <div className={`text-4xl font-bold mt-4 ${featured ? "text-white" : "text-primary"}`}>
        {price === "—" ? (
          <span className="text-lg font-semibold">Contact for pricing</span>
        ) : (
          <>₹{price}<span className="text-lg font-normal opacity-80">{period}</span></>
        )}
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
        href="tel:+919121969734"
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
