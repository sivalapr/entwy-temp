import React from 'react'
import { Briefcase } from 'lucide-react'
import { Hero04 } from '@/components/ui/hero-04'

export const WorkEditorialHero: React.FC = () => {
  return (
    <div style={{ marginBottom: 48 }}>
      <Hero04
        headingAs="h1"

        title="A closer look at"
        titleLine2="the systems we build."
        description="Explore how ENTWY engineers resilient platforms, governed AI workflows, and production-ready integrations for enterprise teams."
        primaryCta={{
          ctaEnabled: true,
          text: 'View Case Studies',
          link: '#case-studies',
          size: 'default',
        }}
        secondaryCta={{
          ctaEnabled: true,
          text: 'Start a Similar Project',
          link: '/start-a-project',
          size: 'default',
          variant: 'outline',
        }}
        primaryImage="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
        secondaryImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
        primaryAlt="Engineering team collaborating on systems architecture"
        secondaryAlt="System performance analytics and deployment metrics"
        variant="standard"
        animation="subtle"
        sectionClassName="bg-transparent"
        innerClassName="max-w-none px-0 py-0"
      />
    </div>
  )
}

export default WorkEditorialHero
