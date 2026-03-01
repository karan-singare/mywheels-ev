import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#", scrollTop: true },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = ["about", "how", "pricing", "faq", "contact"] as const;
const ACTIVE_OFFSET = 150;

function getActiveSection(): string {
  let active = "";
  for (const id of SECTION_IDS) {
    const el = document.getElementById(id);
    if (!el) continue;
    const rect = el.getBoundingClientRect();
    if (rect.top <= ACTIVE_OFFSET) active = "#" + id;
  }
  return active;
}

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setActiveHash(getActiveSection());
      setScrolled(window.scrollY > 20);
    };
    const onHashChange = () => setActiveHash(window.location.hash || getActiveSection());
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHashChange);
    };
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

  const linkClass = (link: (typeof navLinks)[0]) => {
    const active = isActive(link);
    return `px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 ${active
      ? "text-primary bg-primary/10"
      : scrolled
        ? "text-dark hover:text-primary hover:bg-primary/5"
        : "text-white/90 hover:text-white hover:bg-white/10"
      }`;
  };

  const mobileLinkClass = (link: (typeof navLinks)[0]) =>
    `block py-3 px-4 rounded-xl font-medium transition-colors ${link.scrollTop ? "w-full text-left" : ""
    } ${isActive(link) ? "text-primary bg-primary/10" : "text-dark hover:bg-primary/5 hover:text-primary"}`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/95 backdrop-blur-lg border-b border-gray-200/80 shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="px-6 md:px-[60px] py-2 md:py-3">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <button type="button" onClick={scrollToTop} className="flex items-center focus:outline-none focus:ring-2 focus:ring-primary/30 rounded-xl">
            <img
              src={`${import.meta.env.BASE_URL}mywheels-ev.webp`}
              alt="MyWheels EV"
              className={`h-10 md:h-14 transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"
                }`}
            />
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
            className={`md:hidden p-2 text-2xl rounded-xl transition-colors ${scrolled ? "text-dark hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {open && (
          <nav className="md:hidden mt-3 pt-3 pb-2 border-t border-gray-200 space-y-1 bg-white rounded-2xl px-2">
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
