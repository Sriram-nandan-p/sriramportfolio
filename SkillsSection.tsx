const skillCategories = [
  {
    title: "Supply Chain & Operations",
    skills: [
      "Supply Chain Analytics", "KPI Reporting", "Trend Analysis",
      "Root Cause Analysis", "Exception Reporting", "Stakeholder Reporting", "Process Improvement",
    ],
  },
  {
    title: "Inventory & Planning",
    skills: [
      "Demand Planning", "Forecasting", "Forecast Error & Bias Review",
      "Reorder Point Analysis", "Safety Stock Analysis", "Supply Scheduling",
      "Fill Rate Tracking", "Days of Supply", "Inventory Risk Mitigation",
    ],
  },
  {
    title: "Procurement & Sourcing",
    skills: [
      "Spend Analysis", "RFQ / Quote Analysis", "Supplier Evaluation",
      "Supplier Scorecards", "Landed Cost Analysis", "Vendor Relationship Support",
      "PO Tracking / Expediting", "Delivery Tracking", "Category Spend Analysis",
    ],
  },
  {
    title: "Tools & Systems",
    skills: [
      "SAP ERP", "SAP MM", "Excel", "Power Query",
      "Tableau", "Power BI", "Python", "MySQL",
      "SQL", "Jira", "SharePoint",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-card/50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Skills & Expertise
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12" />

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-heading font-semibold text-foreground text-lg mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono bg-muted text-muted-foreground px-3 py-1.5 rounded-full border border-border hover:border-primary/40 hover:text-foreground transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
