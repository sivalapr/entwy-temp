# Entwy product studio

The landing page now uses an original procedural Three.js scene, styled to match Entwy's cream surfaces, coffee typography, rosewood details, and orange accents. It does not reuse the supplied factory geometry or require downloaded assets.

## Integration

- `src/components/ProductEngineHero.tsx`: landing-page copy, five service selectors, service links, and accessible scene controls.
- `src/components/ui/entwy-product-engine.tsx`: reusable scene with controlled `active`, `paused`, `following`, `resetKey`, `onSelect`, and `onInspect` props. State is local to each instance; no global window API.
- `src/components/product-engine-hero.css`: scoped responsive styling using existing theme tokens.
- `src/pages/HomePage.tsx`: mounts the new hero and routes project actions to the existing enquiry page.

The existing shadcn UI path is `src/components/ui`, aliased as `@/components/ui`. Tailwind's global entry remains `src/index.css`. Three.js and its TypeScript definitions were already installed; no dependencies were added.

## Interaction and performance

The hero presents the complete five-station system on a layered chassis. Integrated nameplates identify the services without floating labels. Project packets travel around an inset route. Follow a project advances the highlighted service every four seconds; pause stops the walkthrough, and manual selection exits it. One fixed caption explains the active service. Previous/Next controls and the service buttons also select directly. Desktop users can drag to rotate. Reset and pause controls remain available; touch gestures retain vertical page scrolling.

The Three.js scene is loaded separately from the page. Rendering stops when the scene is offscreen or the document is hidden. Reduced-motion preferences disable automatic movement. WebGL failure exposes a static, interactive service diagram. Unmounting releases the renderer, geometry, textures, materials, event listeners, and observers.

## Verification

`npm run build` passes. Vite reports size warnings for the application and Three.js chunks; the scene is already lazy-loaded.

Playwright verified service selection, reset, pause, service navigation, scene unmount/remount, no horizontal overflow at 375/768/1440px, reduced-motion controls, touch scrolling configuration, and the no-WebGL fallback. The final browser run reported no page errors. Desktop, tablet, and mobile screenshots were reviewed.

The guided-showcase revision was checked at desktop and mobile widths: all five Next states rendered the correct description, with no browser errors or horizontal overflow.
