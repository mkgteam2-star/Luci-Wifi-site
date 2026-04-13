import { motion } from "framer-motion";
import { Package, Phone, CheckCircle, Sparkles } from "lucide-react";
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

const bundles = [
  {
    name: "Starter Bundle",
    internet: "100 Mbps Internet",
    cable: "50+ Cable Channels",
    price: "$79.99",
    savings: "Save $10/mo",
    features: ["Unlimited Data", "HD Quality", "1 DVR", "Free Modem", "Basic Security"],
  },
  {
    name: "Family Bundle",
    internet: "500 Mbps Internet",
    cable: "150+ Cable Channels",
    price: "$119.99",
    savings: "Save $15/mo",
    features: ["Unlimited Data", "Full HD", "2 DVRs", "Free Equipment", "Advanced Security", "On-Demand Library"],
    popular: true,
  },
  {
    name: "Ultimate Bundle",
    internet: "1 Gbps Internet",
    cable: "250+ Cable Channels",
    price: "$159.99",
    savings: "Save $20/mo",
    features: ["Unlimited Data", "4K Ultra HD", "3 DVRs", "Premium Equipment", "Whole-Home Security", "Premium Channels", "PPV Access"],
  },
];

const BundlesPage = () => (
  <>
    <SEOHead title="Bundle Deals" description="Save with NLT Bundles packages. Combine Internet and Cable TV for the best value. Call (877) 213-6707." />

    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 text-center space-y-6">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <Package className="w-8 h-8 text-primary" />
          </div>
        </motion.div>
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
          Bundle & Save
        </motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2} className="text-lg text-muted-foreground max-w-xl mx-auto">
          Get the best value by combining Internet and Cable TV into one easy package.
        </motion.p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {bundles.map((b, i) => (
            <motion.div key={b.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
              <Card className={`h-full relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${b.popular ? "border-2 border-primary glow-primary" : "border-border"}`}>
                {b.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Best Value
                  </div>
                )}
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground">{b.name}</h3>
                    <div className="mt-2 space-y-1">
                      <p className="text-sm font-semibold text-primary">{b.internet}</p>
                      <p className="text-sm font-semibold text-accent">{b.cable}</p>
                    </div>
                  </div>
                  <div>
                    <span className="text-3xl font-heading font-extrabold text-foreground">{b.price}</span>
                    <span className="text-muted-foreground text-sm">/mo</span>
                    <div className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                      <Sparkles className="w-3 h-3" /> {b.savings}
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {b.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <a href={COMPANY.phoneHref} className="block">
                    <Button className={`w-full font-heading font-semibold ${b.popular ? "bg-accent hover:bg-accent/90 text-accent-foreground" : ""}`}>
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

    {/* FAQ */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">Bundle FAQs</h2>
        <Accordion type="single" collapsible className="space-y-3">
          {[
            { q: "How much can I save with a bundle?", a: "Bundling Internet and Cable saves you $10–$20/month compared to subscribing to each service separately. The more you bundle, the more you save." },
            { q: "Can I upgrade or downgrade my bundle later?", a: "Absolutely. You can change your bundle tier at any time by calling us. Changes typically take effect on your next billing cycle." },
            { q: "Do bundles require a contract?", a: "We offer both contract and month-to-month bundle options. Contract plans may include additional promotional pricing. Ask our team for details." },
            { q: "Is installation included with bundles?", a: "Yes — all Family and Ultimate bundles include free professional installation. Starter Bundle installation is available at a reduced rate." },
          ].map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg bg-background px-5">
              <AccordionTrigger className="font-heading font-semibold text-foreground text-left">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    <CallToAction title="Ready to Bundle & Save?" subtitle="Call today and let us build the perfect package for your home." />
  </>
);

export default BundlesPage;
