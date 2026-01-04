import { Shield, CheckCircle, Lock, Scale } from "lucide-react";
import trustAccuracy from "@/assets/trust-accuracy.png";

const trustPoints = [
  {
    icon: CheckCircle,
    title: "High OCR Accuracy",
    description: "Industry-leading accuracy for technical construction documents",
  },
  {
    icon: Lock,
    title: "Secure Processing",
    description: "Enterprise-grade security for sensitive project data",
  },
  {
    icon: Scale,
    title: "Audit-Ready Data",
    description: "Structured, traceable data that meets compliance requirements",
  },
  {
    icon: Shield,
    title: "Large-Scale Ready",
    description: "Designed to handle massive construction project portfolios",
  },
];

const TrustSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-accent text-sm font-medium mb-6">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-primary">Enterprise Security</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Built for <span className="text-gradient">Enterprise-Grade Accuracy</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Security, accuracy, and scalability designed for the most demanding construction projects
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left - Content */}
          <div className="grid grid-cols-2 gap-4 animate-slide-up h-full">
            {trustPoints.map((point, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl glass-card border border-border hover:border-primary/30 transition-all duration-300 hover-lift flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{point.title}</h3>
                <p className="text-muted-foreground text-sm flex-1">{point.description}</p>
              </div>
            ))}
          </div>
          
          {/* Right - Image */}
          <div className="relative animate-slide-up animate-delay-200 flex items-center">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-xl w-full h-full min-h-[320px]">
              <img 
                src={trustAccuracy} 
                alt="Professional team reviewing quality assurance dashboards and document verification" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;