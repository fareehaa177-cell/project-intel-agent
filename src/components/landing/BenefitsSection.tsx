import { 
  Bot, 
  Gauge, 
  FileCheck, 
  Users, 
  Rocket,
  TrendingUp 
} from "lucide-react";

const benefits = [
  {
    icon: Bot,
    title: "AI Handles Document Work",
    description: "AI handles document reading, extraction, and structuring automatically",
  },
  {
    icon: FileCheck,
    title: "Eliminate Manual Paperwork",
    description: "Manual paperwork and repetitive tasks are eliminated from your workflow",
  },
  {
    icon: Users,
    title: "Reduce Admin Staff Needs",
    description: "Fewer administrative and document control staff required",
  },
  {
    icon: TrendingUp,
    title: "Focus on Decisions",
    description: "Humans focus on review, decisions, and approvals instead of data entry",
  },
  {
    icon: Rocket,
    title: "Faster Tender Creation",
    description: "Faster tender creation and project readiness across all projects",
  },
  {
    icon: Gauge,
    title: "Scale Without Hiring",
    description: "Operations scale without hiring additional people",
  },
];

const BenefitsSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Work Faster <span className="text-gradient">Without Increasing Headcount</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your document workflows and scale operations without adding staff
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl glass-card border border-border hover:border-primary/30 transition-all duration-500 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
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