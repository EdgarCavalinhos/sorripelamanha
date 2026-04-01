import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-candy">
      <div className="container mx-auto max-w-xl text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-black mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Pronto para adoçar o teu dia? 🍩
        </motion.h2>
        <motion.p
          className="text-lg text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Encomenda os teus mini donuts personalizados agora!
        </motion.p>
        <motion.a
          href="https://www.instagram.com/sorrimanha/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-full text-xl font-bold shadow-candy-lg hover:scale-105 active:scale-95 transition-transform"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Instagram className="w-7 h-7" />
          Encomendar no Instagram
        </motion.a>
      </div>
    </section>
  );
};

export default FinalCTA;
