import { Instagram, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <p className="font-bold text-lg">Sorri pela Manhã 🍩</p>
          <p className="text-primary-foreground/70 text-sm flex items-center gap-1 justify-center md:justify-start">
            <MapPin className="w-4 h-4" /> Beja, Portugal
          </p>
        </div>
        <a
          href="https://www.instagram.com/sorrimanha/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
        >
          <Instagram className="w-5 h-5" />
          @sorrimanha
        </a>
      </div>
    </footer>
  );
};

export default Footer;
