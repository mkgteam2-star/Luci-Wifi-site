import { motion } from "framer-motion";
import { Tv, Phone, CheckCircle } from "lucide-react";
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
    name: "Basic Cable",
    channels: "50+",
    price: "$39.99",
    features: ["Local Channels", "News & Weather", "Basic Sports", "SD & HD Quality", "1 DVR Included"],
    popular: false,
  },
  {
    name: "Standard Cable",
    channels: "150+",
    price: "$64.99",
    features: ["All Basic Channels", "Premium Sports Networks", "Movie Channels", "Full HD Quality", "2 DVRs Included", "On-Demand Library"],
    popular: true,
  },
  {
    name: "Premium Cable",
    channels: "250+",
    price: "$89.99",
    features: ["All Standard Channels", "HBO, Showtime & More", "International Channels", "4K Ultra HD", "3 DVRs Included", "Unlimited On-Demand", "PPV Access"],
    popular: false,
  },
];

const CablePage = () => (
  <>
    <SEOHead title="Cable TV Plans" description="NLT Bundles cable TV packages with 50-250+ channels. HD quality, DVR included. Call (877) 213-6707." />

    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-accent/5 via-background to-background">
      <div className="container mx-auto px-4 text-center space-y-6">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-4">
            <Tv className="w-8 h-8 text-accent" />
          </div>
        </motion.div>
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
          Cable TV Packages
        </motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2} className="text-lg text-muted-foreground max-w-xl mx-auto">
          Crystal-clear entertainment with local, national, and premium channels.
        </motion.p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <motion.div key={p.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
              <Card className={`h-full relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${p.popular ? "border-2 border-accent glow-accent" : "border-border"}`}>
                {p.popular && (
                  <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Best Value
                  </div>
                )}
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground">{p.name}</h3>
                    <p className="text-3xl font-heading font-extrabold text-accent mt-2">{p.channels} Channels</p>
                  </div>
                  <div>
                    <span className="text-3xl font-heading font-extrabold text-foreground">{p.price}</span>
                    <span className="text-muted-foreground text-sm">/mo</span>
                  </div>
                  <ul className="space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent shrink-0" /> {f}
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

    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">Cable TV Features</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { title: "HD & 4K Quality", desc: "Watch your favorite shows in stunning high definition." },
            { title: "DVR Included", desc: "Record shows and watch them on your schedule." },
            { title: "On-Demand Content", desc: "Thousands of movies and shows available anytime." },
            { title: "Parental Controls", desc: "Keep content family-friendly with easy-to-use controls." },
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
        <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">Cable TV FAQs</h2>
        <Accordion type="single" collapsible className="space-y-3">
          {[
            { q: "Can I customize my channel lineup?", a: "Our plans come with curated channel packages, but you can add premium channels like HBO, Showtime, and more to any plan. Call us to discuss your preferences." },
            { q: "Is a DVR included with my cable plan?", a: "Yes! All cable plans include at least one DVR at no extra cost. Higher-tier plans include up to 3 DVRs so every family member can record their favorites." },
            { q: "Do you offer 4K content?", a: "Our Premium Cable package supports 4K Ultra HD on compatible channels. You'll need a 4K-capable TV to enjoy the full experience." },
            { q: "Can I watch on multiple TVs?", a: "Absolutely. We provide additional set-top boxes for multi-room viewing. Contact us to add extra boxes to your plan at a small monthly fee." },
          ].map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg bg-card px-5">
              <AccordionTrigger className="font-heading font-semibold text-foreground text-left">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    <CallToAction title="Upgrade Your Entertainment" subtitle="Call now to get started with Cable TV from NLT Bundles." />
  </>
);

export default CablePage;
