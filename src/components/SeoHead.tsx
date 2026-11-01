import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface SeoProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  type?: 'website' | 'article';
  image?: string;
  jsonLd?: Record<string, unknown>;
}

export const SeoHead: React.FC<SeoProps> = ({
  title,
  description,
  canonicalPath,
  type = 'website',
  image = 'https://entwy.com/entwy-logo.png',
  jsonLd,
}) => {
  const location = useLocation();

  useEffect(() => {
    // 1. Formatted document title
    const formattedTitle = title
      ? (title.includes('ENTWY') || title.includes('Entwy') ? title : `${title} | ENTWY`)
      : 'ENTWY — Transformative AI from Insight to Impact';
    document.title = formattedTitle;

    // 2. Meta description
    const metaDesc = description || 'ENTWY helps organizations put reliable data, intelligent automation, and scalable AI solutions to work.';
    let descElem = document.querySelector('meta[name="description"]');
    if (!descElem) {
      descElem = document.createElement('meta');
      descElem.setAttribute('name', 'description');
      document.head.appendChild(descElem);
    }
    descElem.setAttribute('content', metaDesc);

    // 3. Canonical URL
    const canonicalUrl = `https://entwy.com${canonicalPath || location.pathname}`;
    let canonicalElem = document.querySelector('link[rel="canonical"]');
    if (!canonicalElem) {
      canonicalElem = document.createElement('link');
      canonicalElem.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalElem);
    }
    canonicalElem.setAttribute('href', canonicalUrl);

    // 4. OpenGraph tags
    const setMetaTag = (property: string, content: string) => {
      let elem = document.querySelector(`meta[property="${property}"]`);
      if (!elem) {
        elem = document.createElement('meta');
        elem.setAttribute('property', property);
        document.head.appendChild(elem);
      }
      elem.setAttribute('content', content);
    };

    setMetaTag('og:title', formattedTitle);
    setMetaTag('og:description', metaDesc);
    setMetaTag('og:url', canonicalUrl);
    setMetaTag('og:type', type);
    setMetaTag('og:image', image);

    // 5. Twitter Card tags
    const setTwitterTag = (name: string, content: string) => {
      let elem = document.querySelector(`meta[name="${name}"]`);
      if (!elem) {
        elem = document.createElement('meta');
        elem.setAttribute('name', name);
        document.head.appendChild(elem);
      }
      elem.setAttribute('content', content);
    };

    setTwitterTag('twitter:title', formattedTitle);
    setTwitterTag('twitter:description', metaDesc);
    setTwitterTag('twitter:image', image);

    // 6. Route-specific JSON-LD structured data
    let scriptElem = document.getElementById('route-jsonld') as HTMLScriptElement | null;
    if (jsonLd) {
      if (!scriptElem) {
        scriptElem = document.createElement('script');
        scriptElem.id = 'route-jsonld';
        scriptElem.type = 'application/ld+json';
        document.head.appendChild(scriptElem);
      }
      scriptElem.textContent = JSON.stringify(jsonLd);
    } else if (scriptElem) {
      scriptElem.remove();
    }
  }, [title, description, canonicalPath, type, image, jsonLd, location.pathname]);

  return null;
};

export default SeoHead;
