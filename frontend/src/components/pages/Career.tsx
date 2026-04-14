import { Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const careerData = [
  {
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
];

const Career = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-32 md:py-40 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Career Timeline
          </h1>
          <p className="text-muted-foreground text-lg text-center mb-12 max-w-2xl mx-auto">
            Professional experience in supply chain analytics, inventory management, and data-driven decision support
          </p>
          <div className="w-16 h-1 bg-primary rounded-full mb-16 mx-auto" />

          <div className="max-w-4xl mx-auto space-y-8">
            {careerData.map((item, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase size={18} className="text-primary" />
                  <span className="text-xs text-muted-foreground font-mono">{item.dates}</span>
                </div>
                <h2 className="font-heading font-bold text-foreground text-xl md:text-2xl mb-2">{item.title}</h2>
                <p className="text-primary text-base mb-4">{item.org}</p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  {item.results.map((r, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 shrink-0">•</span>
                      {r}
                    </li>
                  ))}
                </ul>
                {item.tools.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((t) => (
                      <span key={t} className="text-xs font-mono bg-muted text-muted-foreground px-2.5 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Career;
