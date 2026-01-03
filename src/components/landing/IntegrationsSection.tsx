import { Network, Layers, Building2 } from "lucide-react";
import integrationsNetwork from "@/assets/integrations-network.png";

const integrationPoints = [
  {
    icon: Network,
    title: "Multi-System Connectivity",
    description: "Feeds data into ERP, CRM, finance and project AI agents seamlessly",
  },
  {
    icon: Layers,
    title: "Intelligence Layer",
    description: "Works as an intelligent layer, not a replacement for existing systems",
  },
  {
    icon: Building2,
    title: "Industry-Specific",
    description: "Designed specifically for construction and infrastructure workflows",
  },
];

const IntegrationsSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[150px]" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative animate-slide-up order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 rounded-3xl blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-accent/20">
              <img 
                src={integrationsNetwork} 
                alt="AI integration network" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="space-y-8 animate-slide-up animate-delay-100 order-1 lg:order-2">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              One Intelligence Layer <br />
              <span className="text-gradient">Across Your Systems</span>
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Seamlessly connect document intelligence with your existing enterprise infrastructure
            </p>
            
            <div className="space-y-4">
              {integrationPoints.map((point, index) => (
                <div 
                  key={index}
                  className="group p-5 rounded-xl glass-card border border-border/50 hover:border-accent/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center">
                      <point.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{point.title}</h3>
                      <p className="text-muted-foreground text-sm">{point.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
