import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import donutsGrid from "@/assets/donut_3.jpeg";
import cookiesImg from "@/assets/donut_5.jpeg";
import comboImg from "@/assets/combo-pack.jpg";

const products = [
  {
    title: "Mini Donuts",
    image: donutsGrid,
    emoji: "🍩",
    options: [
      { label: "10 unidades", price: "10€" },
      { label: "15 unidades", price: "15€" },
      { label: "25 unidades", price: "20€" },
    ],
  },
  {
    title: "Cookies",
    image: cookiesImg,
    emoji: "🍪",
    options: [{ label: "6 unidades", price: "10€" }],
  },
  {
    title: "Combo",
    image: comboImg,
    emoji: "🎁",
    options: [{ label: "6 donuts + 4 cookies", price: "15€" }],
  },
];

const ProductsSection = () => {
  return (
    <section id="menu" className="py-16 px-4 bg-gradient-pink">
      <div className="container mx-auto">
        <motion.h2
          className="text-2xl md:text-4xl font-black text-center mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Menu & Preços 🛒
        </motion.h2>
        <p className="text-center text-muted-foreground mb-10">Entrega: 2,50€</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {products.map((product, i) => (
            <motion.div
              key={i}
              className="bg-background rounded-2xl overflow-hidden shadow-candy hover:shadow-candy-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full aspect-square object-cover"
                loading="lazy"
                width={400}
                height={400}
              />
              <div className="p-5">
                <h3 className="text-xl font-bold mb-3">
                  {product.emoji} {product.title}
                </h3>
                <div className="space-y-2 mb-4">
                  {product.options.map((opt, j) => (
                    <div key={j} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{opt.label}</span>
                      <span className="font-bold text-primary text-lg">{opt.price}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://www.instagram.com/sorrimanha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-3 rounded-full font-bold shadow-candy hover:scale-105 active:scale-95 transition-transform"
                >
                  <Instagram className="w-4 h-4" />
                  Encomendar
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
