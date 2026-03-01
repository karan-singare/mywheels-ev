import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const faqs = [
  {
    q: "Do I need my own license?",
    a: "Yes, you need a valid two-wheeler driving license to rent an EV from MyWheels. This is mandatory for KYC verification and legal compliance.",
  },
  {
    q: "What documents are required?",
    a: "You'll need your Aadhaar card, driving license, one passport-size photo, and a current address proof. The verification process is quick and simple.",
  },
  {
    q: "How fast is vehicle allocation?",
    a: "Once your KYC is approved, vehicle allocation typically happens within 24–48 hours. In most cases, you can start riding the same day!",
  },
  {
    q: "Is maintenance included?",
    a: "Yes! All regular maintenance and servicing is handled by our team at no extra cost. You just ride and earn — we take care of the rest.",
  },
  {
    q: "What if the vehicle breaks down?",
    a: "Our local support team in Hyderabad is available to assist you. Call us and we'll arrange roadside assistance or a replacement vehicle as quickly as possible.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useScrollReveal();

  return (
    <section id="faq" className="bg-white">
      <div ref={ref} className="px-6 md:px-[60px] mx-auto max-w-7xl py-28 md:py-32">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <p className="text-primary font-semibold text-[13px] uppercase tracking-[0.25em] mb-3 scroll-reveal">
            Got Questions?
          </p>
          <h2 className="text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] font-semibold text-dark tracking-[-0.02em] scroll-reveal scroll-reveal-delay-1">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="mt-5 w-12 h-[3px] rounded-full bg-primary mx-auto scroll-reveal scroll-reveal-delay-2" aria-hidden />
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-colors duration-300 ${isOpen
                    ? "border-primary/30 shadow-[0_8px_30px_rgba(24,76,186,0.1)] bg-white"
                    : "border-gray-200 bg-gray-50 hover:border-primary/20 hover:bg-white"
                  }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-7 md:px-8 py-6 text-left"
                >
                  <span
                    className={`font-semibold text-lg pr-4 transition-colors duration-200 ${isOpen ? "text-primary" : "text-dark"
                      }`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-lg font-bold flex-shrink-0 transition-all duration-300 ${isOpen
                        ? "bg-primary text-white rotate-45"
                        : "bg-gray-200 text-mutedLight rotate-0"
                      }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="px-7 md:px-8 pb-6 text-muted leading-[1.7]">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
