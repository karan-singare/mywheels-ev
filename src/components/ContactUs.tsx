import { useScrollReveal } from "../hooks/useScrollReveal";

const ContactSection: React.FC = () => {
  const ref = useScrollReveal();

  const items = [
    {
      label: "Address",
      value: "Plot no. 6, Sundarnagar, Hyderabad – 500038",
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
      value: "contactus@mywheelsev.com",
      icon: "✉️",
      href: "mailto:contactus@mywheelsev.com",
    },
  ];

  return (
    <div ref={ref} className="max-w-5xl mx-auto">
      {/* Contact cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {items.map((item, i) => {
          const cardClass = `scroll-reveal scroll-reveal-delay-${i + 1} bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 text-center hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 block`;
          const content = (
            <>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl mx-auto mb-4">
                {item.icon}
              </div>
              <p className="text-dark font-semibold text-lg">{item.label}</p>
              <p className="mt-2 text-muted leading-relaxed">{item.value}</p>
            </>
          );
          return item.href ? (
            <a key={item.label} href={item.href} className={cardClass}>
              {content}
            </a>
          ) : (
            <div key={item.label} className={cardClass}>
              {content}
            </div>
          );
        })}
      </div>

      {/* WhatsApp CTA */}
      <div className="scroll-reveal scroll-reveal-delay-4 text-center mb-10">
        <a
          href="https://wa.me/919121969734?text=Hi%2C%20I%27m%20interested%20in%20renting%20an%20EV%20from%20MyWheels."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white bg-[#25D366] hover:bg-[#1ebd5a] shadow-lg shadow-[#25D366]/20 transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Chat on WhatsApp
        </a>
      </div>

      {/* Google Map embed */}
      <div className="scroll-reveal scroll-reveal-delay-5 rounded-3xl overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100">
        <iframe
          title="MyWheels EV Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5!2d78.4447!3d17.4375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSundarnagar%2C+Hyderabad!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default ContactSection;
