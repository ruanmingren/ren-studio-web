export default function OrganizationJsonLd() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Ren Animation Studio",
      "url": "https://renanimationstudio.com",
      "logo": "https://renanimationstudio.com/og-image.jpg",
      "description": "High-quality 2D Anime Production, Digital Illustration, and Background Painting based in Ho Chi Minh City, Vietnam.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Akari City, Binh Tan District",
        "addressLocality": "Ho Chi Minh City",
        "addressCountry": "VN"
      },
      "sameAs": [
        "https://www.facebook.com/renanimationstudio",
        "https://x.com/RenAnimaStudio",
        "https://www.youtube.com/@RenAnimationStudio"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Ren Animation Studio",
      "url": "https://renanimationstudio.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://renanimationstudio.com/works?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]; 

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}