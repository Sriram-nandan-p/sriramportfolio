import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 9, suffix: "%", label: "Procurement Cost Reduction", color: "text-primary" },
  { value: 21, suffix: "%", label: "Stockout Reduction", color: "text-accent" },
  { value: 12.5, suffix: "%", label: "Forecast Accuracy Improvement", color: "text-kpi-purple" },
  { value: 10, suffix: "%", label: "OTIF Improvement", color: "text-primary" },
  { value: 13, suffix: "%", label: "Production Delay Reduction", color: "text-accent" },
  { value: 2, suffix: "hrs", label: "Report Prep Time (from 8hrs)", color: "text-kpi-purple" },
];

const AnimatedCounter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const isDecimal = target % 1 !== 0;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const val = progress * target;
      setCount(isDecimal ? parseFloat(val.toFixed(1)) : Math.floor(val));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span>{count}{suffix}</span>;
};

const MetricsDashboard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Impact Metrics
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-12" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {metrics.map((m) => (
            <div key={m.label} className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary/30 transition-all">
              <div className={`font-heading text-3xl md:text-4xl font-bold mb-2 ${m.color}`}>
                <AnimatedCounter target={m.value} suffix={m.suffix} inView={inView} />
              </div>
              <p className="text-xs text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsDashboard;
