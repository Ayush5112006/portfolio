import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

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
    <section id="contact" className="section-padding" ref={ref} style={{ zIndex: 1, position: "relative" }}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header text-center"
        >
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? Let's work together
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
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl outline-none transition-all text-foreground placeholder:text-muted-foreground"
                style={{
                  background: "hsl(225 40% 12%)",
                  border: "1px solid hsl(225 30% 18%)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "hsl(199 89% 60% / 0.5)";
                  e.currentTarget.style.boxShadow = "0 0 20px hsl(199 89% 60% / 0.08)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "hsl(225 30% 18%)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl outline-none transition-all text-foreground placeholder:text-muted-foreground"
                style={{
                  background: "hsl(225 40% 12%)",
                  border: "1px solid hsl(225 30% 18%)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "hsl(199 89% 60% / 0.5)";
                  e.currentTarget.style.boxShadow = "0 0 20px hsl(199 89% 60% / 0.08)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "hsl(225 30% 18%)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none"
                style={{
                  background: "hsl(225 40% 12%)",
                  border: "1px solid hsl(225 30% 18%)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "hsl(199 89% 60% / 0.5)";
                  e.currentTarget.style.boxShadow = "0 0 20px hsl(199 89% 60% / 0.08)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "hsl(225 30% 18%)";
                  e.currentTarget.style.boxShadow = "none";
                }}
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
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="glass-card p-8 space-y-6">
              <h3 className="text-xl font-bold mb-2">Let's Connect</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:thummarayush05@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                    style={{
                      background: "hsl(199 89% 60% / 0.1)",
                      border: "1px solid hsl(199 89% 60% / 0.15)",
                    }}
                  >
                    <i className="fa-solid fa-envelope" style={{ color: "hsl(199 89% 60%)" }} />
                  </div>
                  <span className="text-sm break-all">thummarayush05@gmail.com</span>
                </a>
                <a
                  href="https://github.com/Ayush5112006/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                    style={{
                      background: "hsl(199 89% 60% / 0.1)",
                      border: "1px solid hsl(199 89% 60% / 0.15)",
                    }}
                  >
                    <i className="fa-brands fa-github" style={{ color: "hsl(199 89% 60%)" }} />
                  </div>
                  <span className="text-sm break-all">github.com/Ayush5112006</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ayush-thummar-471720309/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                    style={{
                      background: "hsl(199 89% 60% / 0.1)",
                      border: "1px solid hsl(199 89% 60% / 0.15)",
                    }}
                  >
                    <i className="fa-brands fa-linkedin" style={{ color: "hsl(199 89% 60%)" }} />
                  </div>
                  <span className="text-sm break-all">linkedin.com/in/ayush-thummar-471720309</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                    style={{
                      background: "hsl(199 89% 60% / 0.1)",
                      border: "1px solid hsl(199 89% 60% / 0.15)",
                    }}
                  >
                    <i className="fa-brands fa-instagram" style={{ color: "hsl(199 89% 60%)" }} />
                  </div>
                  <span className="text-sm">@ayushthummar</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
