import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ArtCollageProps {
  primaryImage: string
  secondaryImage: string
  primaryAlt?: string
  secondaryAlt?: string
  className?: string
}

export function ArtCollage({
  primaryImage,
  secondaryImage,
  primaryAlt = '',
  secondaryAlt = '',
  className,
}: ArtCollageProps) {
  return (
    <div
      className={cn(
        'relative w-full max-w-lg lg:max-w-none mx-auto pb-10 pr-6 sm:pb-12 sm:pr-10',
        className
      )}
    >
      {/* Primary Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 shadow-lg bg-[#0a2540]">
        <img
          src={primaryImage}
          alt={primaryAlt}
          loading="eager"
          decoding="async"
          className="size-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"
        />
      </div>

      {/* Secondary Overlapping Image */}
      <div className="absolute bottom-0 right-0 w-[55%] sm:w-[50%] aspect-[4/3] overflow-hidden rounded-xl border-4 border-white dark:border-[#0a2540] shadow-2xl bg-[#0a2540]">
        <img
          src={secondaryImage}
          alt={secondaryAlt}
          loading="eager"
          decoding="async"
          className="size-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"
        />
      </div>
    </div>
  )
}

export default ArtCollage
