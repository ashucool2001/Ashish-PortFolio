import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t bg-secondary/30">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Ashish Singh Tanwar
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
