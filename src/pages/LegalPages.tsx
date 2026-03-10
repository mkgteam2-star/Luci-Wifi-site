import SEOHead from "@/components/SEOHead";
import { COMPANY } from "@/lib/constants";

interface LegalPageProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const LegalWrapper = ({ title, description, children }: LegalPageProps) => (
  <>
    <SEOHead title={title} description={description} />
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-8">{title}</h1>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6 [&_h2]:text-foreground [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-xl [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:leading-relaxed [&_ul]:space-y-1 [&_ul]:list-disc [&_ul]:pl-5">
          {children}
        </div>
      </div>
    </section>
  </>
);

export const DisclaimerPage = () => (
  <LegalWrapper title="Disclaimer" description={`Disclaimer for ${COMPANY.name} operated by ${COMPANY.legalName}.`}>
    <p>Last updated: January 1, 2026</p>
    <h2>General Disclaimer</h2>
    <p>The information provided by {COMPANY.name} ("{COMPANY.legalName}") on this website is for general informational purposes only. All information on the site is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.</p>
    <h2>Service Availability</h2>
    <p>Internet and cable television services offered by {COMPANY.name} are subject to availability in your area. Service speeds, channel lineups, and pricing may vary by location. Actual speeds may vary and are not guaranteed. Please contact us at {COMPANY.phone} for specific availability at your address.</p>
    <h2>External Links</h2>
    <p>This website may contain links to third-party websites or content. We do not warrant the accuracy, relevance, or completeness of any information on these linked websites.</p>
    <h2>Contact</h2>
    <p>If you have questions about this disclaimer, contact us at {COMPANY.phone} or write to us at {COMPANY.address}.</p>
  </LegalWrapper>
);

export const PrivacyPolicyPage = () => (
  <LegalWrapper title="Privacy Policy" description={`Privacy policy for ${COMPANY.name} by ${COMPANY.legalName}.`}>
    <p>Last updated: January 1, 2026</p>
    <h2>Information We Collect</h2>
    <p>{COMPANY.legalName} ("we," "us," or "our"), operating as {COMPANY.name}, collects information you provide directly, including your name, email address, phone number, service address, and payment information when you sign up for our services or contact us.</p>
    <h2>How We Use Your Information</h2>
    <ul>
      <li>To provide and maintain our internet and cable services</li>
      <li>To process transactions and send related information</li>
      <li>To send service updates and promotional communications</li>
      <li>To respond to your comments, questions, and requests</li>
      <li>To monitor and analyze usage patterns and trends</li>
    </ul>
    <h2>Information Sharing</h2>
    <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except as necessary to provide our services or as required by law.</p>
    <h2>Data Security</h2>
    <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
    <h2>Contact Us</h2>
    <p>For privacy-related inquiries, contact us at {COMPANY.phone} or write to {COMPANY.legalName}, {COMPANY.address}.</p>
  </LegalWrapper>
);

export const TermsPage = () => (
  <LegalWrapper title="Terms & Conditions" description={`Terms and conditions for ${COMPANY.name} services by ${COMPANY.legalName}.`}>
    <p>Last updated: January 1, 2026</p>
    <h2>Acceptance of Terms</h2>
    <p>By accessing or using {COMPANY.name} services provided by {COMPANY.legalName}, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>
    <h2>Service Description</h2>
    <p>{COMPANY.name} provides internet access and cable television services to residential and commercial customers in the Hillsdale, MI area. Service availability, speeds, and channel lineups are subject to your location and the plan selected.</p>
    <h2>Billing and Payment</h2>
    <p>You agree to pay all fees associated with your selected service plan. Billing occurs monthly in advance. Late payments may result in service interruption and additional fees.</p>
    <h2>Service Modifications</h2>
    <p>We reserve the right to modify, suspend, or discontinue any aspect of our services at any time with reasonable notice to affected customers.</p>
    <h2>Limitation of Liability</h2>
    <p>{COMPANY.legalName} shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.</p>
    <h2>Contact</h2>
    <p>Questions about these terms may be directed to {COMPANY.phone} or {COMPANY.legalName}, {COMPANY.address}.</p>
  </LegalWrapper>
);

export const RefundPolicyPage = () => (
  <LegalWrapper title="Refund Policy" description={`Refund policy for ${COMPANY.name} services.`}>
    <p>Last updated: January 1, 2026</p>
    <h2>Refund Eligibility</h2>
    <p>{COMPANY.name}, operated by {COMPANY.legalName}, is committed to customer satisfaction. If you are unsatisfied with our services, you may be eligible for a refund under the following conditions:</p>
    <ul>
      <li>Service cancellation within 30 days of initial activation</li>
      <li>Service outages exceeding 72 continuous hours (pro-rated credit)</li>
      <li>Billing errors or duplicate charges</li>
    </ul>
    <h2>How to Request a Refund</h2>
    <p>Contact our support team at {COMPANY.phone} to initiate a refund request. Please have your account number and relevant details ready.</p>
    <h2>Processing Time</h2>
    <p>Approved refunds are typically processed within 10-15 business days and will be returned to your original payment method.</p>
    <h2>Non-Refundable Items</h2>
    <p>Installation fees, equipment purchase costs, and pay-per-view charges are non-refundable.</p>
  </LegalWrapper>
);

export const AdvertisingDisclosurePage = () => (
  <LegalWrapper title="Advertising Disclosure" description={`Advertising disclosure for ${COMPANY.name}.`}>
    <p>Last updated: January 1, 2026</p>
    <h2>Advertising Practices</h2>
    <p>{COMPANY.name}, a service of {COMPANY.legalName}, is committed to transparent advertising. The information presented on this website, including pricing, speeds, and service descriptions, is intended to be accurate at the time of publication.</p>
    <h2>Pricing</h2>
    <p>All prices shown are monthly rates and may not include taxes, fees, or equipment charges. Promotional pricing is available for a limited time and subject to change. Please call {COMPANY.phone} for current pricing and availability.</p>
    <h2>Speed Claims</h2>
    <p>Internet speeds advertised represent maximum download speeds under ideal conditions. Actual speeds may vary based on network conditions, equipment, and other factors.</p>
    <h2>Channel Counts</h2>
    <p>Channel counts are approximate and subject to change. Channel availability may vary by location and package.</p>
  </LegalWrapper>
);

export const CookiesPolicyPage = () => (
  <LegalWrapper title="Cookies Policy" description={`Cookies policy for ${COMPANY.name} website.`}>
    <p>Last updated: January 1, 2026</p>
    <h2>What Are Cookies</h2>
    <p>Cookies are small text files stored on your device when you visit our website. {COMPANY.name} ({COMPANY.legalName}) uses cookies to improve your browsing experience.</p>
    <h2>How We Use Cookies</h2>
    <ul>
      <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
      <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
      <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
    </ul>
    <h2>Managing Cookies</h2>
    <p>You can control cookies through your browser settings. Disabling certain cookies may affect website functionality.</p>
    <h2>Contact</h2>
    <p>For questions about our cookie practices, contact us at {COMPANY.phone} or write to {COMPANY.legalName}, {COMPANY.address}.</p>
  </LegalWrapper>
);
