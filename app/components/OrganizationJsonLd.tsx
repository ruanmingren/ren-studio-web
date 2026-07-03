export default function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ren Animation Studio",
    "url": "https://renanimationstudio.com",
    "logo": "https://renanimationstudio.com/og-image.jpg", // Ông nhớ đổi hình này thành logo chuẩn nha
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
      "https://www.youtube.com/@RenAnimationStudio",
      "https://www.tiktok.com/@RenAnimationStudio"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  ); 
}