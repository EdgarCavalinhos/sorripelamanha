import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import heroImg from "@/assets/donuts-hero.jpg";
import logoImg from "@/assets/logo_sorrimanha.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Mini donuts coloridos Sorri pela Manhã"
          className="w-full h-full object-cover"
          width={1200}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-16 pb-24 max-w-lg mx-auto">
        <motion.img
          src={logoImg}
          alt="Sorri pela Manhã"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-candy-lg mb-6 object-cover"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        />

        <motion.h1
          className="text-3xl md:text-5xl font-black leading-tight text-foreground mb-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Mini donuts que fazem sorrir todos os dias 🍩
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Feitos em Beja, personalizados ao teu gosto
        </motion.p>

        <motion.a
          href="https://www.instagram.com/sorrimanha/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-bold shadow-candy-lg hover:shadow-candy transition-all hover:scale-105 active:scale-95"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Instagram className="w-6 h-6" />
          Encomendar no Instagram
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
