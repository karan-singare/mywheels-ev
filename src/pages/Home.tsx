import About from "../components/About";
import Card from "../components/Card";
import ContactSection from "../components/ContactUs";
import Hero from "../components/Hero";
import KYCForm from "../components/KYCForm";
import PricingCard from "../components/PricingCard";
import Section from "../components/Section";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Section id="how" title="How It Works">
        <div className="grid md:grid-cols-4 gap-6">
          <Card title="Choose a Plan">
            Daily, weekly or monthly rental options
          </Card>
          <Card title="Quick KYC">
            Basic verification & refundable deposit
          </Card>
          <Card title="Pick Your EV">
            Collect from our nearby hub
          </Card>
          <Card title="Ride & Earn">
            Focus on work, we handle the rest
          </Card>
        </div>
      </Section>

      <Section id="pricing" title="Rental Plans">
        <div className="grid md:grid-cols-3 gap-6">
          <PricingCard title="Daily" price="299" />
          <PricingCard title="Weekly" price="1,499" />
          <PricingCard title="Monthly" price="4,999" />
        </div>
        <p className="text-center text-muted max-w-2xl mt-5 mx-auto text-lg">
          Refundable Deposit: ₹1,000 · Late Fee: ₹300/day
        </p>
      </Section>

      <Section id="kyc" title="KYC Registration">
        <KYCForm />
      </Section>

      <Section id="contact" title="Contact Us">
        <ContactSection />
      </Section>
    </>
  );
};

export default Home;
