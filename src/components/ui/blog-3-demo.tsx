import * as React from 'react'
import { Blog3, type Blog3Post, type Blog3Category } from '@/components/ui/blog-3'

const demoCategories: Blog3Category[] = [
  { id: 'all', label: 'All Categories', href: '/blog-3-demo' },
  { id: 'ai', label: 'AI', href: '/blog-3-demo' },
  { id: 'design', label: 'Design', href: '/blog-3-demo' },
  { id: 'product', label: 'Product', href: '/blog-3-demo' },
  { id: 'technology', label: 'Technology', href: '/blog-3-demo' },
]

const demoFeatured: Blog3Post = {
  id: 'autonomous-agents-demo',
  categoryId: 'ai',
  category: 'Autonomous AI',
  title: 'Architecting Autonomous Multi-Agent Systems in Production',
  image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
  imageAlt: 'Neural network mesh representing autonomous AI workflows',
  excerpt: 'How to design deterministic guardrails and memory stores for LLMs executing external API mutations in enterprise environments.',
  author: {
    name: 'Praneeth Sivala',
    role: 'Principal Systems Architect',
    initials: 'PS',
  },
  date: 'Oct 2026',
  readTime: '6 min read',
  href: '/insights/article/autonomous-agents-in-production',
}

const demoPosts: Blog3Post[] = [
  {
    id: 'rag-beyond-embeddings-demo',
    categoryId: 'ai',
    category: 'Enterprise RAG',
    title: 'Beyond Embeddings: Graph-Augmented RAG for Enterprise Context',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Data connectivity graph and knowledge embeddings',
    excerpt: 'Why vector search alone fails complex corporate hierarchies, and how hybrid graph retrievers solve it.',
    author: {
      name: 'ENTWY Research Guild',
      role: 'AI Infrastructure Team',
      initials: 'RG',
    },
    date: 'Sep 2026',
    readTime: '8 min read',
    href: '/insights/article/rag-beyond-embeddings',
  },
  {
    id: 'designing-for-automation-demo',
    categoryId: 'design',
    category: 'Design Systems',
    title: 'Designing Human-in-the-Loop Workflow Interfaces',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Product workflow wireframes and interface components',
    excerpt: 'How Zapier-inspired micro-interactions and status badges give enterprise operators confidence in automated systems.',
    author: {
      name: 'Lead Design Architect',
      role: 'Product & Design Systems',
      initials: 'DA',
    },
    date: 'Oct 2026',
    readTime: '5 min read',
    href: '/insights/article/designing-for-automation',
  },
  {
    id: 'event-driven-scale-demo',
    categoryId: 'technology',
    category: 'Cloud Infrastructure',
    title: 'Zero-Latency Event Buses for Cloud Platforms',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Event telemetry stream and cloud infrastructure routing',
    excerpt: 'Architecting bi-directional webhook engines that guarantee at-least-once delivery with automatic idempotency keys.',
    author: {
      name: 'Core Infrastructure Guild',
      role: 'Cloud Engineering',
      initials: 'IG',
    },
    date: 'Sep 2026',
    readTime: '9 min read',
    href: '/insights/article/event-driven-scale',
  },
]

export function Blog3Demo() {
  return (
    <div className="w-full bg-[#fffefb] min-h-screen py-10 px-4 sm:px-6">
      <Blog3

        title="Perspectives on modern systems and autonomous AI"
        description="Technical essays, design-system notes, product strategy, and enterprise automation lessons from ENTWY’s engineering teams."
        featured={demoFeatured}
        posts={demoPosts}
        categories={demoCategories}
        activeCategory="all"
        headingAs="h1"
      />
    </div>
  )
}

export default Blog3Demo
