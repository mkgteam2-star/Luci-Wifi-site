import { motion } from "framer-motion";
import { Wifi, Phone, ArrowRight, CheckCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import CallToAction from "@/components/CallToAction";
import { COMPANY } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const plans = [
  {
    name: "Essential",
    speed: "100 Mbps",
    price: "$49.99",
    features: ["Unlimited Data", "Free Modem Rental", "Email Support", "Basic Security Suite"],
    popular: false,
  },
  {
    name: "Performance",
    speed: "500 Mbps",
    price: "$69.99",
    features: ["Unlimited Data", "Free Modem & Router", "24/7 Phone Support", "Advanced Security Suite", "Free Installation"],
    popular: true,
  },
  {
    name: "Ultra",
    speed: "1 Gbps",
    price: "$89.99",
    features: ["Unlimited Data", "Premium Equipment", "Priority 24/7 Support", "Whole-Home Security", "Free Installation", "Static IP Option"],
    popular: false,
  },
];

const InternetPage = () => (
  <>
    <SEOHead title="Internet Plans" description="Explore Luci Wifi high-speed internet plans. From 100 Mbps to 1 Gbps, find the perfect speed for your home. Call (877) 213-6707." />

    {/* Hero */}
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background">
      <div className="container mx-auto px-4 text-center space-y-6">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <Wifi className="w-8 h-8 text-primary" />
          </div>
        </motion.div>
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
          High-Speed Internet Plans
        </motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2} className="text-lg text-muted-foreground max-w-xl mx-auto">
          Stream, game, work, and connect with speeds designed for modern life.
        </motion.p>
      </div>
    </section>

    {/* Plans */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <motion.div key={p.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
              <Card className={`h-full relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${p.popular ? "border-2 border-primary glow-primary" : "border-border"}`}>
                {p.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground">{p.name}</h3>
                    <p className="text-3xl font-heading font-extrabold text-primary mt-2">{p.speed}</p>
                  </div>
                  <div>
                    <span className="text-3xl font-heading font-extrabold text-foreground">{p.price}</span>
                    <span className="text-muted-foreground text-sm">/mo</span>
                  </div>
                  <ul className="space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <a href={COMPANY.phoneHref} className="block">
                    <Button className={`w-full font-heading font-semibold ${p.popular ? "bg-accent hover:bg-accent/90 text-accent-foreground" : ""}`}>
                      <Phone className="w-4 h-4 mr-2" /> Call to Order
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">Why Our Internet Stands Out</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { title: "No Data Caps", desc: "Stream and download without worrying about limits." },
            { title: "Low Latency", desc: "Perfect for gaming, video calls, and real-time applications." },
            { title: "Free Equipment", desc: "Modem and router included on most plans." },
            { title: "Local Technicians", desc: "Fast, professional installation by our dedicated team." },
          ].map((f, i) => (
            <motion.div key={f.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="p-6 rounded-xl bg-background border border-border">
              <h4 className="font-heading font-bold text-foreground mb-2">{f.title}</h4>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">Internet FAQs</h2>
        <Accordion type="single" collapsible className="space-y-3">
          {[
            { q: "What internet speed do I need?", a: "For basic browsing and email, 100 Mbps is sufficient. For streaming, gaming, and multiple devices, we recommend 500 Mbps or higher. Households with heavy usage should consider our 1 Gbps Ultra plan." },
            { q: "Is there a data cap on your internet plans?", a: "No — all Luci Wifi internet plans include truly unlimited data. Stream, download, and browse as much as you want without overage charges or throttling." },
            { q: "How long does internet installation take?", a: "Most installations are completed within 2–3 business days. Our local technicians will schedule a convenient time and handle everything for you." },
            { q: "Can I use my own modem or router?", a: "Yes, you can use your own compatible equipment. However, all our plans include free modem and router rental, so you don't have to worry about buying your own." },
          ].map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg bg-card px-5">
              <AccordionTrigger className="font-heading font-semibold text-foreground text-left">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    <CallToAction title="Ready for Faster Internet?" subtitle="Call now and our team will find the perfect speed for your home." />
  </>
);

export default InternetPage;
