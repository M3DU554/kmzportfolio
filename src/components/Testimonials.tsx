import { motion } from 'framer-motion';
import testimonials from '../data/testimonials.json';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-semibold mb-6 text-center">Recommendations</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.id}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: idx * 0.2 }}
            className="border-l-4 border-blue-500 pl-4"
          >
            <p className="italic">“{t.quote}”</p>
            <p className="mt-2 font-semibold">— {t.author}, {t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
