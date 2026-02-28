import Section from "./Section"

export default function About() {
    return (
        <Section id="about">
            {/* Top Intro Block */}
            <div className="flex flex-col items-center text-center mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold">
                    About <span className="text-primary">MyWheels-EV</span>
                </h2>

                <p className="mt-6 text-lg text-muted max-w-3xl mx-auto md:mx-0">
                    MyWheels EV is a Hyderabad-based electric bike rental platform
                    designed for delivery partners and daily commuters.
                </p>
            </div>

            {/* Core Value Grid */}
            <div className="mt-14 grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                    <div className="flex flex-row align-center gap-2">
                        <div className="text-primary text-2xl mb-4">⚡</div>
                        <h3 className="font-semibold text-lg mb-3">
                            Affordable & Accessible
                        </h3>
                    </div>
                    <p className="text-muted">
                        We make clean mobility affordable, accessible, and reliable
                        with flexible rental plans built around gig-worker income cycles.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                    <div className="flex flex-row align-center gap-2">
                        <div className="text-primary text-2xl mb-4">📋</div>
                        <h3 className="font-semibold text-lg mb-3">
                            Quick & Simple KYC
                        </h3>
                    </div>
                    <p className="text-muted">
                        Fast onboarding with minimal documentation so you can
                        start earning without delays.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                    <div className="flex flex-row align-center gap-2">
                        <div className="text-primary text-2xl mb-4">🔧</div>
                        <h3 className="font-semibold text-lg mb-3">
                            Zero Ownership Stress
                        </h3>
                    </div>
                    <p className="text-muted">
                        We handle vehicle maintenance, support, and pickup hubs —
                        so you focus on work, not the vehicle.
                    </p>
                </div>
            </div>

            {/* Supporting Description */}
            <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 p-10 rounded-2xl text-center">
                <p className="text-lg font-medium max-w-3xl mx-auto">
                    With simple rental plans, quick KYC, and a growing network of hubs,
                    we empower riders to switch to electric without the hassle of ownership.
                </p>

                <p className="mt-6 text-muted max-w-3xl mx-auto">
                    Whether you're delivering food or commuting to work,
                    <span className="text-primary font-semibold">
                        {" "}MyWheels EV is your partner for a greener ride.
                    </span>
                </p>
            </div>
        </Section>
    )
}
