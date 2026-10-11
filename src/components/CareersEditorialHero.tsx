import React from 'react'
import { Briefcase } from 'lucide-react'
import { Hero04 } from '@/components/ui/hero-04'

export const CareersEditorialHero: React.FC = () => {
  return (
    <div style={{ marginBottom: 48 }}>
      <Hero04
        headingAs="h1"

        title="Build thoughtful software."
        titleLine2="Work with people who care."
        description="Work with high autonomy, direct customer impact, and the space to ship modern AI software with care."
        primaryCta={{
          ctaEnabled: true,
          text: 'Explore Open Positions',
          link: '/careers/open-positions',
          size: 'default',
        }}
        secondaryCta={{
          ctaEnabled: true,
          text: 'View Internships',
          link: '/careers/internships',
          size: 'default',
          variant: 'outline',
        }}
        primaryImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
        secondaryImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
        primaryAlt="Collaborative engineering workspace"
        secondaryAlt="Design and engineering team discussion"
        variant="standard"
        animation="subtle"
        sectionClassName="bg-transparent"
        innerClassName="max-w-none px-0 py-0"
      />
    </div>
  )
}

export default CareersEditorialHero
