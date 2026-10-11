import * as React from 'react'
import { Sparkles } from 'lucide-react'
import { Hero04 } from '@/components/ui/hero-04'

export function Hero04Demo() {
  return (
    <div className="w-full bg-[#fffefb] min-h-screen py-12">
      <Hero04

        title="Modern Engineering"
        titleLine2="Built for Scale."
        description="Crafting resilient digital architectures, governed AI systems, and cloud infrastructure for the next generation of enterprises."
        primaryCta={{
          ctaEnabled: true,
          text: 'Explore Work',
          link: '/work',
          size: 'default',
        }}
        secondaryCta={{
          ctaEnabled: true,
          text: 'Get Started',
          link: '/start-a-project',
          size: 'default',
          variant: 'outline',
        }}
        primaryImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
        secondaryImage="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
        primaryAlt="Engineering team collaborating on architecture whiteboard"
        secondaryAlt="Close-up of software design system and code editor"
        variant="standard"
        animation="subtle"
      />
    </div>
  )
}

export default Hero04Demo
