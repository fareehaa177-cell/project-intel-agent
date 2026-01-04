import { AlertTriangle, Clock, FileX, SearchX } from "lucide-react";
import problemDocuments from "@/assets/problem-documents.png";

const problems = [
  {
    icon: FileX,
    text: "Critical data locked inside drawings and PDFs",
  },
  {
    icon: Clock,
    text: "Manual document review wastes engineering time",
  },
  {
    icon: SearchX,
    text: "Handwritten notes are hard to track",
  },
  {
    icon: AlertTriangle,
    text: "Errors and delays caused by missing information",
  },
];

const ProblemSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative animate-slide-up">
            <div className="absolute inset-0 bg-destructive/5 rounded-3xl blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-lg">
              <img 
                src={problemDocuments} 
                alt="Overwhelmed by document chaos" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="space-y-8 animate-slide-up animate-delay-100">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-destructive/30 bg-destructive/5 text-sm font-medium text-destructive">
              <AlertTriangle className="w-4 h-4" />
              <span>The Challenge</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Unstructured Documents <br />
              <span className="text-muted-foreground">Slow Down Projects</span>
            </h2>
            
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl glass-card border border-border hover:border-destructive/30 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                    <problem.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <p className="text-foreground font-medium">{problem.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;