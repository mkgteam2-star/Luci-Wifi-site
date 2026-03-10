import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const FloatingCallButton = () => (
  <a
    href={COMPANY.phoneHref}
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 glow-accent group"
    aria-label={`Call ${COMPANY.phone}`}
  >
    <Phone className="w-5 h-5 animate-bounce-gentle" />
    <span className="hidden sm:inline font-heading font-semibold text-sm">{COMPANY.phone}</span>
  </a>
);

export default FloatingCallButton;
