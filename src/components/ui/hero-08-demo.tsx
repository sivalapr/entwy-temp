import { Hero08, type Hero08Props } from '@/components/ui/hero-08'

const values = {
  title: 'Learn the craft behind every great design',
  description:
    'Hands-on courses taught by working designers, built to fit around your schedule.',
  socialProof: 'Join 40,000+ Makers Learning With Us',
  avatars: [
    {
      src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
      fallback: 'JD',
    },
    {
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
      fallback: 'SL',
    },
    {
      src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80',
      fallback: 'MV',
    },
  ],
  cards: [
    {
      title: 'Design Fundamentals',
      subtitle: 'Starting at $ 29 per month',
      image:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Designers collaborating at a shared desk',
      invert: true,
      cta: {
        ctaEnabled: true,
        text: 'Get Started',
        link: '/start-a-project',
        size: 'default',
      },
    },
    {
      title: 'Advanced Motion',
      subtitle: 'Starting at $ 29 per month',
      image:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Designer working on a laptop in a studio',
      invert: true,
      cta: {
        ctaEnabled: true,
        text: 'Get Started',
        link: '/start-a-project',
        size: 'default',
      },
    },
  ],
  animation: 'subtle',
} satisfies Hero08Props

export function Hero08Demo() {
  return <Hero08 {...values} />
}

export default Hero08Demo
