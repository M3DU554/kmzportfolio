import { motion } from 'framer-motion';
import caseStudies from '../data/caseStudies.json';

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-12 px-6 bg-white">
      <h2 className="text-3xl font-semibold mb-6 text-center">Case Studies</h2>
      <div className="space-y-10">
        {caseStudies.map((study, idx) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="border rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={`/case-studies/${study.images[0]}`}
              alt={study.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold">{study.title}</h3>
              <p className="mt-2">{study.description}</p>
              <div className="mt-4 flex space-x-4 overflow-x-auto">
                {study.images.map((img) => (
                  <img
                    key={img}
                    src={`/case-studies/${img}`}
                    alt={`${study.title} detail`}
                    className="w-24 h-24 object-cover rounded-md flex-shrink-0"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
