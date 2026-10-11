import * as React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Sparkles } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface Blog3Author {
  name: string
  role?: string
  initials: string
  image?: string
}

export interface Blog3Post {
  id: string
  categoryId: string
  category: string
  title: string
  image?: string
  imageAlt?: string
  excerpt: string
  author: Blog3Author
  date: string
  readTime: string
  href: string
}

export interface Blog3Category {
  id: string
  label: string
  href: string
}

export interface Blog3Props {
  title: string
  description: string
  featured: Blog3Post | null
  posts: Blog3Post[]
  categories: Blog3Category[]
  activeCategory: string
  headingAs?: 'h1' | 'h2'
  className?: string
  innerClassName?: string
}

export function Blog3({
  title,
  description,
  featured,
  posts,
  categories,
  activeCategory,
  headingAs = 'h1',
  className,
  innerClassName,
}: Blog3Props) {
  const HeadingTag = headingAs

  return (
    <section className={cn('w-full py-6 sm:py-10', className)}>
      <div className={cn('max-w-6xl mx-auto', innerClassName)}>
        {/* Header Block */}
        <div className="max-w-3xl mb-8 sm:mb-12">

          <HeadingTag className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground leading-[1.15]">
            {title}
          </HeadingTag>
          {description && (
            <p className="mt-4 text-base sm:text-lg text-[#605d52] leading-relaxed">
              {description}
            </p>
          )}

          {/* Category Navigation Pills */}
          {categories?.length > 0 && (
            <nav aria-label="Insight categories" className="flex items-center gap-2 flex-wrap mt-8">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id
                return (
                  <Link
                    key={cat.id}
                    to={cat.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150',
                      isActive
                        ? 'bg-primary text-white shadow-sm'
                        : 'bg-[#f6f9fc] hover:bg-[#e3e8ee] text-[#0d253d] border border-[#e3e8ee]'
                    )}
                  >
                    {cat.label}
                  </Link>
                )
              })}
            </nav>
          )}
        </div>

        {/* Featured Post (Promoted first post) */}
        {featured && (
          <article className="group relative mb-12 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm hover:shadow-md transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
              {/* Media Container */}
              <div className="relative md:col-span-7 aspect-[16/10] sm:aspect-[16/9] md:aspect-auto min-h-[260px] md:min-h-[380px] w-full overflow-hidden bg-[#0a2540]">
                {featured.image ? (
                  <img
                    src={featured.image}
                    alt={featured.imageAlt || ''}
                    loading="eager"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="size-full flex items-center justify-center bg-gradient-to-br from-[#0a2540] to-[#123962]">
                    <Sparkles className="size-12 text-primary/30" />
                  </div>
                )}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none md:hidden"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-white border-none shadow-sm">
                  {featured.category}
                </Badge>
              </div>

              {/* Editorial Content */}
              <div className="flex flex-col justify-between p-6 sm:p-8 md:p-10 md:col-span-5 bg-white">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#64748d] font-mono mb-3">
                    <Clock size={13} />
                    <span>{featured.readTime}</span>
                    <span>•</span>
                    <span>{featured.date}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors leading-tight mb-3">
                    <Link to={featured.href} className="hover:underline">
                      {featured.title}
                    </Link>
                  </h2>
                  <p className="text-sm sm:text-base text-[#605d52] leading-relaxed">
                    {featured.excerpt}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-black/5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="size-9 ring-1 ring-black/10">
                      {featured.author.image && (
                        <AvatarImage src={featured.author.image} alt={featured.author.name} />
                      )}
                      <AvatarFallback className="text-xs font-semibold bg-primary/10 text-primary">
                        {featured.author.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-foreground leading-tight">
                        {featured.author.name}
                      </p>
                      {featured.author.role && (
                        <p className="text-[11px] sm:text-xs text-[#605d52]">
                          {featured.author.role}
                        </p>
                      )}
                    </div>
                  </div>

                  <Button asChild size="sm" className="group/btn inline-flex items-center gap-1.5 font-medium">
                    <Link to={featured.href}>
                      <span>Read Article</span>
                      <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Posts Grid */}
        {posts?.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col justify-between overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div>
                  {/* Media */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0a2540]">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.imageAlt || ''}
                        loading="lazy"
                        decoding="async"
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="size-full flex items-center justify-center bg-gradient-to-br from-[#0a2540] to-[#123962]">
                        <Sparkles className="size-8 text-primary/30" />
                      </div>
                    )}
                    <Badge className="absolute top-3 left-3 bg-primary text-white border-none shadow-sm text-[11px]">
                      {post.category}
                    </Badge>
                  </div>

                  {/* Body */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-2 text-xs text-[#64748d] font-mono mb-2.5">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors leading-snug mb-2.5">
                      <Link to={post.href} className="hover:underline">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-sm text-[#605d52] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-4 border-t border-black/5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Avatar className="size-8 ring-1 ring-black/10 shrink-0">
                      {post.author.image && (
                        <AvatarImage src={post.author.image} alt={post.author.name} />
                      )}
                      <AvatarFallback className="text-[11px] font-semibold bg-primary/10 text-primary">
                        {post.author.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-foreground truncate leading-tight">
                        {post.author.name}
                      </p>
                      {post.author.role && (
                        <p className="text-[11px] text-[#605d52] truncate">
                          {post.author.role}
                        </p>
                      )}
                    </div>
                  </div>

                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-xs font-medium text-primary hover:text-primary hover:bg-primary/10 gap-1 px-2 shrink-0 group/link"
                  >
                    <Link to={post.href}>
                      <span>Read</span>
                      <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-0.5" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!featured && posts?.length === 0 && (
          <div className="text-center py-16 px-6 bg-white rounded-2xl border border-dashed border-black/15 my-6">
            <h3 className="text-lg font-semibold text-foreground">No insights in this category yet</h3>
            <p className="text-sm text-[#605d52] mt-1 max-w-md mx-auto">
              Check back soon for new research essays or explore other categories across enterprise systems.
            </p>
            <Button asChild variant="outline" className="mt-6">
              <Link to="/insights">View All Categories</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Blog3
