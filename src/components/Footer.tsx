const Footer = () => {
  const socials = [
    { icon: "fa-brands fa-github", href: "https://github.com/Ayush5112006/" },
    { icon: "fa-brands fa-linkedin", href: "https://www.linkedin.com/in/ayush-thummar-471720309/" },
    { icon: "fa-brands fa-instagram", href: "#" },
    { icon: "fa-solid fa-envelope", href: "mailto:thummarayush05@gmail.com" },
  ];

  return (
    <footer
      className="py-12 px-4"
      style={{
        borderTop: "1px solid hsl(225 30% 16% / 0.4)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="container mx-auto">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <a
            href="#home"
            className="text-lg font-bold"
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
                className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-300"
                style={{
                  background: "hsl(225 40% 12%)",
                  border: "1px solid hsl(225 30% 18%)",
                }}
              >
                <i className={`${s.icon} text-sm`} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="pt-6 text-center text-sm text-muted-foreground"
          style={{ borderTop: "1px solid hsl(225 30% 16% / 0.3)" }}
        >
          <p>
            © {new Date().getFullYear()} Ayush Thummar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
