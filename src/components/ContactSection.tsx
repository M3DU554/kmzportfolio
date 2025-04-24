import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 px-6">
      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold mb-6 text-center"
      >
        Get in Touch
      </motion.h2>
      <form
        action="https://formspree.io/f/yourFormId"
        method="POST"
        className="max-w-lg mx-auto grid gap-4"
      >
        <input type="text" name="name" placeholder="Your Name" required className="border rounded px-4 py-2"/>
        <input type="email" name="email" placeholder="Your Email" required className="border rounded px-4 py-2"/>
        <textarea name="message" rows={5} placeholder="Your Message" required className="border rounded px-4 py-2"></textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-blue-600 text-white px-6 py-3 rounded self-center hover:bg-blue-700 transition"
          type="submit"
        >
          Send Message
        </motion.button>
      </form>
    </section>
  );
}
