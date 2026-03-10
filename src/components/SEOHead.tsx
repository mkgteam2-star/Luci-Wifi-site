import { Helmet } from "react-helmet-async";
import { COMPANY } from "@/lib/constants";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  jsonLd?: Record<string, unknown>;
}

const SEOHead = ({ title, description, canonical, jsonLd }: SEOHeadProps) => {
  const fullTitle = `${title} | ${COMPANY.name}`;

  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY.name,
    telephone: COMPANY.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1751 W Card Road",
      addressLocality: "Hillsdale",
      addressRegion: "MI",
      postalCode: "48242",
      addressCountry: "US",
    },
    url: "https://luciwifi.com",
    description,
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd || defaultJsonLd)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
