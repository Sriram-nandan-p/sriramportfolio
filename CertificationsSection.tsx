import { Award } from "lucide-react";

const certifications = [
  { name: "Six Sigma Green Belt", org: "Certified" },
  { name: "Supply Chain Logistics", org: "Professional Certificate" },
  { name: "CSCMP Supply Chain Foundations", org: "CSCMP" },
  { name: "Demand Planning Professional", org: "Certified" },
];

const CertificationsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Certifications
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Award className="text-primary" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-sm mb-1">{cert.name}</h3>
              <p className="text-xs text-muted-foreground">{cert.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
