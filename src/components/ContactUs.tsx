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
    },
    {
      label: "Email",
      value: "support@mywheelsev.in",
      icon: "✉️",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.label}
            className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 text-center hover:shadow-xl hover:border-primary/20 transition-all duration-300"
          >
            <div className="text-3xl mb-3">{item.icon}</div>
            <p className="text-dark font-semibold">{item.label}</p>
            <p className="mt-1 text-muted">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
