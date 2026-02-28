import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#", scrollTop: true },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(() =>
    typeof window !== "undefined" ? window.location.hash : ""
  );

  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
    setActiveHash("");
    setOpen(false);
  };

  const closeMenu = () => setOpen(false);

  const isActive = (link: (typeof navLinks)[0]) =>
    link.scrollTop ? activeHash === "" || activeHash === "#" : activeHash === link.href;

  const linkClass = (link: (typeof navLinks)[0]) =>
    `px-4 py-2 rounded-lg font-medium transition-colors ${
      isActive(link)
        ? "text-primary bg-primary/10"
        : "text-dark hover:text-primary hover:bg-primary/5"
    }`;
  const mobileLinkClass = (link: (typeof navLinks)[0]) =>
    `block py-3 px-4 rounded-lg font-medium transition-colors ${
      link.scrollTop ? "w-full text-left" : ""
    } ${isActive(link) ? "text-primary bg-primary/10" : "text-dark hover:bg-primary/5 hover:text-primary"}`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200/80 shadow-sm">
      <div className="px-6 md:px-[60px] py-3">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <button type="button" onClick={scrollToTop} className="flex items-center focus:outline-none focus:ring-2 focus:ring-primary/30 rounded-lg">
            <img src={`${import.meta.env.BASE_URL}mywheels-ev.png`} alt="MyWheels EV" className="h-16 md:h-20" />
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.scrollTop ? (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => { scrollToTop(); closeMenu(); }}
                  className={linkClass(link)}
                >
                  {link.label}
                </button>
              ) : (
                <a key={link.href} href={link.href} className={linkClass(link)}>
                  {link.label}
                </a>
              )
            )}
          </nav>

          <button
            type="button"
            className="md:hidden p-2 text-2xl text-dark hover:bg-gray-100 rounded-lg"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {open && (
          <nav className="md:hidden mt-4 pt-4 pb-2 border-t border-gray-200 space-y-1">
            {navLinks.map((link) =>
              link.scrollTop ? (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => { scrollToTop(); closeMenu(); }}
                  className={mobileLinkClass(link)}
                >
                  {link.label}
                </button>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={mobileLinkClass(link)}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
