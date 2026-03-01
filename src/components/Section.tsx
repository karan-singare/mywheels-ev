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
  else if (variant === "tint") variantBg = "bg-primary/[0.04]";

  return (
    <section id={id} className={variantBg}>
      <div
        className={`px-6 md:px-[60px] mx-auto max-w-7xl ${tightTop ? "pt-4 md:pt-8 pb-28 md:pb-32" : "py-28 md:py-32"} ${className}`}
      >
        {title && (
          <div className="text-center mb-14 md:mb-16">
            <h2 className="text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] font-semibold text-dark tracking-[-0.02em]">
              {title}
            </h2>
            <div className="mt-5 w-12 h-[3px] rounded-full bg-primary mx-auto" aria-hidden />
            {subtitle ? (
              <p className="mt-5 text-muted text-[17px] max-w-2xl mx-auto leading-[1.7]">{subtitle}</p>
            ) : (
              <div className="mt-5" />
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
