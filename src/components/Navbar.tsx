import { useState } from "react";

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <header className="bg-white border-b border-gray-200 px-6 md:px-[60px] relative">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center cursor-pointer" onClick={scrollToTop}>
                    <img src={`${import.meta.env.BASE_URL}mywheels-ev.png`} alt="logo" className="h-20" />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center">
                    <a className="ml-[24px] font-medium" href="#about">About</a>
                    <a className="ml-[24px] font-medium" href="#how">How It Works</a>
                    <a className="ml-[24px] font-medium" href="#pricing">Pricing</a>
                    <a className="ml-[24px] font-medium" href="#contact">Contact</a>
                </nav>

                {/* Hamburger Button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Dropdown */}
            {open && (
                <div className="md:hidden mt-4 space-y-4 pb-4">
                    <a href="#about" className="block">About</a>
                    <a href="#how" className="block">How It Works</a>
                    <a href="#pricing" className="block">Pricing</a>
                    <a href="#contact" className="block">Contact</a>
                </div>
            )}
        </header>
    );
};

export default Navbar;

