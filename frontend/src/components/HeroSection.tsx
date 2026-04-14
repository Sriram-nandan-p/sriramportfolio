import { Linkedin, Mail, Phone, ChevronDown, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen hero-gradient-bg flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-muted-foreground text-base md:text-lg mb-4 animate-fade-in-up">
            Hi, I'm
          </p>

          {/* Name - Single Line */}
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up delay-100 whitespace-nowrap">
            Sriram Nandan Palaniswamy
          </h1>

          {/* Main headline */}
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold text-foreground/90 mb-6 animate-fade-in-up delay-200 leading-relaxed">
            Turning Supply Chain Data into Smarter Operational Decisions
          </h2>

          {/* Subtitle */}
          <p className="text-primary font-mono text-sm md:text-base mb-8 animate-fade-in-up delay-300">
            Supply Chain Analyst · Inventory Analyst · Procurement Analyst
          </p>

          {/* Description */}
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8 animate-fade-in-up delay-400">
            Transforming planning, inventory, and procurement workflows with data-driven analytics and decision support. <span className="text-accent font-semibold">3+ years</span> of experience improving forecast accuracy, reducing stockouts, strengthening supplier visibility, and driving smarter operational decisions.
          </p>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-up delay-500">
            <a
              href="https://linkedin.com/in/sriramnandanpalaniswamy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Sriram-nandan-p"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:sriramnandanpalaniswamy@gmail.com"
              className="w-12 h-12 flex items-center justify-center border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up delay-600">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
            <Button variant="heroSecondary" size="lg" asChild>
              <a href="/SRIRAM_NANDAN_PALANISWAMY.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-bounce">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Scroll down">
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
