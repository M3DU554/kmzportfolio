import { motion } from 'framer-motion';

export default function Introduction() {
  return (
    <section id="introduction" className="pt-24 pb-12 px-6 bg-gradient-to-b from-gray-50 to-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-4"
      >
        Welcome to My Portfolio
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-2xl mx-auto text-center text-lg"
      >
        I’m Karen Marrufo-Zubaran—an architect & interior designer passionate about crafting spaces that blend 
        form, function, and storytelling. Dive in to see my work, deep-dive case studies, and client recommendations.
      </motion.p>
    </section>
  );
}
