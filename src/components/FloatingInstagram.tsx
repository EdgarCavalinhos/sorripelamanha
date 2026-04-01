import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

const FloatingInstagram = () => {
  return (
    <motion.a
      href="https://www.instagram.com/sorrimanha/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-4 rounded-full shadow-candy-lg animate-pulse-soft hover:scale-110 active:scale-95 transition-transform"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      aria-label="Instagram"
    >
      <Instagram className="w-7 h-7" />
    </motion.a>
  );
};

export default FloatingInstagram;
