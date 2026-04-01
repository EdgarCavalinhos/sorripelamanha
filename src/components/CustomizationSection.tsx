import { motion } from "framer-motion";

const categories = [
  {
    title: "🧁 Massas",
    items: ["Baunilha", "Chocolate"],
  },
  {
    title: "✨ Coberturas",
    items: ["Cor lisa", "Corações", "Kinder", "Oreo", "Pintarolas", "Pepitas", "Brilho"],
  },
  {
    title: "🎨 Cores",
    items: ["Rosa", "Azul", "Branco", "Vermelho", "Verde", "Amarelo"],
    colors: ["hsl(340,60%,65%)", "hsl(200,80%,70%)", "hsl(0,0%,95%)", "hsl(0,70%,55%)", "hsl(140,50%,50%)", "hsl(50,90%,60%)"],
  },
  {
    title: "🍫 Extras",
    items: ["Nutella (+5€)", "Doce de leite (+5€)", "Chocolate branco (+5€)"],
  },
];

const CustomizationSection = () => {
  return (
    <section id="personalizar" className="py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          className="text-2xl md:text-4xl font-black text-center mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Personaliza os teus 🎨
        </motion.h2>
        <p className="text-center text-muted-foreground mb-10">
          Escolhe ao teu gosto e diz-nos no Instagram!
        </p>

        <div className="space-y-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-lg font-bold mb-3">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, j) => (
                  <span
                    key={j}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border text-sm font-semibold shadow-sm hover:shadow-candy hover:scale-105 transition-all cursor-default"
                  >
                    {cat.colors && (
                      <span
                        className="w-4 h-4 rounded-full border border-border"
                        style={{ backgroundColor: cat.colors[j] }}
                      />
                    )}
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomizationSection;
