import React from 'react'
import { articlesData } from '../data/sitemapData'
import { Blog3, type Blog3Category, type Blog3Post } from '@/components/ui/blog-3'

const authorMetadata: Record<string, { author: string; role: string }> = {
  'autonomous-agents-in-production': {
    author: 'Praneeth Sivala',
    role: 'Principal Systems Architect',
  },
  'rag-beyond-embeddings': {
    author: 'ENTWY Research Guild',
    role: 'AI Infrastructure Team',
  },
  'designing-for-automation': {
    author: 'Lead Design Architect',
    role: 'Product & Design Systems',
  },
  'mvp-velocity-playbook': {
    author: 'ENTWY Delivery Team',
    role: 'Strategic Advisory',
  },
  'event-driven-scale': {
    author: 'Core Infrastructure Guild',
    role: 'Cloud Engineering',
  },
}

const articleImages: Record<string, { image: string; alt: string }> = {
  'autonomous-agents-in-production': {
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    alt: 'Neural network mesh representing autonomous AI workflows',
  },
  'rag-beyond-embeddings': {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    alt: 'Data graph connecting enterprise knowledge nodes',
  },
  'designing-for-automation': {
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Workflow design layout and interactive control surfaces',
  },
  'mvp-velocity-playbook': {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Product deployment velocity charts and staging dashboard',
  },
  'event-driven-scale': {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    alt: 'High-throughput cloud data routing and microservices bus',
  },
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/)
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  }
  return name.slice(0, 2).toUpperCase()
}

const categories: Blog3Category[] = [
  { id: 'all', label: 'All Categories', href: '/insights' },
  { id: 'ai', label: 'AI', href: '/insights/ai' },
  { id: 'design', label: 'Design', href: '/insights/design' },
  { id: 'product', label: 'Product', href: '/insights/product' },
  { id: 'technology', label: 'Technology', href: '/insights/technology' },
]

interface InsightsBlogTemplateProps {
  activeCategory?: string
}

export const InsightsBlogTemplate: React.FC<InsightsBlogTemplateProps> = ({
  activeCategory = 'all',
}) => {
  const normalizedCategory = activeCategory.toLowerCase()

  // Filter articles based on category
  const filteredArticles = normalizedCategory === 'all'
    ? articlesData
    : articlesData.filter((a) => a.topic.toLowerCase() === normalizedCategory)

  // Map to Blog3Post view model
  const blogPosts: Blog3Post[] = filteredArticles.map((article) => {
    const meta = authorMetadata[article.id] || { author: 'ENTWY Contributor', role: 'Engineering Guild' }
    const img = articleImages[article.id]

    return {
      id: article.id,
      categoryId: article.topic,
      category: article.tag,
      title: article.title,
      excerpt: article.summary,
      image: img?.image,
      imageAlt: img?.alt,
      author: {
        name: meta.author,
        role: meta.role,
        initials: getInitials(meta.author),
      },
      date: article.date,
      readTime: article.readTime,
      href: `/insights/article/${article.id}`,
    }
  })

  // Promote first visible article to featured card; remaining go to grid
  const featured = blogPosts.length > 0 ? blogPosts[0] : null
  const gridPosts = blogPosts.length > 1 ? blogPosts.slice(1) : []

  return (
    <InsightsBlogTemplateInner
      activeCategory={normalizedCategory}
      featured={featured}
      posts={gridPosts}
    />
  )
}

function InsightsBlogTemplateInner({
  activeCategory,
  featured,
  posts,
}: {
  activeCategory: string
  featured: Blog3Post | null
  posts: Blog3Post[]
}) {
  return (
    <div style={{ marginBottom: 56 }}>
      <Blog3

        title="Perspectives on modern systems and autonomous AI"
        description="Technical essays, design-system notes, product strategy, and enterprise automation lessons from ENTWY’s engineering teams."
        featured={featured}
        posts={posts}
        categories={categories}
        activeCategory={activeCategory}
        headingAs="h1"
        innerClassName="max-w-none px-0 py-0"
      />
    </div>
  )
}

export default InsightsBlogTemplate
