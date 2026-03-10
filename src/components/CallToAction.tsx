import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY } from "@/lib/constants";
import { Button } from "@/components/ui/button";

interface CTAProps {
  title?: string;
  subtitle?: string;
}

const CallToAction = ({
  title = "Ready to Get Connected?",
  subtitle = "Call now to speak with our team and find the perfect plan for your home.",
}: CTAProps) => (
  <section className="py-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" style={{ backgroundSize: "200% 200%", animation: "gradient-shift 8s ease infinite" }} />
    <div className="container mx-auto px-4 relative z-10 text-center space-y-6">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">{title}</h2>
      <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">{subtitle}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href={COMPANY.phoneHref}>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-bold text-lg glow-accent">
            <Phone className="w-5 h-5 mr-2" />
            {COMPANY.phone}
          </Button>
        </a>
        <Link to="/bundles">
          <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-heading">
            View Plans <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default CallToAction;
