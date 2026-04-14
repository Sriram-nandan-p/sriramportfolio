import { GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const educationData = [
  {
    title: "Master of Science in Engineering Management",
    org: "Northeastern University, Boston, MA",
    dates: "Sep 2022 – May 2024",
    gpa: "3.8",
    coursework: ["Supply Chain Engineering", "Project Management", "Operations Research", "Lean Concepts"],
  },
  {
    title: "Bachelor of Engineering in Mechanical Engineering",
    org: "PSG College of Technology, Coimbatore, India",
    dates: "Jun 2018 – May 2021",
    gpa: "3.4",
    coursework: ["Supply Chain Management", "Manufacturing Process", "DFMA"],
  },
];

const Education = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-32 md:py-40 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Education
          </h1>
          <p className="text-muted-foreground text-lg text-center mb-12 max-w-2xl mx-auto">
            Academic background in engineering management and mechanical engineering with focus on supply chain operations
          </p>
          <div className="w-16 h-1 bg-accent rounded-full mb-16 mx-auto" />

          <div className="max-w-4xl mx-auto space-y-8">
            {educationData.map((item, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-accent/40 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap size={18} className="text-accent" />
                  <span className="text-xs text-muted-foreground font-mono">{item.dates}</span>
                </div>
                <h2 className="font-heading font-bold text-foreground text-xl md:text-2xl mb-2">{item.title}</h2>
                <p className="text-accent text-base mb-3">{item.org}</p>
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-semibold">GPA:</span> {item.gpa}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-foreground font-semibold mb-2">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {item.coursework.map((course) => (
                      <span key={course} className="text-xs font-mono bg-muted text-muted-foreground px-2.5 py-1 rounded-full">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
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

export default Education;
