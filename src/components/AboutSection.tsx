import { BarChart3, Package, TrendingUp, Users } from "lucide-react";

const stats = [
  { icon: TrendingUp, label: "Demand Planning", desc: "Forecasting, S&OP, exception reporting" },
  { icon: Package, label: "Inventory Optimization", desc: "ROP, safety stock, fill rate tracking" },
  { icon: BarChart3, label: "KPI Reporting", desc: "Tableau & Power BI dashboards" },
  { icon: Users, label: "Procurement Analytics", desc: "Supplier scorecards, landed cost" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          About Me
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-8" />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">
            <p>
              I'm a supply chain analyst with 2+ years of experience converting operational data into measurable business outcomes across procurement, inventory, and supplier management. My work has delivered a <span className="text-primary font-medium">9% procurement cost reduction</span>, <span className="text-accent font-medium">21% stockout reduction</span>, <span className="text-kpi-purple font-medium">12.5% forecast accuracy improvement</span>, and <span className="text-primary font-medium">10% OTIF improvement</span>.
            </p>
            <p>
              I specialize in S&OP-driven planning, SAP-based operations, and structured cross-functional reporting. Whether it's building forecast exception dashboards, simulating inventory policies, or scoring supplier performance, I turn raw data into actionable insights that directly improve cost, service, and reliability.
            </p>
            <p>
              I thrive in cross-functional settings where analytics meet operations — helping planners, buyers, and stakeholders see the signal in the noise and act on it with confidence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-all duration-300 group"
              >
                <stat.icon className="text-primary mb-3 group-hover:scale-110 transition-transform" size={28} />
                <h3 className="font-heading font-semibold text-foreground text-sm mb-1">{stat.label}</h3>
                <p className="text-muted-foreground text-xs">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
