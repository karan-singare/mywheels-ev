import About from "../components/About";
import ContactSection from "../components/ContactUs";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import PricingCard from "../components/PricingCard";
import Section from "../components/Section";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Section id="how" title="How It Works" subtitle="Rent an EV in four simple steps.">
        <HowItWorks />
      </Section>

      <Section
        id="pricing"
        title="Rental Plans"
        subtitle="Flexible options for delivery partners and commuters."
      >
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          <PricingCard title="Daily" price="299" period="/day" />
          <PricingCard title="Weekly" price="1,499" period="/week" featured />
          <PricingCard title="Monthly" price="4,999" period="/month" />
        </div>
        <p className="text-center text-muted max-w-2xl mt-8 mx-auto text-sm">
          Refundable Deposit: ₹1,000 · Late Fee: ₹300/day
        </p>
      </Section>

      <Section id="contact" title="Contact Us" subtitle="Reach out or visit our hub in Hyderabad.">
        <ContactSection />
      </Section>
    </>
  );
};

export default Home;
