export interface SitemapNode {
  title: string;
  badge: string;
  color: string;
  description: string;
  items: string[];
  subcategories?: {
    name: string;
    items: string[];
  }[];
}

export interface CaseStudy {
  id: string;
  category: 'ai' | 'fintech' | 'health' | 'saas';
  tag: string;
  title: string;
  client: string;
  timeline: string;
  impact: string;
  overview: string;
  stack: string[];
  thumbnailGradient: string;
}

export interface Article {
  id: string;
  topic: 'ai' | 'design' | 'product' | 'technology';
  tag: string;
  title: string;
  readTime: string;
  date: string;
  summary: string;
}

export interface ProcessStage {
  step: number;
  slug?: string;
  title: string;
  timeframe: string;
  description: string;
  deliverables: string[];
}

export interface IndustryItem {
  id: string;
  name: string;
  focus: string;
  solutions: string[];
}
