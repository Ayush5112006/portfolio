import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "AI/ML", href: "#ai-focus" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let ticking = false;

    const detect = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      let active = "";
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          active = "#" + sections[i];
          break;
        }
      }
      setActiveSection(active);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        detect();
        ticking = false;
      });
    };

    detect();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeAndGo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    setActiveSection(href);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(() => {
      const el = document.getElementById(href.replace("#", ""));
      if (!el) return;
      el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    }, 350);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl border-b shadow-lg"
          : "bg-transparent"
      }`}
      style={{
        background: scrolled
          ? "hsl(225 45% 8% / 0.78)"
          : "transparent",
        borderColor: scrolled
          ? "hsl(225 30% 16% / 0.4)"
          : "transparent",
      }}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-[72px] px-4">
        {/* Logo */}
        <a href="#home" className="group text-xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          <span className="logo-accent transition-transform duration-300 inline-block group-hover:-translate-x-0.5">&lt;</span>
          Ayush
          <span className="logo-accent transition-transform duration-300 inline-block group-hover:translate-x-0.5">.Dev /&gt;</span>
        </a>

        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex items-center gap-1 p-1.5 rounded-2xl"
          style={{
            background: "hsl(225 45% 10% / 0.5)",
            border: "1px solid hsl(225 30% 16% / 0.5)",
            boxShadow: "inset 0 1px 0 hsl(0 0% 100% / 0.04)",
          }}
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const active = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className="nav-item"
                data-active={active}
                aria-current={active ? "true" : undefined}
              >
                <span className="relative z-10">{link.label}</span>
                {active && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute inset-x-2 -bottom-0.5 h-[2px] rounded-full"
                    style={{
                      background: "linear-gradient(to right, hsl(199 89% 60%), hsl(271 81% 56%))",
                      boxShadow: "0 0 10px hsl(199 89% 60% / 0.7)",
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA + Mobile */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden lg:inline-flex btn-primary-custom text-[13px] py-2.5 px-5"
          >
            Get In Touch
            <i className="fa-solid fa-arrow-right text-[11px] btn-arrow" aria-hidden="true" />
          </a>
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t"
            id="mobile-menu"
            style={{
              background: "hsl(225 45% 8% / 0.95)",
              backdropFilter: "blur(20px)",
              borderColor: "hsl(225 30% 16% / 0.4)",
            }}
          >
            <div className="container mx-auto py-4 px-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.3 }}
                  onClick={(e) => closeAndGo(e, link.href)}
                  data-active={activeSection === link.href}
                  className="nav-item px-4 py-3 text-sm rounded-lg"
                >
                  <span className="relative z-10">{link.label}</span>
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                onClick={(e) => closeAndGo(e, "#contact")}
                className="btn-primary-custom justify-center px-4 py-3 text-sm rounded-lg mt-3"
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
