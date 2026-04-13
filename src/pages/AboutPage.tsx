import { motion } from "framer-motion";
import { Users, Heart, MapPin, Award } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEOHead from "@/components/SEOHead";
import CallToAction from "@/components/CallToAction";
import { COMPANY } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const AboutPage = () => (
  <>
    <SEOHead title="About Us" description={`Learn about ${COMPANY.name}, a reliable internet and cable provider serving customers across the USA. Operated by ${COMPANY.legalName}.`} />

    <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-background">
      <div className="container mx-auto px-4 text-center space-y-6 max-w-3xl">
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
          About {COMPANY.name}
        </motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={1} className="text-lg text-muted-foreground">
          We're a dedicated provider committed to bringing reliable internet and cable services to customers across the United States.
        </motion.p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-foreground">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              {COMPANY.name} was founded with a simple mission: to bring fast, affordable, and reliable connectivity to homes and businesses across the USA. As a division of {COMPANY.legalName}, we understand that internet and cable aren't luxuries — they're essential services that families and businesses depend on every day.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Headquartered at {COMPANY.address}, we're proud to serve our customers with the kind of personalized attention that sets us apart. When you call {COMPANY.phone}, you're speaking with someone who cares about your experience.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-foreground">Our Values</h2>
            <div className="space-y-4">
              {[
                { icon: Heart, title: "Community First", desc: "We reinvest in the communities we serve." },
                { icon: Award, title: "Quality Service", desc: "Reliable infrastructure backed by responsive support." },
                { icon: Users, title: "Personal Touch", desc: "Real people, not robots, when you need help." },
                { icon: MapPin, title: "USA Coverage", desc: "Serving customers across the United States." },
              ].map((v) => (
                <div key={v.title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <v.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground">{v.title}</h4>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">About Us FAQs</h2>
        <Accordion type="single" collapsible className="space-y-3">
          {[
            { q: "Who owns and operates NLT Bundles?", a: `NLT Bundles is a service of ${COMPANY.legalName}, a locally registered company based in Hillsdale, Michigan. We are independently owned and operated.` },
            { q: "How long has NLT Bundles been in business?", a: "NLT Bundles has been proudly serving the community with reliable internet and cable services, building long-term relationships with our customers through quality service and local support." },
            { q: "Do you serve areas outside of Michigan?", a: "We are expanding our services across the USA. Call us at (877) 213-6707 to check availability in your area." },
          ].map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg bg-background px-5">
              <AccordionTrigger className="font-heading font-semibold text-foreground text-left">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    <CallToAction />
  </>
);

export default AboutPage;
