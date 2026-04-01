import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { text: "Super fofos e deliciosos! Adorei a apresentação.", name: "Ana M." },
  { text: "Perfeitos para festas! Todos adoraram.", name: "Sofia R." },
  { text: "Vou encomendar outra vez! O sabor é incrível.", name: "Maria L." },
  { text: "Os melhores mini donuts que já provei! 😍", name: "Joana P." },
];

const ReviewsSection = () => {
  return (
    <section className="py-16 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-2xl md:text-4xl font-black text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          O que dizem os nossos clientes ⭐
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              className="bg-background rounded-2xl p-6 shadow-candy"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-3 font-semibold">"{review.text}"</p>
              <p className="text-muted-foreground text-sm">— {review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
