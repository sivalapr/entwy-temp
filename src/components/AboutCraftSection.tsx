import React from 'react'
import { Users } from 'lucide-react'
import { Hero08, type Hero08Card } from '@/components/ui/hero-08'

const craftCards: Hero08Card[] = [
  {
    title: '0-to-1 Systems Architecture',
    subtitle: 'Full-stack foundations built for production',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Engineering workspace representing full-stack systems architecture',
    invert: true,
    cta: {
      ctaEnabled: true,
      text: 'Explore Solutions',
      link: '/solutions/build-a-new-product',
      size: 'default',
    },
  },
  {
    title: 'Autonomous Agent Meshes',
    subtitle: 'Governed agent workflows connected to your enterprise systems',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Abstract neural network mesh representing autonomous AI workflows',
    invert: true,
    cta: {
      ctaEnabled: true,
      text: 'Explore AI Solutions',
      link: '/services/ai',
      size: 'default',
    },
  },
]

export const AboutCraftSection: React.FC = () => {
  return (
    <div style={{ marginBottom: 48 }}>
      <Hero08
        headingAs="h1"

        title="Engineered for impact. Built with craft."
        description="ENTWY brings your data, systems, and people together to turn promising ideas into reliable, production-ready intelligence and automated workflows."
        cards={craftCards}
        variant="standard"
        animation="subtle"
        sectionClassName="bg-transparent"
        innerClassName="max-w-none px-0 py-0"
      />
    </div>
  )
}

export default AboutCraftSection
