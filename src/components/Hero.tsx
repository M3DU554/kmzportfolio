// src/components/Hero.tsx
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

export default function Hero() {
  const [text] = useTypewriter({
    words: ['Architect.', 'Interior Designer.', 'Media Enthusiast.'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section>
      <motion.h1>{text}<Cursor /></motion.h1>
    </section>
  );
}
