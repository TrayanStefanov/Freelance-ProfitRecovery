import React from "react";
import { useTranslation } from "react-i18next";

const baseUrl = "https://profitrecoverybg.eu";

const organizationSchema = (t) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": t('site.title'),
  "url": baseUrl,
  "logo": `${baseUrl}/profitback_bulgarian.png`,
  "sameAs": [
    "https://www.linkedin.com/company/profitrecoverybg"
  ]
});

const breadcrumbBase = (t) => [
  {
    "@type": "ListItem",
    "position": 1,
    "name": t('navbar.home'),
    "item": baseUrl
  }
];

const pageData = (t) => ({
  home: {
    url: baseUrl,
    name: t('navbar.home'),
    description: t('home.greeting'),
    breadcrumb: [...breadcrumbBase(t)],
  },
  about: {
    url: `${baseUrl}/about-us`,
    name: t('navbar.about'),
    description: t('about.intro.paragraph.1'),
    breadcrumb: [...breadcrumbBase(t), {
      "@type": "ListItem",
      "position": 2,
      "name": t('navbar.about'),
      "item": `${baseUrl}/about-us`
    }],
  },
  contacts: {
    url: `${baseUrl}/contacts`,
    name: t('navbar.contacts'),
    description: t('contacts.text.normal') + t('contacts.text.bold'),
    breadcrumb: [...breadcrumbBase(t), {
      "@type": "ListItem",
      "position": 2,
      "name": t('navbar.contacts'),
      "item": `${baseUrl}/contacts`
    }],
  },
  processes: {
    url: `${baseUrl}/prices-and-processes`,
    name: t('navbar["prices-and-processes"]'),
    description: t('prices-and-processes.intro.subtitle'),
    breadcrumb: [...breadcrumbBase(t), {
      "@type": "ListItem",
      "position": 2,
      "name": t('navbar["prices-and-processes"]'),
      "item": `${baseUrl}/prices-and-processes`
    }],
  },
  services: {
    url: `${baseUrl}/services-and-scope`,
    name: t('navbar["services-and-scope"]'),
    description: t('services-and-scope.intro.text'),
    breadcrumb: [...breadcrumbBase(t), {
      "@type": "ListItem",
      "position": 2,
      "name": t('navbar["services-and-scope"]'),
      "item": `${baseUrl}/services-and-scope`
    }],
    servicesList: [
      { title: t('services-and-scope.services.leftlist.1'), description: t('services-and-scope.services.rightlist.1') },
      { title: t('services-and-scope.services.leftlist.2'), description: t('services-and-scope.services.rightlist.2') },
      { title: t('services-and-scope.services.leftlist.3'), description: t('services-and-scope.services.rightlist.3') },
      { title: t('services-and-scope.services.leftlist.4'), description: t('services-and-scope.services.rightlist.4') },
      { title: t('services-and-scope.services.leftlist.5'), description: t('services-and-scope.services.rightlist.5') },
      { title: t('services-and-scope.services.leftlist.6'), description: t('services-and-scope.services.rightlist.6') },
      { title: t('services-and-scope.services.leftlist.7'), description: t('services-and-scope.services.rightlist.7') },
    ]
  }
});

const SchemaOrg = ({ page }) => {
  const { t } = useTranslation();

  const data = pageData(t)[page];
  if (!data) {
    console.warn(`SchemaOrg: Unknown page "${page}"`);
    return null;
  }

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": data.breadcrumb
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": data.url,
    "name": data.name,
    "description": data.description,
    "breadcrumb": breadcrumbList,
    "publisher": organizationSchema(t),
  };

  // Optional: add services structured data if page is services
  let additionalSchema = [];
  if (page === "services" && data.servicesList) {
    additionalSchema = [
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": t('services-and-scope.services.title'),
        "itemListElement": data.servicesList.map((service, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": service.title,
          "description": service.description
        }))
      }
    ];
  }

  // Compose final JSON-LD array
  const jsonLd = [
    organizationSchema(t),
    breadcrumbList,
    webPage,
    ...additionalSchema
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }}
    />
  );
};

export default SchemaOrg;
