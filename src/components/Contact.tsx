import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Send, Loader2, CheckCircle, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import SpotlightCard from "./SpotlightCard";

const EMAIL = "thummarayush05@gmail.com";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const copyTimeout = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimeout.current) window.clearTimeout(copyTimeout.current);
    };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      if (copyTimeout.current) window.clearTimeout(copyTimeout.current);
      copyTimeout.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy automatically — please select the email manually");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send message");
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
      toast.success("Message sent! I'll get back to you soon 🚀");
      setTimeout(() => setSent(false), 4000);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding overflow-hidden" ref={ref} style={{ zIndex: 1, position: "relative" }}>
      {/* Conversion glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "720px",
          height: "720px",
          left: "50%",
          top: "-40%",
          transform: "translateX(-50%)",
          background:
            "radial-gradient(circle, hsl(199 89% 60% / 0.1) 0%, transparent 62%)",
        }}
        aria-hidden="true"
      />
      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="section-header text-center"
        >
          <span className="eyebrow ml-auto mr-auto">Contact</span>
          <h2 className="section-title">
            Let's Build <span className="gradient-text">Something Meaningful</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Open to AI/ML opportunities, software development roles, internships,
            collaborations, and challenging technical projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 w-full"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                aria-label="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="field"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                aria-label="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="field"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                aria-label="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="field resize-none"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary-custom w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
              ) : sent ? (
                <><CheckCircle className="h-4 w-4" /> Sent!</>
              ) : (
                <>Send Message <Send className="h-4 w-4" /></>
              )}
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30, filter: "blur(6px)" }}
            animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            <SpotlightCard className="glass-card p-7 md:p-8 space-y-6">
              <h3 className="text-xl font-bold mb-2">Let's Connect</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 group">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors flex-1 min-w-0"
                    aria-label={`Send an email to ${EMAIL}`}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 flex-shrink-0"
                      style={{
                        background: "hsl(199 89% 60% / 0.1)",
                        border: "1px solid hsl(199 89% 60% / 0.15)",
                      }}
                    >
                      <i className="fa-solid fa-envelope" style={{ color: "hsl(199 89% 60%)" }} aria-hidden="true" />
                    </div>
                    <span className="text-sm break-all">{EMAIL}</span>
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="shrink-0 inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-medium transition-all duration-200"
                    style={{
                      background: copied
                        ? "hsl(142 71% 45% / 0.12)"
                        : "hsl(225 40% 12%)",
                      color: copied ? "hsl(142 71% 60%)" : "hsl(215 20% 55%)",
                      border: copied
                        ? "1px solid hsl(142 71% 45% / 0.3)"
                        : "1px solid hsl(225 30% 18%)",
                    }}
                    aria-label={
                      copied
                        ? "Email copied to clipboard"
                        : `Copy ${EMAIL} to clipboard`
                    }
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5" aria-hidden="true" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" /> Copy
                      </>
                    )}
                  </button>
                  <span role="status" aria-live="polite" className="sr-only">
                    {copied ? "Email copied to clipboard" : ""}
                  </span>
                </div>
                <a
                  href="https://github.com/Ayush5112006/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  aria-label="View Ayush's GitHub profile (opens in a new tab)"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                    style={{
                      background: "hsl(199 89% 60% / 0.1)",
                      border: "1px solid hsl(199 89% 60% / 0.15)",
                    }}
                  >
                    <i className="fa-brands fa-github" style={{ color: "hsl(199 89% 60%)" }} aria-hidden="true" />
                  </div>
                  <span className="text-sm break-all">github.com/Ayush5112006</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ayush-thummar-471720309/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  aria-label="View Ayush's LinkedIn profile (opens in a new tab)"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                    style={{
                      background: "hsl(199 89% 60% / 0.1)",
                      border: "1px solid hsl(199 89% 60% / 0.15)",
                    }}
                  >
                    <i className="fa-brands fa-linkedin" style={{ color: "hsl(199 89% 60%)" }} aria-hidden="true" />
                  </div>
                  <span className="text-sm break-all">linkedin.com/in/ayush-thummar-471720309</span>
                </a>
                <a
                  href="https://ayushthummar.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                  aria-label="Visit Ayush's portfolio website (opens in a new tab)"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                    style={{
                      background: "hsl(199 89% 60% / 0.1)",
                      border: "1px solid hsl(199 89% 60% / 0.15)",
                    }}
                  >
                    <i className="fa-solid fa-globe" style={{ color: "hsl(199 89% 60%)" }} aria-hidden="true" />
                  </div>
                  <span className="text-sm break-all">ayushthummar.netlify.app</span>
                </a>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
