import { useState, useEffect } from "react";
import { X, Phone, Shield, Star, Clock } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const CallNowPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("popup-dismissed");
    if (dismissed) return;
    const timer = setTimeout(() => setShow(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setShow(false);
    sessionStorage.setItem("popup-dismissed", "true");
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-card rounded-2xl shadow-2xl max-w-md w-full p-8 animate-slide-up">
        <button onClick={dismiss} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors" aria-label="Close">
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-2">
            <Phone className="w-7 h-7 text-accent" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-foreground">Get the Best Deal Today!</h3>
          <p className="text-muted-foreground">Call now and speak with our team to find the perfect Internet & Cable plan for your home.</p>

          <a href={COMPANY.phoneHref}>
            <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg font-heading font-bold glow-accent">
              <Phone className="w-5 h-5 mr-2" />
              {COMPANY.phone}
            </Button>
          </a>

          <div className="grid grid-cols-3 gap-3 pt-4">
            {[
              { icon: Shield, text: "No Pressure" },
              { icon: Star, text: "Top Rated" },
              { icon: Clock, text: "24/7 Support" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
                <Icon className="w-4 h-4 text-primary" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallNowPopup;
