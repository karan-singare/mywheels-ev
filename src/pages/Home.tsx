import About from "../components/About";
import ContactSection from "../components/ContactUs";
import CTAStrip from "../components/CTAStrip";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import PricingCard from "../components/PricingCard";
import Section from "../components/Section";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Section id="how" title="How It Works" subtitle="Register, verify, choose your plan, and start earning—simple and fast." variant="light">
        <HowItWorks />
      </Section>

      <Section
        id="pricing"
        title="Pricing Details"
        subtitle="Weekly, monthly, or long-term fleet plans. Final pricing may vary based on vehicle type and usage category."
        variant="tint"
      >
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          <PricingCard
            title="Weekly Plan"
            price="1,499"
            period="/week"
            features={["Ideal for short-term or trial usage.", "7 days.", "Great for testing the fit."]}
          />
          <PricingCard
            title="Monthly Plan"
            price="4,999"
            period="/month"
            featured
            features={["Most preferred by full-time delivery partners.", "30 days.", "Predictable monthly expense."]}
          />
          <PricingCard
            title="Long-Term Fleet Plan"
            price="—"
            period=""
            features={["3, 6, or 12 months.", "Lowest equivalent monthly cost with maintenance support and priority assistance."]}
          />
        </div>
        <p className="text-center text-muted max-w-2xl mt-8 mx-auto text-sm">
          Contact us for exact rates based on your usage.
        </p>
      </Section>

      <Section id="contact" title="Contact Us" subtitle="MyWheels EV Pvt Ltd — Reach out or visit us at Sundarnagar, Hyderabad." variant="light">
        <ContactSection />
      </Section>

      <CTAStrip />
    </>
  );
};

export default Home;
