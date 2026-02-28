interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <section
      id={id}
      className={`px-6 md:px-[60px] py-16 md:py-24 mx-auto max-w-7xl ${className}`}
    >
      {title && (
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-muted text-lg max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
};

export default Section;
