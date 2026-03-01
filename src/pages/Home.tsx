import About from "../components/About";
import ContactSection from "../components/ContactUs";
import CTAStrip from "../components/CTAStrip";
import EarningsComparison from "../components/EarningsComparison";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import PricingCard from "../components/PricingCard";
import Section from "../components/Section";
import Testimonials from "../components/Testimonials";
import TrustSection from "../components/TrustSection";
import WhyElectric from "../components/WhyElectric";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <TrustSection />
      <About />
      <WhyElectric />

      <Section
        id="how"
        title="How It Works"
        subtitle="Register, verify, choose your plan, and start earning — simple and fast."
        variant="light"
      >
        <HowItWorks />
      </Section>

      <EarningsComparison />

      <Section
        id="pricing"
        title="Simple, Transparent Pricing"
        subtitle="Choose the plan that works for you. No hidden charges."
        variant="tint"
      >
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          <PricingCard
            title="Weekly Plan"
            price="1,499"
            period="/week"
            features={[
              "Ideal for short-term or trial usage",
              "7-day rental period",
              "Great for testing the fit",
              "No long-term commitment",
            ]}
          />
          <PricingCard
            title="Monthly Plan"
            price="4,999"
            period="/month"
            featured
            tag="Best for Full-Time Riders"
            features={[
              "Most preferred by delivery partners",
              "30-day rental period",
              "Predictable monthly expense",
              "Priority support included",
            ]}
          />
          <PricingCard
            title="Daily Plan"
            price="249"
            period="/day"
            features={[
              "Perfect for trying before committing",
              "No minimum period required",
              "Pay as you go flexibility",
              "Ideal for part-time riders",
            ]}
          />
        </div>
        <p className="text-center text-muted max-w-2xl mt-10 mx-auto text-sm">
          Contact us for exact rates based on your usage and vehicle preference.
        </p>
      </Section>

      <Testimonials />
      <FAQ />

      <Section
        id="contact"
        title="Get In Touch"
        subtitle="MyWheels EV Pvt Ltd — Ready to help you start earning with electric mobility."
        variant="light"
      >
        <ContactSection />
      </Section>

      <CTAStrip />
    </>
  );
};

export default Home;
