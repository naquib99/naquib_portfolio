import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Oops! Something went wrong. Please try again later.");
      });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <div className="px-4 w-150">
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            placeholder="Name..."
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white"
          />
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            placeholder="example@gmail.com"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white"
          />
          <textarea
            name="message"
            required
            rows="5"
            value={formData.message}
            placeholder="Your Message..."
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white"
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
