import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import logo from "@/assets/luciconnect-logo.png";

const navLinks = [
  { label: "Internet", path: "/internet" },
  { label: "Cable", path: "/cable" },
  { label: "Bundles", path: "/bundles" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="LuciConnect" className="h-14 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${pathname === l.path ? "text-primary" : "text-muted-foreground"}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={COMPANY.phoneHref} className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Phone className="w-4 h-4" /> {COMPANY.phone}
          </a>
          <Link to="/bundles">
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-semibold">
              Get a Deal
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in">
          <nav className="flex flex-col p-4 gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium py-2 ${pathname === l.path ? "text-primary" : "text-muted-foreground"}`}
              >
                {l.label}
              </Link>
            ))}
            <a href={COMPANY.phoneHref} className="flex items-center gap-2 text-sm font-bold text-accent py-2">
              <Phone className="w-4 h-4" /> {COMPANY.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
