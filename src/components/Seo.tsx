import { useEffect } from 'react';

const title = 'MOEL The Barbershop Frankfurt | Barbershop in Frankfurt am Main';
const description =
  'MOEL The Barbershop in Frankfurt am Main. Hochwertige Haarschnitte, Bartpflege und modernes Grooming in der Eckenheimer Landstraße 48.';
const canonicalUrl = 'https://moel.de/';
const imageUrl = 'https://moel.de/bild1.jpeg';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Barbershop',
  name: 'MOEL The Barbershop',
  url: canonicalUrl,
  image: imageUrl,
  description,
  telephone: '+496956005445',
  email: 'info@moel.de',
  priceRange: 'EUR',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Eckenheimer Landstraße 48',
    postalCode: '60318',
    addressLocality: 'Frankfurt am Main',
    addressCountry: 'DE',
  },
  sameAs: [
    'https://www.instagram.com/moel.thebarbershop',
    'https://www.tiktok.com/@moel.thebarbersho',
    'https://www.planity.com/de-DE/moel-60318-frankfurt-am-main',
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '17:00',
    },
  ],
  areaServed: {
    '@type': 'City',
    name: 'Frankfurt am Main',
  },
};

function upsertMeta(name: string, content: string, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(property ? 'property' : 'name', name);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

export default function Seo() {
  useEffect(() => {
    document.title = title;

    upsertMeta('description', description);
    upsertMeta('robots', 'index, follow');
    upsertMeta('og:title', 'MOEL The Barbershop Frankfurt', true);
    upsertMeta(
      'og:description',
      'Barbershop in Frankfurt am Main mit Haarschnitt, Bartpflege und Terminbuchung online.',
      true,
    );
    upsertMeta('og:url', canonicalUrl, true);
    upsertMeta('og:type', 'website', true);
    upsertMeta('og:image', imageUrl, true);
    upsertMeta('twitter:card', 'summary_large_image');
    upsertMeta('twitter:title', 'MOEL The Barbershop Frankfurt');
    upsertMeta(
      'twitter:description',
      'MOEL ist Ihr Barbershop in Frankfurt am Main für präzise Haarschnitte, Bartpflege und Stil.',
    );
    upsertMeta('twitter:image', imageUrl);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    let script = document.getElementById('moel-structured-data');
    if (!script) {
      script = document.createElement('script');
      script.id = 'moel-structured-data';
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(structuredData);
  }, []);

  return null;
}
