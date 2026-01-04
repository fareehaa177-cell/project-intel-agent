import heroTeam from "@/assets/hero-team.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-dots-pattern opacity-40" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
      
      {/* Auth buttons - top right */}
      <div className="absolute top-6 right-6 z-50 flex gap-4">
        <button className="px-6 py-2.5 rounded-lg border border-border bg-card/80 backdrop-blur-sm text-foreground font-medium hover:bg-muted hover:border-primary/30 transition-all duration-300">
          Sign In
        </button>
        <button className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all duration-300 pulse-soft">
          Sign Up
        </button>
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-accent text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary">AI-Powered Document Intelligence</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-foreground">Turn Construction Documents Into </span>
              <span className="text-gradient">Structured Intelligence</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              An advanced AI OCR agent that reads drawings, PDFs, scans, and handwritten notes — converting paperwork into usable data.
            </p>
          </div>
          
          {/* Right visual */}
          <div className="relative animate-slide-up animate-delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-2xl" />
              <img 
                src={heroTeam} 
                alt="Engineers reviewing construction documents with AI assistance" 
                className="relative w-full h-auto rounded-2xl shadow-xl border border-border/50"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;