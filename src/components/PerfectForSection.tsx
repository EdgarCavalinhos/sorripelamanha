import { motion } from "framer-motion";

const occasions = [
  { emoji: "🎉", label: "Festas" },
  { emoji: "🎂", label: "Aniversários" },
  { emoji: "☕", label: "Coffee breaks" },
  { emoji: "🎁", label: "Surpresas" },
  { emoji: "💒", label: "Casamentos" },
  { emoji: "👶", label: "Baby showers" },
];

const PerfectForSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-blue">
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          className="text-2xl md:text-4xl font-black text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Perfeito para… 💕
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {occasions.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-2 bg-background/80 backdrop-blur rounded-2xl py-6 px-4 shadow-candy hover:shadow-candy-lg transition-shadow"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <span className="text-4xl">{item.emoji}</span>
              <span className="font-bold text-lg">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerfectForSection;
