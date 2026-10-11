import React from 'react'
import { Zap } from 'lucide-react'
import { Hero08, type Hero08Card } from '@/components/ui/hero-08'

const pathwayCards: Hero08Card[] = [
  {
    title: 'Build a New Product',
    subtitle: 'For founders and enterprise innovation teams launching a production-ready platform',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Digital interface visualization representing new product architecture',
    invert: true,
    cta: {
      ctaEnabled: true,
      text: 'Explore Product Build',
      link: '/solutions/build-a-new-product',
      size: 'default',
    },
  },
  {
    title: 'Automate Business Workflows',
    subtitle: 'For operations, RevOps, and IT teams removing repetitive work with governed automation',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Automated circuitry and workflow integration telemetry',
    invert: true,
    cta: {
      ctaEnabled: true,
      text: 'Explore Automation',
      link: '/solutions/automate-business-workflows',
      size: 'default',
    },
  },
]

export const SolutionsPathwaysHero: React.FC = () => {
  return (
    <div style={{ marginBottom: 48 }}>
      <Hero08
        headingAs="h1"

        title="Two ways to move from intent to production"
        description="Launch a new digital product or automate the workflows already running your business. ENTWY assembles the right strategy, design, AI, and engineering team for either path."
        cards={pathwayCards}
        variant="standard"
        animation="subtle"
        sectionClassName="bg-transparent"
        innerClassName="max-w-none px-0 py-0"
      />
    </div>
  )
}

export default SolutionsPathwaysHero
