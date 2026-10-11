import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface CtaProps {
  ctaEnabled?: boolean
  text?: string
  link?: string
  size?: 'default' | 'sm' | 'lg' | 'icon'
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
}

export function Cta({
  cta,
  invert,
  className,
}: {
  cta: CtaProps
  invert?: boolean
  className?: string
}) {
  if (!cta?.ctaEnabled || !cta.text) return null

  const inner = (
    <>
      <span>{cta.text}</span>
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </>
  )

  const buttonClass = cn(
    'group inline-flex items-center gap-2 font-medium',
    invert && 'bg-white text-zinc-900 hover:bg-white/90',
    className
  )

  if (cta.link) {
    if (cta.link.startsWith('#')) {
      return (
        <Button
          asChild
          size={cta.size || 'default'}
          variant={cta.variant || (invert ? 'secondary' : 'default')}
          className={buttonClass}
        >
          <a href={cta.link}>{inner}</a>
        </Button>
      )
    }

    if (cta.link.startsWith('/')) {
      return (
        <Button
          asChild
          size={cta.size || 'default'}
          variant={cta.variant || (invert ? 'secondary' : 'default')}
          className={buttonClass}
        >
          <Link to={cta.link}>{inner}</Link>
        </Button>
      )
    }

    return (
      <Button
        asChild
        size={cta.size || 'default'}
        variant={cta.variant || (invert ? 'secondary' : 'default')}
        className={buttonClass}
      >
        <a href={cta.link} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      </Button>
    )
  }

  return (
    <Button
      size={cta.size || 'default'}
      variant={cta.variant || (invert ? 'secondary' : 'default')}
      className={buttonClass}
    >
      {inner}
    </Button>
  )
}
