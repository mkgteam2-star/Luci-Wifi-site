import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Wifi, Tv, Package, Phone, ArrowRight, CheckCircle, Star, Users, Zap, Shield, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import CallToAction from "@/components/CallToAction";
import { COMPANY } from "@/lib/constants";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const services = [
  { icon: Wifi, title: "Internet", desc: "Blazing-fast speeds up to 1 Gbps for streaming, gaming, and working from home.", path: "/internet", color: "text-primary" },
  { icon: Tv, title: "Cable TV", desc: "Crystal-clear HD channels with local, sports, news, and premium entertainment.", path: "/cable", color: "text-accent" },
  { icon: Package, title: "Bundles", desc: "Save big by combining Internet and Cable into one convenient monthly package.", path: "/bundles", color: "text-primary" },
];

const steps = [
  { num: "01", title: "Check Availability", desc: "Call us or visit our website to see if LuciConnect services your area." },
  { num: "02", title: "Choose Your Plan", desc: "Pick the Internet, Cable, or Bundle package that fits your household's needs." },
  { num: "03", title: "Get Connected", desc: "Our technicians handle the setup — enjoy fast, reliable service from day one." },
];

const testimonials = [
  { name: "Sarah M.", text: "Switched to LuciConnect and haven't looked back. The speeds are incredible and the price is fair.", rating: 5 },
  { name: "James T.", text: "Best customer service I've had from any ISP. They actually answer the phone!", rating: 5 },
  { name: "Linda K.", text: "The bundle deal saved us over $40/month compared to our old provider. Highly recommend.", rating: 5 },
];

const faqs = [
  { q: "What areas does LuciConnect serve?", a: "We proudly serve customers across the USA. Call us to check availability at your specific address." },
  { q: "How fast is the installation process?", a: "Most installations are completed within 2-3 business days of your order. Our technicians will schedule a time that works for you." },
  { q: "Do you require a contract?", a: "We offer both contract and no-contract options. Ask our team about the flexibility that works best for your situation." },
  { q: "What happens if I experience an outage?", a: "Our 24/7 support team is always available. Call (877) 213-6707 and we'll get you back online as quickly as possible." },
];

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead title="Home" description="LuciConnect offers reliable high-speed internet, cable TV, and bundle packages across the USA. Call (877) 213-6707." canonical="https://luciconnect.com/" />

      {/* Hero */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" style={{ backgroundSize: "200% 200%", animation: "gradient-shift 12s ease infinite" }} />
        {/* Animated wifi waves */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {[0, 0.7, 1.4].map((d, i) => (
            <div key={i} className="absolute w-40 h-40 -top-20 -left-20 rounded-full border-2 border-primary/15 animate-wifi-wave" style={{ animationDelay: `${d}s` }} />
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Serving Customers Across the USA
            </span>
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1} className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-foreground leading-tight">
            Fast. Reliable.{" "}
            <span className="text-gradient">Connected.</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            High-speed Internet, Crystal-clear Cable TV, and unbeatable Bundle deals — all from your trusted local provider.
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={COMPANY.phoneHref}>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-bold text-lg glow-accent">
                <Phone className="w-5 h-5 mr-2" /> Call {COMPANY.phone}
              </Button>
            </a>
            <Link to="/bundles">
              <Button size="lg" variant="outline" className="font-heading font-semibold">
                View Plans <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Our Services</h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">Everything you need to stay connected, entertained, and informed.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Link to={s.path}>
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-border h-full">
                    <CardContent className="p-8 text-center space-y-4">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 ${s.color} group-hover:scale-110 transition-transform`}>
                        <s.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-foreground">{s.title}</h3>
                      <p className="text-muted-foreground text-sm">{s.desc}</p>
                      <span className="inline-flex items-center text-primary text-sm font-semibold">
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">How It Works</h2>
            <p className="text-muted-foreground mt-3">Getting started is simple — just three easy steps.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <motion.div key={s.num} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="text-center space-y-3">
                <span className="text-5xl font-heading font-extrabold text-primary/20">{s.num}</span>
                <h3 className="text-lg font-heading font-bold text-foreground">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Why Choose LuciConnect?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Speeds up to 1 Gbps" },
              { icon: Shield, title: "Reliable Service", desc: "99.9% uptime guarantee" },
              { icon: Users, title: "Local Support", desc: "Michigan-based team" },
              { icon: Clock, title: "24/7 Help", desc: "Always here for you" },
            ].map((f, i) => (
              <motion.div key={f.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-background border border-border">
                <f.icon className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-heading font-bold text-foreground">{f.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-14">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Card className="h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm italic">"{t.text}"</p>
                    <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-14">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="border border-border rounded-lg overflow-hidden bg-background">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="font-heading font-semibold text-foreground">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground animate-fade-in">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default Index;
