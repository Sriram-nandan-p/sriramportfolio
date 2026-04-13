import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  subtitle: string;
  overview: string;
  impacts: string[];
  features: string[];
  demonstrates: string;
  technologies: string[];
  cta: string[];
}

const projects: Project[] = [
  {
    title: "Retail Demand Forecasting + S&OP Exception Dashboard",
    subtitle: "Item-store forecasting workflow with rolling backtests and a Tableau exception cockpit for weekly planner actions",
    overview: "Built an end-to-end demand planning workflow using publicly available retail sales data to generate SKU-store forecasts, quantify forecast error and bias, and translate model outputs into an exception-based S&OP dashboard. The solution compares a baseline forecast against a stronger ML model, highlights the SKUs and locations driving most error, and provides a clear planner next action view.",
    impacts: [
      "10–20% forecast error reduction vs baseline target",
      "Top 20 SKUs prioritized weekly by error contribution",
      "Bias tracking by SKU/store to reduce systematic over/under forecasting",
    ],
    features: [
      "Rolling-window backtesting",
      "Baseline vs ML comparison",
      "Exception logic for spikes, persistent bias, and high volatility",
      "Feature engineering with lagged demand, seasonality, promotions / pricing, and calendar effects",
      "Tableau dashboard for weekly S&OP review",
    ],
    demonstrates: "Demand planning fundamentals, forecast evaluation discipline, and the ability to turn analytics into planner actions.",
    technologies: ["Python", "SQL", "Tableau", "scikit-learn", "Time-series", "Backtesting"],
    cta: ["View Dashboard", "View Notebook"],
  },
  {
    title: "Manufacturing Inventory Policy Optimizer",
    subtitle: "Safety stock + reorder point recommendations with Monte Carlo service simulation for inventory vs service tradeoffs",
    overview: "Designed a planning-parameter engine that converts demand variability and lead time uncertainty into recommended safety stock and reorder points. Includes a simulation layer that tests service performance under different policies and quantifies inventory investment required to achieve target service levels.",
    impacts: [
      "2–8% service level improvement at controlled inventory growth target",
      "5–15% inventory reduction opportunity on over-buffered SKUs target",
      "Scenario-ready policy outputs by SKU",
    ],
    features: [
      "Demand and lead time variability modeling",
      "Safety stock calculation",
      "Monte Carlo simulation",
      "SKU segmentation",
      "Tableau decision board for scenario comparison",
    ],
    demonstrates: "Inventory planning depth, service economics, and simulation-based validation of planning decisions.",
    technologies: ["Python", "SQL", "Tableau", "numpy", "Monte Carlo", "Inventory math"],
    cta: ["View Dashboard", "View Notebook"],
  },
  {
    title: "Supplier OTIF + Quality Scorecard",
    subtitle: "Supplier performance scorecard with OTIF/quality variability metrics and an early-warning watchlist",
    overview: "Built a supplier performance analytics system that produces a standardized scorecard across delivery reliability, lead time stability, and quality signals. Generates a procurement-ready supplier tiering view and an early-warning list that flags high-risk POs before they become late.",
    impacts: [
      "8–15% OTIF improvement opportunity via targeted supplier actions",
      "Watchlist tiering for supplier development and corrective actions",
      "Early warning list of at-risk shipments / POs by week",
    ],
    features: [
      "Supplier KPI scorecarding",
      "Root-cause drilldowns",
      "Tiering framework aligned to procurement actions",
      "Proactive risk signals",
      "Tableau supplier cockpit",
    ],
    demonstrates: "Procurement analytics maturity, supplier governance, and data-driven supplier action planning.",
    technologies: ["Python", "SQL", "Tableau", "KPI design", "Supplier scorecards"],
    cta: ["View Scorecard", "View Notebook"],
  },
  {
    title: "RFQ Landed Cost + Award Recommendation Engine",
    subtitle: "RFQ comparison model that calculates landed cost plus risk tradeoffs and recommends award splits under constraints",
    overview: "Created an RFQ analytics workflow that evaluates supplier quotes beyond unit price by modeling landed cost, freight, MOQ, lead time, and quality risk. Outputs a recommended award decision and scenario comparisons so sourcing decisions are defensible to finance and operations.",
    impacts: [
      "3–12% expected savings vs price-only awarding target",
      "Risk reduction via dual-source split and supplier capacity constraints",
      "Decision-ready cost breakdown per supplier",
    ],
    features: [
      "Landed cost modeling",
      "Supplier scoring",
      "Award logic with constraints",
      "Scenario analysis",
      "Tableau sourcing cockpit",
    ],
    demonstrates: "Strategic sourcing logic, total cost thinking, and stakeholder-ready procurement decision support.",
    technologies: ["Python", "SQL", "Tableau", "Cost modeling", "Scenario analysis"],
    cta: ["View RFQ Model", "View Notebook"],
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300">
      {/* Header accent */}
      <div className="h-1 w-full" style={{
        background: index % 2 === 0
          ? "linear-gradient(90deg, hsl(213 94% 68%), hsl(174 72% 56%))"
          : "linear-gradient(90deg, hsl(263 70% 68%), hsl(213 94% 68%))"
      }} />

      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <span className="text-xs font-mono text-primary mb-2 block">PROJECT 0{index + 1}</span>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">{project.title}</h3>
          </div>
        </div>
        <p className="text-muted-foreground text-sm mb-4">{project.subtitle}</p>

        {/* Impact tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          {project.impacts.map((impact, i) => (
            <div key={i} className="bg-muted/50 rounded-lg p-3 border border-border">
              <p className="text-xs text-accent font-mono">{impact}</p>
            </div>
          ))}
        </div>

        {/* Expandable details */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mb-4"
        >
          {expanded ? "Hide Details" : "Show Details"}
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {expanded && (
          <div className="space-y-4 animate-fade-in">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Overview</h4>
              <p className="text-sm text-muted-foreground">{project.overview}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Key Features</h4>
              <ul className="space-y-1">
                {project.features.map((f, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-0.5">→</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">What This Demonstrates</h4>
              <p className="text-sm text-muted-foreground">{project.demonstrates}</p>
            </div>
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-4 mb-5">
          {project.technologies.map((t) => (
            <span key={t} className="text-xs font-mono bg-muted text-muted-foreground px-2.5 py-1 rounded-full">
              {t}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          {project.cta.map((label) => (
            <Button key={label} variant="outlineGlow" size="sm" className="gap-2">
              {label} <ExternalLink size={14} />
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Featured Projects
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12" />

        <div className="grid gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
