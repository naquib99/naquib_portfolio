import { useRef, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "@emailjs/browser";

// Spam guards: bots tend to fill every field and submit instantly.
const MIN_FILL_MS = 3000;
const COOLDOWN_MS = 60000;

const emailjsOptions = {
  publicKey: import.meta.env.VITE_PUBLIC_KEY,
  blockHeadless: true,
  limitRate: { id: "contact-form", throttle: COOLDOWN_MS },
};

const emptyForm = { from_name: "", email: "", message: "" };

const inputClass =
  "w-full bg-surface border border-line rounded px-4 py-3 text-fg placeholder:text-muted transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5";

export const Contact = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState({ type: "idle", text: "" });
  const mountedAt = useRef(Date.now());

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status.type === "sending") return;

    // Honeypot filled or submitted too fast: pretend success, send nothing.
    if (honeypot || Date.now() - mountedAt.current < MIN_FILL_MS) {
      setStatus({ type: "success", text: "Message sent!" });
      setFormData(emptyForm);
      return;
    }

    setStatus({ type: "sending", text: "" });
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: formData.from_name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        },
        emailjsOptions
      )
      .then(() => {
        setStatus({ type: "success", text: "Message sent! I'll get back to you soon." });
        setFormData(emptyForm);
      })
      .catch((err) => {
        const text =
          err?.status === 429
            ? "Please wait a minute before sending another message."
            : "Oops! Something went wrong. Please try again.";
        setStatus({ type: "error", text });
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-grad-b to-grad-a bg-clip-text text-transparent heading-halo text-center">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Honeypot: hidden from people, often filled in by bots */}
            <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            <input
              type="text"
              id="from_name"
              name="from_name"
              required
              maxLength={100}
              value={formData.from_name}
              className={inputClass}
              placeholder="Name..."
              onChange={handleChange}
            />

            <input
              type="email"
              id="email"
              name="email"
              required
              maxLength={254}
              value={formData.email}
              className={inputClass}
              placeholder="example@gmail.com"
              onChange={handleChange}
            />

            <textarea
              id="message"
              name="message"
              required
              rows={5}
              maxLength={2000}
              value={formData.message}
              className={inputClass}
              placeholder="Your Message..."
              onChange={handleChange}
            />

            <button
              type="submit"
              disabled={status.type === "sending"}
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {status.type === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status.text && (
              <p
                role="status"
                className={`text-center text-sm ${
                  status.type === "error" ? "text-red-500" : "text-green-500"
                }`}
              >
                {status.text}
              </p>
            )}
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
