import { motion } from "framer-motion";
import donutsBox from "@/assets/donuts-box.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.img
            src={donutsBox}
            alt="Caixa de donuts Sorri pela Manhã"
            className="w-64 h-64 rounded-2xl object-cover shadow-candy-lg"
            loading="lazy"
            width={400}
            height={400}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          />
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-black mb-4">Sobre Nós 💛</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A <strong className="text-foreground">Sorri pela Manhã</strong> nasceu para adoçar o teu dia. 
              Criamos mini donuts e cookies personalizados, perfeitos para qualquer ocasião — 
              sempre feitos com carinho em Beja.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
