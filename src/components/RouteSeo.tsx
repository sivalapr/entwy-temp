import React from 'react';
import { useLocation } from 'react-router-dom';
import { SeoHead } from './SeoHead';
import { allServiceDetails } from '../data/serviceDetailsData';
import { caseStudiesData, servicesPillarsData } from '../data/sitemapData';

export const RouteSeo: React.FC = () => {
  const { pathname } = useLocation();

  // Strip trailing slashes for consistent matching
  const cleanPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');

  // 1. Static route definitions
  if (cleanPath === '/') {
    return (
      <SeoHead
        title="ENTWY — Transformative AI from Insight to Impact"
        description="ENTWY helps organizations put reliable data, intelligent automation, and scalable AI solutions to work. Specialized in enterprise AI, autonomous agents, and digital products."
        canonicalPath="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "ENTWY",
          "url": "https://entwy.com",
          "description": "Transformative AI from Insight to Impact",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://entwy.com/services?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }}
      />
    );
  }

  if (cleanPath === '/services') {
    return (
      <SeoHead
        title="Services — Enterprise AI, Design & Engineering"
        description="Explore ENTWY's full suite of services across Strategy, UI/UX Design, Enterprise AI Solutions, Full-Stack Technology, and Growth Marketing."
        canonicalPath="/services"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Enterprise AI & Digital Engineering",
          "provider": {
            "@type": "Organization",
            "name": "ENTWY",
            "url": "https://entwy.com"
          },
          "areaServed": "Global",
          "description": "Comprehensive digital product development, AI transformation, and system architecture services."
        }}
      />
    );
  }

  if (cleanPath === '/solutions') {
    return (
      <SeoHead
        title="Solutions — Architecture & Systems Engineered for Scale"
        description="Turn complex operational challenges into competitive advantages with ENTWY's scalable SaaS architecture, autonomous agents, and enterprise AI transformations."
        canonicalPath="/solutions"
      />
    );
  }

  if (cleanPath.startsWith('/solutions/')) {
    const solutionId = cleanPath.replace('/solutions/', '');
    const readable = solutionId.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    return (
      <SeoHead
        title={`${readable} Solution`}
        description={`Enterprise-grade ${readable.toLowerCase()} engineered by ENTWY. Discover our architecture, implementation roadmap, and measurable outcomes.`}
        canonicalPath={cleanPath}
      />
    );
  }

  if (cleanPath === '/work') {
    return (
      <SeoHead
        title="Work & Case Studies — Proven Engineering Outcomes"
        description="Explore how ENTWY partners with ambitious enterprises and startups to engineer high-impact AI platforms, SaaS systems, and digital marketplaces."
        canonicalPath="/work"
      />
    );
  }

  if (cleanPath.startsWith('/work/')) {
    const csId = cleanPath.replace('/work/', '');
    const study = caseStudiesData.find((c) => c.id.toLowerCase() === csId.toLowerCase());
    if (study) {
      return (
        <SeoHead
          title={`${study.client} (${study.title}) — Case Study`}
          description={study.overview || `Case study: How ENTWY engineered ${study.title} for ${study.client}.`}
          canonicalPath={cleanPath}
          type="article"
          jsonLd={{
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": `${study.client} Case Study: ${study.title}`,
            "description": study.overview,
            "author": {
              "@type": "Organization",
              "name": "ENTWY"
            },
            "publisher": {
              "@type": "Organization",
              "name": "ENTWY",
              "logo": {
                "@type": "ImageObject",
                "url": "https://entwy.com/entwy-logo.png"
              }
            }
          }}
        />
      );
    }
  }

  if (cleanPath === '/process') {
    return (
      <SeoHead
        title="Our Process — Disciplined Software Delivery Timeline"
        description="Learn about ENTWY's transparent 5-stage software delivery process: Discover, Design, Develop, Deploy, and Scale."
        canonicalPath="/process"
      />
    );
  }

  if (cleanPath.startsWith('/process/')) {
    const stageId = cleanPath.replace('/process/', '');
    const stageName = stageId.charAt(0).toUpperCase() + stageId.slice(1);
    return (
      <SeoHead
        title={`${stageName} Stage — Delivery Process`}
        description={`Detailed breakdown of the ${stageName} phase in ENTWY's software engineering and deployment lifecycle.`}
        canonicalPath={cleanPath}
      />
    );
  }

  if (cleanPath === '/industries') {
    return (
      <SeoHead
        title="Industries — Specialized Solutions for Enterprise Sectors"
        description="Explore how ENTWY designs and deploys tailored AI and software solutions across FinTech, Healthcare, Logistics, Retail, and SaaS."
        canonicalPath="/industries"
      />
    );
  }

  if (cleanPath === '/about') {
    return (
      <SeoHead
        title="About Us — AI Systems & Digital Product Studio"
        description="Learn about ENTWY's mission, leadership, and engineering standards. We craft transformative AI systems and resilient digital platforms."
        canonicalPath="/about"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About ENTWY",
          "description": "AI systems and digital product studio building intelligent platforms and autonomous agents.",
          "publisher": {
            "@type": "Organization",
            "name": "ENTWY",
            "url": "https://entwy.com"
          }
        }}
      />
    );
  }

  if (cleanPath === '/insights') {
    return (
      <SeoHead
        title="Insights — Research, Architecture & AI Analysis"
        description="In-depth technical perspectives, engineering benchmarks, and strategic analysis on generative AI, autonomous agents, and cloud architecture."
        canonicalPath="/insights"
      />
    );
  }

  if (cleanPath === '/careers') {
    return (
      <SeoHead
        title="Careers & Residencies — Build the Future with ENTWY"
        description="Join ENTWY's distributed engineering, design, and AI research teams. Explore open roles, residencies, and fellowship programs."
        canonicalPath="/careers"
      />
    );
  }

  if (cleanPath.startsWith('/start-a-project')) {
    return (
      <SeoHead
        title="Start a Project — Connect with Senior Technical Leadership"
        description="Schedule a technical consultation with ENTWY. Get architectural estimates, feasibility reviews, and project roadmaps within 48 hours."
        canonicalPath="/start-a-project"
      />
    );
  }

  // Specialized High-Intent Landing Pages
  if (cleanPath === '/api-development' || cleanPath === '/services/api-development' || cleanPath === '/services/api-integration') {
    return (
      <SeoHead
        title="Enterprise API Development & Integration Services"
        description="Production-grade REST, GraphQL, and event-driven API engineering. High concurrency, sub-second latency, and zero-downtime reliability."
        canonicalPath="/api-development"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Enterprise API Development & Integration",
          "provider": {
            "@type": "Organization",
            "name": "ENTWY",
            "url": "https://entwy.com"
          },
          "serviceType": "API Development"
        }}
      />
    );
  }

  if (cleanPath === '/mcp-development-services' || cleanPath === '/mcp-development' || cleanPath === '/services/mcp-development') {
    return (
      <SeoHead
        title="Model Context Protocol (MCP) Development Services"
        description="Bespoke Model Context Protocol (MCP) servers and tools. Connect LLMs, Claude Desktop, and AI agents directly to enterprise databases and internal APIs."
        canonicalPath="/mcp-development-services"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Model Context Protocol Development",
          "provider": {
            "@type": "Organization",
            "name": "ENTWY",
            "url": "https://entwy.com"
          },
          "serviceType": "AI Protocol & MCP Tool Engineering"
        }}
      />
    );
  }

  // Pillar Category pages
  const pillarMatch = cleanPath.match(/^\/services\/(strategy|design|ai|technology|marketing|implementation)$/);
  if (pillarMatch) {
    const pillarKey = pillarMatch[1] as keyof typeof servicesPillarsData;
    const pillar = servicesPillarsData[pillarKey];
    if (pillar) {
      return (
        <SeoHead
          title={`${pillar.title} Services`}
          description={pillar.desc}
          canonicalPath={cleanPath}
        />
      );
    }
  }

  // Individual Service Detail pages: /services/:slug or /services/:cat/:slug
  const serviceSlug = cleanPath.split('/').pop() || '';
  const serviceDetail = allServiceDetails[serviceSlug];
  if (serviceDetail) {
    return (
      <SeoHead
        title={`${serviceDetail.title} — ${serviceDetail.categoryTitle} Services`}
        description={serviceDetail.overview || serviceDetail.tagline}
        canonicalPath={`/services/${serviceSlug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": serviceDetail.title,
          "category": serviceDetail.categoryTitle,
          "description": serviceDetail.overview,
          "provider": {
            "@type": "Organization",
            "name": "ENTWY",
            "url": "https://entwy.com"
          }
        }}
      />
    );
  }

  // Fallback default
  return (
    <SeoHead
      title="ENTWY — Transformative AI from Insight to Impact"
      description="ENTWY helps organizations put reliable data, intelligent automation, and scalable AI solutions to work."
      canonicalPath={cleanPath}
    />
  );
};

export default RouteSeo;
