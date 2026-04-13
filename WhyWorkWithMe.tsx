import { Target, Eye, ShieldCheck, Zap } from "lucide-react";

const values = [
  { icon: Target, title: "Planning with Precision", desc: "Forecast accuracy, bias reduction, and exception-based planning that keeps operations ahead of demand shifts." },
  { icon: Eye, title: "Procurement with Visibility", desc: "Supplier scorecards, OTIF tracking, and landed cost modeling that make sourcing decisions defensible." },
  { icon: ShieldCheck, title: "Inventory with Control", desc: "Safety stock optimization, reorder point analysis, and simulation-backed service level planning." },
  { icon: Zap, title: "Analytics with Action", desc: "Dashboards and KPI reporting designed for planner decisions, not just executive slide decks." },
];

const WhyWorkWithMe = () => {
  return (
    <section className="py-20 md:py-28 bg-card/50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Why Work With Me
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-4" />
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          I turn operational data into decisions that improve cost, service, and reliability.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-300 group"
            >
              <v.icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-heading font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
