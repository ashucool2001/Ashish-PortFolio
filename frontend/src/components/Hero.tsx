import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient text-white px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in duration-1000">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I'm <span className="text-accent-foreground">Ashish Singh Tanwar</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light">
            Software Engineer
          </p>
        </div>
        
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Motivated backend developer specializing in scalable APIs and backend services using Node.js, NestJS, and Express.js. 
          Passionate about clean code, RESTful architecture, and building efficient solutions.
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
        
        <div className="pt-12 animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
