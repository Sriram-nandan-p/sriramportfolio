import { Briefcase, GraduationCap } from "lucide-react";

const timelineData = [
  {
    type: "work" as const,
    title: "Data Analyst – Supply Chain",
    org: "DataStack Technologies LLC, Frisco, TX",
    dates: "May 2025 – Present",
    results: [
      "Standardized supplier evaluation across 3 regions using landed cost, lead time, and defect rate scoring, cutting procurement costs 9%",
      "Rebuilt demand planning with time-series forecasting and exception-based follow-up, improving forecast accuracy 12.5% while reducing stockouts 8%",
      "Built Tableau dashboards consolidating supplier spend, OTIF performance, and material variance for weekly reviews and monthly leadership reporting",
      "Automated data extraction and cleaning from SAP and Excel using Python (pandas) and Power Query, reducing report prep from a full day to under two hours",
      "Developed exception report tracking delayed POs, Days of Supply coverage, and lead-time variance, giving planners 2–3 extra days to act",
    ],
    tools: ["Python", "SQL", "Tableau", "SAP", "Power Query"],
  },
  {
    type: "work" as const,
    title: "Data Analyst",
    org: "CrowdDoing, Frisco, TX",
    dates: "Jul 2024 – Apr 2025",
    results: [
      "Built a Python ETL pipeline to consolidate and clean 4,000+ records from multiple operational data sources for consistent biweekly KPI reporting",
      "Trained a Naive Bayes text classifier to auto-segment survey responses by theme, cutting manual tagging time significantly",
      "Published Power BI dashboards with live KPI feeds used in biweekly sprint planning, replacing stale static exports",
    ],
    tools: ["Python", "Power BI", "Jira", "ETL"],
  },
  {
    type: "work" as const,
    title: "Supply Chain Engineer",
    org: "Sree Laxmi Technocast, Coimbatore, India",
    dates: "Jun 2020 – Jun 2022",
    results: [
      "Established SKU-level reorder points and safety stock parameters in SAP MM, reducing stockouts 21% and improving material availability",
      "Standardized shipment tracking across suppliers and 3PL partners, improving OTIF 10%",
      "Conducted probability-impact assessment on critical components, introduced safety stock buffers and second-source suppliers, cutting production delays 13%",
      "Built supplier performance scorecards tracking delivery, quality, and pricing trends, supporting renegotiations with 3 major suppliers",
    ],
    tools: ["SAP ERP", "SAP MM", "Excel", "Supplier Scorecards"],
  },
  {
    type: "edu" as const,
    title: "Master of Science in Engineering Management",
    org: "Northeastern University, Boston, MA",
    dates: "Sep 2022 – May 2024",
    results: [
      "GPA: 3.8 — Coursework: Supply Chain Engineering, Project Management, Operations Research, Lean Concepts",
    ],
    tools: [],
  },
  {
    type: "edu" as const,
    title: "Bachelor of Engineering in Mechanical Engineering",
    org: "PSG College of Technology, Coimbatore, India",
    dates: "Jun 2018 – May 2021",
    results: [
      "GPA: 3.4 — Coursework: Supply Chain Management, Manufacturing Process, DFMA",
    ],
    tools: [],
  },
];

const TimelineSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card/50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Career Timeline
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12" />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {timelineData.map((item, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row items-start gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background z-10 mt-2" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2 justify-start">
                      {item.type === "work" ? (
                        <Briefcase size={16} className="text-primary" />
                      ) : (
                        <GraduationCap size={16} className="text-accent" />
                      )}
                      <span className="text-xs text-muted-foreground font-mono">{item.dates}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-foreground text-lg mb-1">{item.title}</h3>
                    <p className="text-primary text-sm mb-3">{item.org}</p>
                    <ul className="space-y-1 text-sm text-muted-foreground text-left">
                      {item.results.map((r, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-primary mt-1.5 shrink-0">•</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                    {item.tools.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.tools.map((t) => (
                          <span key={t} className="text-xs font-mono bg-muted text-muted-foreground px-2 py-0.5 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
