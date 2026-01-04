import { FileCheck, Clock, Target, Zap, CheckCircle } from "lucide-react";
import tenderPreparation from "@/assets/tender-preparation.png";

const tenderBenefits = [
  {
    icon: FileCheck,
    text: "AI reads tender documents, drawings, and specifications",
  },
  {
    icon: Target,
    text: "Extracts scope, requirements, and key data automatically",
  },
  {
    icon: Zap,
    text: "Helps prepare tenders faster and with fewer errors",
  },
  {
    icon: Clock,
    text: "Reduces tender turnaround time significantly",
  },
  {
    icon: CheckCircle,
    text: "Ensures consistency and compliance across tender submissions",
  },
];

const TenderSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[150px]" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-accent text-sm font-medium">
              <FileCheck className="w-4 h-4 text-primary" />
              <span className="text-primary">New Feature</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Fast & Error-Proof <br />
              <span className="text-gradient">Tender Preparation</span>
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Accelerate your tender process with AI-powered document analysis and data extraction
            </p>
            
            <div className="space-y-4">
              {tenderBenefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl glass-card border border-border hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right - Image */}
          <div className="relative animate-slide-up animate-delay-200">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-xl">
              <img 
                src={tenderPreparation} 
                alt="Professional preparing tender documents efficiently" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenderSection;