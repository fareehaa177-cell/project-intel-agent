import { 
  HandMetal, 
  Gauge, 
  ShieldCheck, 
  Database, 
  Users, 
  LineChart 
} from "lucide-react";

const benefits = [
  {
    icon: HandMetal,
    title: "Eliminate Manual Handling",
    description: "Remove tedious document processing from your workflow",
  },
  {
    icon: Gauge,
    title: "Faster Project Insights",
    description: "Get critical information in minutes, not days",
  },
  {
    icon: ShieldCheck,
    title: "Reduced Errors",
    description: "Minimize rework with accurate data extraction",
  },
  {
    icon: Database,
    title: "Centralized Intelligence",
    description: "All project data in one structured location",
  },
  {
    icon: Users,
    title: "Scales Without Staff",
    description: "Handle more projects without adding headcount",
  },
  {
    icon: LineChart,
    title: "Better Decisions",
    description: "Make informed choices with clean, reliable data",
  },
];

const BenefitsSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Business <span className="text-gradient">Benefits</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your document workflows and drive measurable results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
