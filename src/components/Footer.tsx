import Reveal from "./Reveal";

const Footer = () => {
  const socials = [
    { icon: "fa-brands fa-github", href: "https://github.com/Ayush5112006/", label: "GitHub profile" },
    { icon: "fa-brands fa-linkedin", href: "https://www.linkedin.com/in/ayush-thummar-471720309/", label: "LinkedIn profile" },
    { icon: "fa-solid fa-globe", href: "https://ayushthummar.netlify.app/", label: "Portfolio website" },
    { icon: "fa-solid fa-envelope", href: "mailto:thummarayush05@gmail.com", label: "Send an email" },
  ];

  return (
    <footer
      className="pt-14 pb-10 px-4 relative overflow-hidden"
      style={{
        borderTop: "1px solid hsl(225 30% 16% / 0.5)",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Gradient hairline */}
      <span
        className="absolute top-0 left-1/2 h-px w-1/3 -translate-x-1/2"
        style={{
          background:
            "linear-gradient(to right, transparent, hsl(199 89% 60% / 0.6), hsl(271 81% 56% / 0.6), transparent)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[560px] h-[240px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, hsl(199 89% 60% / 0.10), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto relative">
        {/* Identity */}
        <Reveal className="text-center mb-8" y={24} blur={8}>
          <p
            className="text-2xl md:text-3xl font-bold tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Ayush <span className="gradient-text-animated">Thummar</span>
          </p>
          <p className="text-sm text-muted-foreground mt-1.5 tracking-wide">
            AI/ML &amp; Software Developer
          </p>
        </Reveal>

        {/* Top row */}
        <Reveal delay={0.1} y={18} blur={6}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
            {/* Logo */}
            <a
              href="#home"
              className="group text-lg font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span style={{ color: "hsl(199 89% 60%)" }}>&lt;</span>
              Ayush
              <span style={{ color: "hsl(199 89% 60%)" }}>.Dev /&gt;</span>
            </a>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:text-foreground hover:border-primary/50 hover:shadow-[0_0_20px_hsl(199_89%_60%/_0.25)]"
                  style={{
                    background: "hsl(225 40% 12%)",
                    border: "1px solid hsl(225 30% 18%)",
                  }}
                  aria-label={s.label}
                  title={s.label}
                >
                  <i className={`${s.icon} text-sm`} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Bottom row */}
        <div
          className="pt-6 text-center text-sm text-muted-foreground"
          style={{ borderTop: "1px solid hsl(225 30% 16% / 0.3)" }}
        >
          <p>
            © {new Date().getFullYear()} Ayush Thummar. All rights reserved.
            {" · "}
            <a
              href="https://ayushthummar.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              style={{ color: "hsl(199 89% 65%)" }}
            >
              ayushthummar.netlify.app
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
