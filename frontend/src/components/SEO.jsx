import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({
  title,
  description,
  keywords,
  author,
  canonicalUrl,
  previewImage,
  locale = "en_US",
  schemaType = "WebSite", // default schema type
  schemaData = {},       // extra schema properties
}) => {
  // Base schema structure, you can customize based on page type
  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "url": canonicalUrl,
    "name": title,
    "description": description,
    "image": previewImage,
    ...schemaData, // merge extra properties if passed
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta charSet="utf-8" />
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {author && <meta name="author" content={author} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content="website" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {previewImage && <meta property="og:image" content={previewImage} />}
      {previewImage && (
        <meta property="og:image:alt" content={`${title} preview image`} />
      )}
      <meta property="og:locale" content={locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {previewImage && <meta name="twitter:image" content={previewImage} />}
      {previewImage && (
        <meta name="twitter:image:alt" content={`${title} preview image`} />
      )}

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  );
};

export default SEO;
