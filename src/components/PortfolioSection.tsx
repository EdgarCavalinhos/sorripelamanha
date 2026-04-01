import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram, ChevronLeft, ChevronRight } from "lucide-react";

import donut1 from "@/assets/donut_1.jpeg";
import donut2 from "@/assets/donut_2.jpeg";
import donut3 from "@/assets/donut_3.jpeg";
import donut4 from "@/assets/donut_4.jpeg";
import donut5 from "@/assets/donut_5.jpeg";
import donut6 from "@/assets/donut_6.jpeg";

const gallery = [
  { src: donut1, title: "Mini donuts coloridos", desc: "Encomenda personalizada com cores à escolha" },
  { src: donut2, title: "Caixa de encomenda", desc: "Embalagem cuidada para presente" },
  { src: donut3, title: "Mini donuts com corações", desc: "Perfeitos para datas especiais" },
  { src: donut4, title: "Donuts para festas", desc: "Coloridos e divertidos para qualquer evento" },
  { src: donut5, title: "Recheio de chocolate", desc: "Cookies com topping à escolha" },
  { src: donut6, title: "Mix especial", desc: "Variedade de sabores e toppings" },
];

const PortfolioSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (selected === null) return;
    setSelected((selected + dir + gallery.length) % gallery.length);
  };

  return (
    <section id="portfolio" className="py-16 px-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-2xl md:text-4xl font-black text-center mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          As nossas criações 🎨
        </motion.h2>
        <p className="text-center text-muted-foreground mb-8">Toca para ver mais</p>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-2 md:gap-3">
          {gallery.map((item, i) => (
            <motion.button
              key={i}
              className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
              onClick={() => setSelected(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-primary-foreground font-bold opacity-0 group-hover:opacity-100 transition-opacity text-sm text-center px-2">
                  {item.title}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative bg-background rounded-2xl overflow-hidden max-w-lg w-full shadow-candy-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 z-10 bg-background/80 backdrop-blur rounded-full p-2"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation arrows */}
              <button
                onClick={() => navigate(-1)}
                className="absolute left-2 top-1/3 z-10 bg-background/80 backdrop-blur rounded-full p-2"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate(1)}
                className="absolute right-2 top-1/3 z-10 bg-background/80 backdrop-blur rounded-full p-2"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <img
                src={gallery[selected].src}
                alt={gallery[selected].title}
                className="w-full aspect-square object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold mb-1">{gallery[selected].title}</h3>
                <p className="text-muted-foreground mb-4">{gallery[selected].desc}</p>
                <a
                  href="https://www.instagram.com/sorrimanha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold shadow-candy hover:scale-105 active:scale-95 transition-transform"
                >
                  <Instagram className="w-5 h-5" />
                  Quero uma igual
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
