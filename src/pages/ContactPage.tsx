import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SEOHead from "@/components/SEOHead";
import { COMPANY } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <SEOHead title="Contact Us" description={`Get in touch with ${COMPANY.name}. Call ${COMPANY.phone} or visit us at ${COMPANY.address}.`} />

      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-4 text-center space-y-6">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-heading font-extrabold text-foreground">
            Contact Us
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={1} className="text-lg text-muted-foreground max-w-xl mx-auto">
            We'd love to hear from you. Reach out by phone, email, or fill out the form below.
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="space-y-8">
              <h2 className="text-2xl font-heading font-bold text-foreground">Get In Touch</h2>
              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Phone", value: COMPANY.phone, href: COMPANY.phoneHref },
                  { icon: MapPin, label: "Address", value: COMPANY.address },
                  { icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
                  { icon: Clock, label: "Hours", value: "Mon–Fri: 8am–8pm | Sat: 9am–5pm | Sun: Closed" },
                ].map((c) => (
                  <div key={c.label} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <c.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="font-semibold text-foreground hover:text-primary transition-colors">{c.value}</a>
                      ) : (
                        <p className="font-semibold text-foreground">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <form onSubmit={handleSubmit} className="space-y-5 bg-card p-8 rounded-2xl border border-border shadow-sm">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="John Doe" className="mt-1" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="john@example.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="(555) 555-5555" className="mt-1" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required placeholder="How can we help?" className="mt-1" rows={5} />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-semibold">
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
