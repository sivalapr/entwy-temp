# Antigravity handover: Blog3 for ENTWY Insights

## Objective

Adapt the supplied Blog3 component into the ENTWY Insights listing template while preserving the existing article-reading experience and route behavior.

Use Blog3 only for:

- `/insights`
- `/insights/ai`
- `/insights/design`
- `/insights/product`
- `/insights/technology`

Keep the existing article template for `/insights/article/:id`. Blog3 is an archive/listing component, not an article-body renderer.

## Current baseline

The project already has:

- TypeScript, Tailwind, aliases, `cn()`, shadcn-style structure, and React Router.
- `src/components/ui/avatar.tsx` and `src/components/ui/button.tsx`.
- `insightsCategoriesData` and `articlesData` in `src/data/sitemapData.ts`.
- Article bodies and author metadata currently inside `src/pages/InsightsPage.tsx`.
- Homepage previews in `src/components/InsightsEditorial.tsx`.
- Working `/insights`, category, and article routes in `src/App.tsx`.

The current project passes `npm run build`. Preserve this baseline. The existing Vite bundle-size warning is non-blocking and predates this integration.

## What to create

Create:

- `src/components/ui/blog-3.tsx`
- `src/components/ui/badge.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/blog-3-demo.tsx`
- `src/components/InsightsBlogTemplate.tsx`

Do not overwrite the existing Avatar or Button components. Do not install dependencies; everything required is already present.

Do not copy `IconPlaceholder`. Replace it with direct `lucide-react` imports:

- `Bookmark`
- `Clock`
- `ArrowRight`

## Convert Blog3 into a reusable component

The supplied component hardcodes Acme content and owns category state. Remove both. Blog3 must receive ENTWY data and route state through props.

Use an interface equivalent to:

```ts
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
  eyebrow: string
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
```

Blog3 must remain presentation-only:

- It does not call `useState` for category selection.
- Category tabs are React Router links supplied through props.
- Article cards use their supplied `href`.
- Page data and selection logic remain in `InsightsPage` or `InsightsBlogTemplate`.
- Default `headingAs` is `h1`.

## Adapt the supplied markup correctly

The sample uses a different Button API:

```tsx
<Button render={<a href="#" />} nativeButton={false}>
```

This is incompatible with the existing ENTWY Button. Use:

```tsx
<Button asChild>
  <Link to={post.href}>Read Article</Link>
</Button>
```

Article title links and category filters must also use React Router `Link`. Do not leave any `href="#"` placeholders.

Use semantic elements:

- One page-level H1.
- Featured title as H2.
- Grid card titles as H2 on the archive page.
- Each post wrapped in `<article>`.
- Category links grouped in a `<nav aria-label="Insight categories">`.
- Active category marked with `aria-current="page"`.

Do not use nested links or place a button inside an anchor.

## ENTWY listing content

Replace the sample Acme heading with:

| Field | Content |
| --- | --- |
| Eyebrow | ENTWY Insights |
| H1 | Perspectives on modern systems and autonomous AI |
| Description | Technical essays, design-system notes, product strategy, and enterprise automation lessons from ENTWY’s engineering teams. |

Categories:

| ID | Label | Route |
| --- | --- | --- |
| `all` | All Categories | `/insights` |
| `ai` | AI | `/insights/ai` |
| `design` | Design | `/insights/design` |
| `product` | Product | `/insights/product` |
| `technology` | Technology | `/insights/technology` |

Use the current `insightsCategoriesData` content. Do not copy any Acme titles, authors, metrics, images, or dates from the sample.

For each route, promote the first visible article to the featured card and render the remaining visible articles in the grid. Do not render the featured article again in the grid. If a category has only one article, the featured card is sufficient and the empty grid should not render.

## Data adapter and existing inconsistency

Create the Blog3 view model in `InsightsBlogTemplate` or a small adjacent helper. Derive it from the existing ENTWY article/category data and author metadata. Avoid embedding a second article catalog inside Blog3.

There is an existing inconsistency that must be resolved as part of this integration: `rag-beyond-embeddings` exists in `insightsCategoriesData` and `fullArticleBodies`, but it is missing from `articlesData`. Its current article route cannot resolve the article metadata correctly.

Make the smallest safe correction: add the missing article to `articlesData` with the existing title, summary, date, read time, topic `ai`, and an appropriate existing-content tag such as `Enterprise RAG`. Do not invent new performance claims.

Keep the current article bodies intact. A larger data-model migration is outside this task.

## Author and image policy

Do not use `i.pravatar.cc`, random portraits, or sample author identities.

Use the authors already named in `fullArticleBodies`. Generate initials from their names and render `AvatarFallback` when there is no approved headshot. Do not display an avatar image unless an approved local asset exists.

Blog post imagery may be supplied through a local mapping keyed by article ID. Prefer approved ENTWY diagrams, product visuals, or abstract editorial artwork. Until approved assets exist:

- Use restrained local CSS gradients or documented temporary Unsplash images.
- Do not imply that stock subjects are ENTWY employees, clients, or offices.
- Use empty alt text when imagery is decorative.
- Use accurate alt text when imagery contributes meaning.

The component must render a designed fallback surface when `image` is absent. Images should not be required for the page to work.

## ENTWY visual adaptation

- Use existing voltage orange, deep coffee ink, warm cream, body text, borders, radii, and font tokens.
- Replace unsupported sample classes such as `font-heading` or `rounded-4xl` with classes backed by the current Tailwind configuration.
- Do not add global tokens solely for this component.
- Use orange for category/action emphasis, not large background fields.
- Keep the featured image treatment restrained. Grayscale-to-color hover may remain only if the non-hover state still communicates the content clearly.
- Cards must grow with title and excerpt length rather than clip text.
- Avoid `min-h-svh`; the site shell and footer already control page structure.
- Use `innerClassName="max-w-none px-0"` when the template is rendered inside the existing page `.container`.

## Integration into InsightsPage

Retain the current top-level route parsing and reading-mode branch.

The render structure should be:

```tsx
{activeArticle && activeArticleBody ? (
  <ExistingArticleTemplate />
) : (
  <InsightsBlogTemplate activeCategory={selectedCategory} />
)}
```

The Blog3 template replaces only the current Insights listing header, category pills, and article grid. It does not render on an article route.

Preserve:

- Article breadcrumbs.
- Article title, metadata, body, takeaways, and CTAs.
- `/insights/:category` URLs and browser history.
- `/insights/article/:id` URLs.
- Existing category normalization and invalid-category behavior.
- Navbar, footer, and `ScrollToTop` behavior.

Use the URL as the source of truth for category selection. Avoid a second independent filter state that can drift from the route. If local state remains for compatibility, it must synchronize on every category change and must not override browser back/forward navigation.

## Homepage behavior

Keep `src/components/InsightsEditorial.tsx` structurally unchanged during this rollout. It may continue to show the first three articles using its compact homepage cards.

Both the homepage preview and Blog3 must read from the same `articlesData`; do not maintain duplicate article copy in the UI components.

## Empty and invalid states

- When a valid category has no posts, render a clear “No insights in this category yet” message and a link back to `/insights`.
- An unknown `/insights/:category` value should resolve to the All view or show a controlled not-found state. It must not produce an empty broken layout.
- If an article ID has body content but incomplete card metadata, keep the article route usable and report the data issue during handoff.

## Scope restrictions

Do not:

- Replace the article-reading template.
- Add a CMS, MDX, pagination, search, newsletter form, or API call.
- Change global navigation or footer behavior.
- Change Hero04 or Hero08.
- Add package dependencies.
- Submit or publish content externally.
- Invent customer claims, author biographies, or article results.

## Responsive and accessibility requirements

- One H1 on the archive page and one H1 on each article page.
- Featured layout stacks cleanly on mobile and becomes two columns at the existing medium breakpoint.
- Article grid uses one column on mobile, two on tablet, and three when space permits.
- No fixed `minmax(360px, 1fr)` that overflows narrow containers.
- All cards and filters are keyboard accessible with visible focus.
- Active category is conveyed without relying only on color.
- Images have explicit aspect ratios to reduce layout shift.
- Text contrast remains readable on cream and muted surfaces.
- No horizontal overflow at 320px or wider.

## Verification

Run `npm run build`, then inspect approximately 375px, 768px, and 1440px widths.

Verify:

- `/insights`: correct H1, featured article, remaining article grid, and All category state.
- Each category route: correct active state, featured item, filtered grid, and browser back/forward behavior.
- Every featured and grid link opens `/insights/article/:id` for the selected article.
- `/insights/article/rag-beyond-embeddings` resolves successfully after the metadata correction.
- Existing article breadcrumbs, takeaways, Back to All Articles, and project CTA still work.
- Homepage Insights links still open the correct article routes.
- Avatar fallbacks show correct initials without broken image requests.
- Keyboard focus, image fallbacks, and empty states work.
- No new console errors appear.
- Navbar, footer, homepage, About, Solutions, Work, Careers, and `/start-a-project` remain unaffected.

## Completion criteria

The handoff is complete when:

1. Blog3 is a typed, reusable, data-driven component.
2. The Insights archive and category routes use it.
3. Existing article pages remain intact.
4. All sample Acme content and placeholder links are removed.
5. The missing RAG article metadata is corrected.
6. Responsive and keyboard checks pass.
7. `npm run build` succeeds.
8. The final report lists changed files, tested routes, screenshots, and any temporary images awaiting approved assets.
