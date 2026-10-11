'use client'

import * as React from 'react'
import { motion, useReducedMotion, type Variants } from 'motion/react'
import Balancer from 'react-wrap-balancer'

import { cn } from '@/lib/utils'
import { Cta, type CtaProps } from '@/components/ui/hero-08-utils/cta'
import { ArtCollage } from '@/components/ui/hero-04-utils/art-collage'

export interface Hero04Props {
  title: string
  titleLine2?: string
  description?: string
  primaryCta?: CtaProps
  secondaryCta?: CtaProps
  cta?: CtaProps
  primaryImage: string
  secondaryImage: string
  primaryAlt?: string
  secondaryAlt?: string
  animation?: 'none' | 'subtle'
  variant?: 'standard' | 'compact'
  headingAs?: 'h1' | 'h2'
  sectionClassName?: string
  innerClassName?: string
}

const variantStyles = {
  standard: {
    section: 'py-16 sm:py-24',
    title: 'text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12]',
    description: 'text-base sm:text-lg leading-relaxed',
    header: 'gap-10 lg:gap-16',
    ctaGroup: 'gap-4',
  },
  compact: {
    section: 'py-12 sm:py-16',
    title: 'text-2xl sm:text-3xl md:text-4xl leading-[1.18]',
    description: 'text-sm sm:text-base leading-relaxed',
    header: 'gap-8 lg:gap-12',
    ctaGroup: 'gap-3',
  },
} as const

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 12, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const mediaItem: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

function Reveal({
  active,
  variants,
  className,
  children,
}: Readonly<{
  active: boolean
  variants?: Variants
  className?: string
  children: React.ReactNode
}>) {
  if (!active) return <div className={className}>{children}</div>

  return (
    <motion.div variants={variants ?? item} className={className}>
      {children}
    </motion.div>
  )
}

export function Hero04({
  title,
  titleLine2,
  description,
  primaryCta,
  secondaryCta,
  cta,
  primaryImage,
  secondaryImage,
  primaryAlt,
  secondaryAlt,
  animation = 'none',
  variant = 'standard',
  headingAs = 'h1',
  sectionClassName,
  innerClassName,
}: Readonly<Hero04Props>) {
  const reduce = useReducedMotion()
  const animate = animation === 'subtle' && !reduce
  const vs = variantStyles[variant]
  const HeadingTag = headingAs

  const effectivePrimaryCta = primaryCta || cta

  return (
    <section className={cn('bg-background relative isolate w-full overflow-hidden', sectionClassName)}>
      <motion.div
        className={cn(
          'relative z-10 mx-auto flex max-w-6xl flex-col px-6',
          vs.section,
          innerClassName
        )}
        variants={animate ? container : undefined}
        initial={animate ? 'hidden' : false}
        whileInView={animate ? 'visible' : undefined}
        viewport={{ once: true, margin: '-80px' }}
      >
        <div className={cn('grid grid-cols-1 items-center lg:grid-cols-2', vs.header)}>
          {/* Left / Editorial Content */}
          <div className="flex flex-col items-start">


            <Reveal active={animate}>
              <HeadingTag
                className={cn(
                  'text-foreground font-display font-bold tracking-tight text-balance mb-4',
                  vs.title
                )}
              >
                <Balancer>
                  {title}
                  {titleLine2 && (
                    <>
                      <br className="hidden sm:inline" /> {titleLine2}
                    </>
                  )}
                </Balancer>
              </HeadingTag>
            </Reveal>

            {description && (
              <Reveal active={animate}>
                <p className={cn('text-[#605d52] max-w-xl mb-7', vs.description)}>
                  <Balancer>{description}</Balancer>
                </p>
              </Reveal>
            )}

            {(effectivePrimaryCta?.ctaEnabled || secondaryCta?.ctaEnabled) && (
              <Reveal active={animate}>
                <div className={cn('flex flex-wrap items-center', vs.ctaGroup)}>
                  {effectivePrimaryCta?.ctaEnabled && (
                    <Cta cta={effectivePrimaryCta} />
                  )}
                  {secondaryCta?.ctaEnabled && (
                    <Cta cta={secondaryCta} />
                  )}
                </div>
              </Reveal>
            )}
          </div>

          {/* Right / Art Collage */}
          <Reveal active={animate} variants={mediaItem} className="w-full mt-8 lg:mt-0">
            <ArtCollage
              primaryImage={primaryImage}
              secondaryImage={secondaryImage}
              primaryAlt={primaryAlt}
              secondaryAlt={secondaryAlt}
            />
          </Reveal>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero04
