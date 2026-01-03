import { FileText, Database, Layers, Share2 } from "lucide-react";

const capabilities = [
  {
    icon: FileText,
    title: "Read Any Document",
    description: "Reads drawings, PDFs, scans & handwritten notes with advanced OCR technology",
  },
  {
    icon: Database,
    title: "Extract Key Data",
    description: "Extracts data from contracts, invoices & site reports automatically",
  },
  {
    icon: Layers,
    title: "Structure Everything",
    description: "Converts documents into structured datasets ready for analysis",
  },
  {
    icon: Share2,
    title: "Feed AI Agents",
    description: "Feeds clean data into other AI agents for downstream processing",
  },
];

const CapabilitiesSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Core <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful AI-driven document processing that transforms how you handle construction data
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl glass-card-neon glow-effect transition-all duration-500 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <capability.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">{capability.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
              
              {/* Hover glow line */}
              <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
