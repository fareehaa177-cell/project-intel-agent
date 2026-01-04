import { Upload, Brain, ArrowRight, Network } from "lucide-react";
import workflowTeam from "@/assets/workflow-team.png";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Upload Documents",
    description: "Construction documents are uploaded or connected from your existing systems",
  },
  {
    icon: Brain,
    number: "02",
    title: "AI Processing",
    description: "AI reads, extracts & structures the data with precision accuracy",
  },
  {
    icon: Network,
    number: "03",
    title: "Data Distribution",
    description: "Clean data is passed to other AI agents and enterprise systems",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/3 blur-[150px]" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A seamless three-step intelligent flow that transforms documents into actionable data
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="p-8 rounded-2xl glass-card border border-border hover:border-primary/30 transition-all duration-500 h-full hover-lift">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-5xl font-bold text-primary/15 font-display">{step.number}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-primary/40" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Workflow visual */}
        <div className="relative animate-slide-up animate-delay-300">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-xl">
            <img 
              src={workflowTeam} 
              alt="Team reviewing document processing workflow" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;