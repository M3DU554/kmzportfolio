import { motion } from 'framer-motion';
import skills from '../data/skills.json';

export default function AboutSection() {
  return (
    <section id="about" className="py-12 px-6">
      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold mb-6"
      >
        About Me
      </motion.h2>
      <div className="md:flex md:space-x-8">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img
            src="/images/headshot.jpg"
            alt="Karen Marrufo-Zubaran"
            className="rounded-full w-48 mx-auto"
          />
        </div>
        <div className="md:w-2/3">
          <p className="mb-4">
            Versatile and detail-oriented architect and interior designer with experience in real estate,
            carpentry, and media design. I build strong client relationships, facilitate seamless
            communication, and drive project success.
          </p>
          <h3 className="text-2xl font-semibold mb-2">Skills & Tools</h3>
          <div className="space-y-4">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
                className="bg-gray-200 rounded h-6 relative overflow-hidden"
              >
                <span className="absolute left-2 top-1 text-sm font-medium">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
