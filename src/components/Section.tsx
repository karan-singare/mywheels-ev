interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  tightTop?: boolean;
  variant?: "default" | "light" | "tint";
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = "",
  tightTop = false,
  variant = "default",
}) => {
  let variantBg = "";
  if (variant === "light") variantBg = "bg-white";
  else if (variant === "tint") variantBg = "bg-primary/[0.06]";

  return (
    <section id={id} className={variantBg}>
      <div
        className={`px-6 md:px-[60px] mx-auto max-w-7xl ${tightTop ? "pt-2 md:pt-4 pb-16 md:pb-24" : "py-16 md:py-24"} ${className}`}
      >
      {title && (
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            {title}
          </h2>
          <div className="mt-3 w-12 h-1 rounded-full bg-primary mx-auto" aria-hidden />
          {subtitle ? (
            <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">{subtitle}</p>
          ) : (
            <div className="mt-4" />
          )}
        </div>
      )}
      {children}
    </div>
    </section>
  );
};

export default Section;
