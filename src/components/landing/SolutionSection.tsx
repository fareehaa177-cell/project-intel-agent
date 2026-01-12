import { Sparkles, Eye, Zap, Brain } from "lucide-react";
import solutionTeam from "@/assets/360_F_748550229_X3TvCN9dlroJxbZA3Y1oTXMjwTs9p0sf.jpg";

const features = [
  {
    icon: Eye,
    title: "Reads Complex Documents",
    description: "Construction drawings, PDFs, scans, and handwritten notes processed automatically",
  },
  {
    icon: Brain,
    title: "Intelligent Extraction",
    description: "Extracts structured data from contracts, invoices, and site reports",
  },
  {
    icon: Zap,
    title: "Continuous Precision",
    description: "Works 24/7 with consistent accuracy across all document types",
  },
];

const SolutionSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/3 blur-[150px]" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-accent text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary">The Solution</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Meet Your AI <br />
            <span className="text-gradient">Document Intelligence Agent</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your digital document analyst that reads and processes complex construction documents automatically
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Features */}
          <div className="space-y-6 animate-slide-up animate-delay-100">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl glass-card-accent hover-lift transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right - Image */}
          <div className="relative animate-slide-up animate-delay-200">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-xl">
              <img 
                src={solutionTeam} 
                alt="Team working with AI-powered document systems" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
