const steps = [
  { num: 1, title: "Choose a Plan", desc: "Daily, weekly or monthly rental options to match your schedule." },
  { num: 2, title: "Quick Verification", desc: "Basic verification & refundable deposit — start in no time." },
  { num: 3, title: "Pick Your EV", desc: "Collect your bike from our nearby hub in Hyderabad." },
  { num: 4, title: "Ride & Earn", desc: "Focus on work; we handle maintenance and support." },
];

const HowItWorks: React.FC = () => {
  return (
    <div className="relative">
      <div className="grid md:grid-cols-4 gap-8 md:gap-6 items-stretch">
        {steps.map((step, i) => (
          <div key={step.num} className="relative flex flex-col">
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/60 to-primary/20 z-0" style={{ width: "calc(100% + 1.5rem)" }} />
            )}
            <div className="relative z-10 flex flex-col flex-1 min-h-full bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl bg-primary text-white font-bold text-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-primary/20 shrink-0">
                {step.num}
              </div>
              <h3 className="font-bold text-lg text-dark mb-2">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed flex-1">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
