import { Mail, Linkedin, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Let's Connect
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12 mx-auto" />

        <div className="max-w-2xl mx-auto">
          <p className="text-muted-foreground text-lg text-center mb-12">
            I'm actively exploring opportunities in supply chain analytics, inventory planning, and procurement analysis. Let's connect.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Email Card */}
            <a 
              href="mailto:sriramnandanpalaniswamy@gmail.com" 
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-2">
                <Mail size={20} className="text-primary" />
                <h3 className="font-semibold text-foreground">Email</h3>
              </div>
              <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                sriramnandanpalaniswamy@gmail.com
              </p>
            </a>

            {/* Location Card */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <MapPin size={20} className="text-primary" />
                <h3 className="font-semibold text-foreground">Location</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Frisco, TX
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://linkedin.com/in/sriramnandanpalaniswamy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="mailto:sriramnandanpalaniswamy@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
              <span className="text-sm">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
