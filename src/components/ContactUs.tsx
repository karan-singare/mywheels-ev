const ContactSection: React.FC = () => {
  const items = [
    {
      label: "Hub Location",
      value: "SR Nagar, ESI, Hyderabad",
      icon: "📍",
    },
    {
      label: "Phone",
      value: "+91 91219 69734",
      icon: "📞",
      href: "tel:+919121969734",
    },
    {
      label: "Email",
      value: "support@mywheelsev.in",
      icon: "✉️",
      href: "mailto:support@mywheelsev.in",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item) => {
          const cardClass = "bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 text-center hover:shadow-xl hover:border-primary/30 transition-all duration-300 block";
          const content = (
            <>
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-2xl mx-auto mb-4">
                {item.icon}
              </div>
              <p className="text-dark font-semibold">{item.label}</p>
              <p className="mt-1 text-muted">{item.value}</p>
            </>
          );
          return item.href ? (
            <a
              key={item.label}
              href={item.href}
              className={cardClass}
            >
              {content}
            </a>
          ) : (
            <div key={item.label} className={cardClass}>
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactSection;
