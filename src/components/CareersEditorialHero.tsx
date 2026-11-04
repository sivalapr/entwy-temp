import React from 'react'
import { Briefcase } from 'lucide-react'
import { Hero04 } from '@/components/ui/hero-04'

export const CareersEditorialHero: React.FC = () => {
  return (
    <div style={{ marginBottom: 48 }}>
      <Hero04
        headingAs="h1"
        title="Learn, build & ship at ENTWY."
        titleLine2="2026 Internship Opportunities."
        description="36 department-wise internship opportunities across Engineering, AI, Design, Marketing, Product, and Finance based in Chennai, Tamil Nadu."
        primaryCta={{
          ctaEnabled: true,
          text: 'Explore 36 Internships',
          link: '/careers/open-positions',
          size: 'default',
        }}
        secondaryCta={{
          ctaEnabled: true,
          text: 'Chennai Studio',
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
