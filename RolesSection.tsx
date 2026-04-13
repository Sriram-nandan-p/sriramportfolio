import { TrendingUp, Package, ShoppingCart } from "lucide-react";

const roles = [
  {
    icon: TrendingUp,
    title: "Supply Chain Analyst",
    desc: "Forecast accuracy, KPI dashboards, demand planning, S&OP support, and exception-based analytics to drive operational decisions.",
    skills: ["Demand Planning", "KPI Reporting", "Trend Analysis", "S&OP", "Tableau"],
    projects: ["Demand Forecasting Dashboard", "Inventory Policy Optimizer"],
  },
  {
    icon: Package,
    title: "Inventory Analyst",
    desc: "Safety stock optimization, reorder point analysis, fill rate tracking, and simulation-backed inventory policy recommendations.",
    skills: ["Safety Stock", "ROP Analysis", "Monte Carlo Simulation", "Days of Supply", "Python"],
    projects: ["Inventory Policy Optimizer", "Demand Forecasting Dashboard"],
  },
  {
    icon: ShoppingCart,
    title: "Procurement Analyst",
    desc: "Supplier scorecards, OTIF tracking, RFQ analysis, landed cost modeling, and spend analytics for strategic sourcing decisions.",
    skills: ["Supplier Scorecards", "Landed Cost", "Spend Analysis", "RFQ Analysis", "SQL"],
    projects: ["Supplier OTIF Scorecard", "RFQ Award Engine"],
  },
];

const RolesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card/50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Roles I'm Targeting
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12" />

        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role) => (
            <div key={role.title} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
              <role.icon className="text-primary mb-4" size={32} />
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{role.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{role.desc}</p>

              <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">Key Skills</h4>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {role.skills.map((s) => (
                  <span key={s} className="text-xs font-mono bg-muted text-muted-foreground px-2 py-0.5 rounded">{s}</span>
                ))}
              </div>

              <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">Relevant Projects</h4>
              <ul className="space-y-1">
                {role.projects.map((p) => (
                  <li key={p} className="text-xs text-primary">→ {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RolesSection;
