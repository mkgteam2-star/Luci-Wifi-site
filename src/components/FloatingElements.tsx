const FloatingElements = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    {/* Wifi arcs */}
    <div className="absolute top-20 left-[10%] w-16 h-16 rounded-full border-2 border-primary/10 animate-wifi-wave" />
    <div className="absolute top-20 left-[10%] w-16 h-16 rounded-full border-2 border-primary/10 animate-wifi-wave" style={{ animationDelay: "0.6s" }} />
    <div className="absolute top-20 left-[10%] w-16 h-16 rounded-full border-2 border-primary/10 animate-wifi-wave" style={{ animationDelay: "1.2s" }} />

    {/* Floating dots */}
    <div className="absolute top-[30%] right-[8%] w-3 h-3 rounded-full bg-primary/15 animate-float-slow" />
    <div className="absolute top-[60%] left-[5%] w-4 h-4 rounded-full bg-accent/10 animate-float-medium" />
    <div className="absolute top-[45%] right-[15%] w-2 h-2 rounded-full bg-primary/10 animate-float-slow" style={{ animationDelay: "2s" }} />
    <div className="absolute bottom-[25%] left-[12%] w-3 h-3 rounded-full bg-accent/10 animate-float-medium" style={{ animationDelay: "1s" }} />

    {/* Signal rings */}
    <div className="absolute bottom-[40%] right-[5%] w-20 h-20 rounded-full border border-primary/5 animate-pulse-ring" />
    <div className="absolute top-[15%] right-[30%] w-12 h-12 rounded-full border border-accent/8 animate-pulse-ring" style={{ animationDelay: "1.5s" }} />
  </div>
);

export default FloatingElements;
