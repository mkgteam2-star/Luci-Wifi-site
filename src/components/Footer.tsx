import { Link } from "react-router-dom";
import { Phone, MapPin, Mail } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const Footer = () => (
  <footer className="bg-foreground text-background py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-xl font-heading font-bold">{COMPANY.name}</h3>
          <p className="text-sm text-background/60">Reliable Internet & Cable services for customers across the USA.</p>
          <div className="space-y-2 text-sm text-background/70">
            <a href={COMPANY.phoneHref} className="flex items-center gap-2 hover:text-background"><Phone className="w-4 h-4" /> {COMPANY.phone}</a>
            <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> {COMPANY.address}</div>
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-background"><Mail className="w-4 h-4" /> {COMPANY.email}</a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li><Link to="/internet" className="hover:text-background transition-colors">Internet Plans</Link></li>
            <li><Link to="/cable" className="hover:text-background transition-colors">Cable TV</Link></li>
            <li><Link to="/bundles" className="hover:text-background transition-colors">Bundle Deals</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-heading font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li><Link to="/about" className="hover:text-background transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-background transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-heading font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li><Link to="/privacy-policy" className="hover:text-background transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-background transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/disclaimer" className="hover:text-background transition-colors">Disclaimer</Link></li>
            <li><Link to="/refund-policy" className="hover:text-background transition-colors">Refund Policy</Link></li>
            <li><Link to="/cookies-policy" className="hover:text-background transition-colors">Cookies Policy</Link></li>
            <li><Link to="/advertising-disclosure" className="hover:text-background transition-colors">Advertising Disclosure</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/40 space-y-3">
        <p className="max-w-2xl mx-auto text-background/30 text-xs leading-relaxed">
          Disclaimer: {COMPANY.name} is a service of {COMPANY.legalName}. All plans, pricing, speeds, and channel lineups are subject to availability and may vary by location. Advertised speeds represent maximum performance under ideal conditions. Contact us for details.
        </p>
        <p>© {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved. | {COMPANY.phone}</p>
      </div>
    </div>
  </footer>
);

export default Footer;
