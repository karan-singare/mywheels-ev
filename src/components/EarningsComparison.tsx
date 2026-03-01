import { useScrollReveal } from "../hooks/useScrollReveal";

const EarningsComparison: React.FC = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-gray-50">
      <div ref={ref} className="px-6 md:px-[60px] mx-auto max-w-7xl py-28 md:py-32">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <p className="text-primary font-semibold text-[13px] uppercase tracking-[0.25em] mb-3 scroll-reveal">
            Earnings Breakdown
          </p>
          <h2 className="text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] font-semibold text-dark tracking-[-0.02em] scroll-reveal scroll-reveal-delay-1">
            Maximize Your <span className="text-primary">Monthly Earnings</span>
          </h2>
          <div className="mt-5 w-12 h-[3px] rounded-full bg-primary mx-auto scroll-reveal scroll-reveal-delay-2" aria-hidden />
        </div>

        {/* Comparison cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Fuel Bike */}
          <div className="scroll-reveal scroll-reveal-delay-1 bg-white rounded-3xl p-10 border border-gray-200 relative overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-400 to-orange-400" />
            <div className="text-5xl mb-5">⛽</div>
            <h3 className="text-2xl font-bold text-red-500 mb-6">Fuel Bike</h3>
            <div className="space-y-4">
              {[
                { label: "Daily fuel cost", value: "₹250–₹400" },
                { label: "Maintenance/month", value: "₹1,500–₹2,500" },
                { label: "Monthly expense", value: "₹10,000–₹15,000" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                  <span className="text-muted">{item.label}</span>
                  <span className="font-semibold text-red-500">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-red-50 rounded-2xl border border-red-100">
              <p className="text-sm text-red-600 font-medium text-center">
                ❌ Higher expenses = Lower take-home income
              </p>
            </div>
          </div>

          {/* MyWheels EV */}
          <div className="scroll-reveal scroll-reveal-delay-2 bg-white rounded-3xl p-10 border-2 border-primary/20 relative overflow-hidden shadow-[0_8px_40px_rgba(24,76,186,0.1)]">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-green" />
            <div className="text-5xl mb-5">⚡</div>
            <h3 className="text-2xl font-bold text-primary mb-6">MyWheels EV</h3>
            <div className="space-y-4">
              {[
                { label: "Daily charging cost", value: "₹30–₹50" },
                { label: "Maintenance", value: "Included" },
                { label: "Monthly rental", value: "₹4,999/month" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center py-3 border-b border-primary/10 last:border-0">
                  <span className="text-muted">{item.label}</span>
                  <span className="font-semibold text-primary">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 bg-green/10 rounded-2xl border border-green/20">
              <p className="text-lg text-dark font-bold text-center">
                ✅ Save ₹5,000–₹10,000 <span className="text-primary">every month!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarningsComparison;
