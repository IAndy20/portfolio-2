# Architecture

## Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 14.1.0 |
| Language | TypeScript (strict mode) | 5.5.4 |
| UI | React | 18.3.1 |
| Styling | Tailwind CSS | 3.3.0 |
| Animations | Framer Motion | 11.0.3 |
| Carousel | Swiper | 11.0.6 |
| Counters | react-countup | 6.5.0 |
| Icons | lucide-react | 0.323.0 |

---

## Folder Structure

```
portfolio-2/
├── app/
│   ├── layout.tsx                   # Root layout — Header, fonts, global CSS
│   ├── page.tsx                     # Home page
│   ├── globals.css                  # Tailwind directives + custom CSS
│   └── (routes)/                   # Route group (shares root layout)
│       ├── about-me/page.tsx
│       ├── projects/page.tsx        # Projects index (hexagon grid)
│       ├── projects-1/page.tsx      # Engineering project 1
│       ├── projects-2/page.tsx      # Engineering project 2
│       ├── projects-3/page.tsx      # Engineering project 3
│       ├── projects-4/page.tsx      # Engineering project 4
│       ├── projects-5/page.tsx      # Art project 1 (alias: /projects-art-1)
│       ├── projects-6/page.tsx      # Art project 2 (alias: /projects-art-2)
│       └── projects-7/page.tsx      # Art project 3 (alias: /projects-art-3)
├── components/                      # All React components (14 files)
├── utils/
│   └── motion-transitions.tsx       # Framer Motion animation presets
├── data.tsx                         # All content (text, image paths, links)
├── public/                          # Static assets served at /
├── next.config.mjs                  # URL rewrites for art projects
├── tailwind.config.ts               # Design tokens + custom utilities
└── tsconfig.json                    # TypeScript config (strict, path alias @/)
```

---

## Routing

Next.js App Router is used throughout. All page routes live inside `app/(routes)/` — the parenthesized folder name is a route group, meaning it does not add a URL segment but allows all pages inside to share the root layout (Header + fonts).

### URL map

| URL | Folder | Notes |
|-----|--------|-------|
| `/` | `app/page.tsx` | Home |
| `/about-me` | `app/(routes)/about-me/` | |
| `/projects` | `app/(routes)/projects/` | Hexagon grid |
| `/projects-1` … `/projects-4` | `app/(routes)/projects-{1..4}/` | Engineering detail pages |
| `/projects-art-1` | rewritten → `/projects-5` | Art project 1 |
| `/projects-art-2` | rewritten → `/projects-6` | Art project 2 |
| `/projects-art-3` | rewritten → `/projects-7` | Art project 3 |

### Art project URL rewriting

Art projects have two URLs: a public-facing alias (`/projects-art-{n}`) and an internal folder path (`/projects-{5,6,7}`). The mapping lives in `next.config.mjs`:

```js
// next.config.mjs
async rewrites() {
  return [
    { source: '/projects-art-1', destination: '/projects-5' },
    { source: '/projects-art-2', destination: '/projects-6' },
    { source: '/projects-art-3', destination: '/projects-7' },
  ];
}
```

When adding a new art project, a new rewrite entry must be added here. See `ADDING_PROJECTS.md`.

---

## Data Layer

There is no database, no API, and no CMS. All content lives in a single file:

```
data.tsx
```

This file exports the following arrays:

| Export | Used by | Purpose |
|--------|---------|---------|
| `dataAboutPage` | `about-me/page.tsx` | Work experience timeline |
| `dataAboutPage_Ed` | `about-me/page.tsx` | Education timeline |
| `dataAboutPage_More_OtherBackground` | `time-line more.tsx` | Other background |
| `dataAboutPage_More_Conferences` | `time-line more.tsx` | Conferences |
| `dataAboutPage_More_Volunteering` | `time-line more.tsx` | Volunteering |
| `dataCounter` | `counter-services.tsx` | Animated stats (years, orgs, projects) |
| `serviceData` | `slider-services.tsx` | Homepage featured project carousel |
| `dataPortfolio_Engineer` | `projects-{1..4}/page.tsx`, `sidebar-projects.tsx` | Engineering project detail data |
| `dataPortfolio_Artist` | `projects-{5..7}/page.tsx`, `sidebar-projects.tsx` | Art project detail data |
| `hexagonData` | `hexagon.tsx` | Hexagon grid on the projects index page |
| `socialNetworks` | `banner.tsx` | Footer social links |

All content changes (text, images, links) are made exclusively in `data.tsx`.

---

## Component Map

```
RootLayout  (app/layout.tsx)
├── Header
│   └── MotionTransition          wraps header in a fade-in animation
└── {page children}
    ├── TransitionPage            slide-in overlay on every page load
    └── ContainerPage             max-width centered wrapper
        │
        ├── [Home page]
        │   ├── Introduction      hero section with hexagonal grid
        │   └── Banner            footer with social links
        │
        ├── [Projects index]
        │   └── HexagonalGrid     renders hexagonData as a positioned grid
        │
        ├── [Engineering project pages]
        │   ├── SidebarProjects   auto-generated from dataPortfolio_Engineer/Artist
        │   └── [inline content]  renders one dataPortfolio_Engineer[index] entry
        │
        ├── [Art project pages]
        │   ├── SidebarProjects
        │   └── [inline content]  renders one dataPortfolio_Artist[index] entry
        │
        └── [About page]
            ├── CounterServices   animated stats + circular profile photo
            ├── TimeLine          work experience (receives dataAboutPage)
            ├── TimeLine          education (receives dataAboutPage_Ed)
            └── TimeLine_More     other background, conferences, volunteering
```

### Component responsibilities

| Component | File | Responsibility |
|-----------|------|----------------|
| `Header` | `header.tsx` | Logo + navigation links |
| `ContainerPage` | `container-page.tsx` | `max-w-6xl mx-auto` layout wrapper |
| `TransitionPage` | `transition-page.tsx` | Full-width slide overlay on page entry |
| `MotionTransition` | `transition-component.tsx` | Reusable fade/slide wrapper for any element |
| `Introduction` | `introduction.tsx` | Hero section with profile photo swap on hover |
| `HexagonalGrid` | `hexagon.tsx` | Positioned hexagon grid from `hexagonData` |
| `SidebarProjects` | `sidebar-projects.tsx` | Project navigation sidebar (auto-built from data) |
| `SliderServices` | `slider-services.tsx` | Swiper carousel of featured projects |
| `CounterServices` | `counter-services.tsx` | Animated number counters + profile photo |
| `TimeLine` | `time-line.tsx` | Timeline list — accepts a `data` prop |
| `TimeLine_More` | `time-line more.tsx` | Multi-section timeline (Other Background, Conferences, Volunteering) |
| `Banner` | `banner.tsx` | Page footer with social icons |
| `PanelServices` | `panel-services.tsx` | Service card used inside slider |

---

## Animation System

Animations are handled by **Framer Motion**. Presets are defined in `utils/motion-transitions.tsx` and consumed by wrapper components.

### Presets

| Preset | Used by | Effect |
|--------|---------|--------|
| `transitionVariantsPage` | `TransitionPage` | Full-width colored overlay slides in then collapses on page load |
| `motionTransitionsAbout` | `counter-services.tsx` | Element rises and fades in from below |
| `fadeIn(position)` | `MotionTransition` | Fade + directional slide (`'right'` or `'bottom'`) |

### Usage pattern

Wrap any element in `<MotionTransition position="right">` or `<MotionTransition position="bottom">` to apply a fade-in animation. For page transitions, `<TransitionPage />` is placed at the top of every page component.

---

## Styling

### Approach

Tailwind CSS utility classes are the primary styling method. Custom CSS is kept minimal and lives in `app/globals.css`.

### Design tokens (tailwind.config.ts)

| Token | Value | Usage |
|-------|-------|-------|
| `primary` | `#000000` | Main text color |
| `secondary` | `#A9A9A9` | Muted text, inactive nav links |
| `darkBg` | `#131424` | Dark background (available but not currently used) |
| `gradient-cover` | purple-to-violet linear gradient | Decorative header accents |
| `font-miTipografia` | "Albra" (serif) | Display headings |

### Custom CSS (globals.css)

| Class | Purpose |
|-------|---------|
| `.hexagon` | `clip-path` polygon for hexagonal shapes |
| `.crop-circle` | Circular image container |
| `.crop-img` | Grayscale image filter |

### Custom Tailwind utilities

13 `.object-left-{n}` and `.object-right-{n}` classes are registered as a Tailwind plugin for fine-grained `object-position` control on images.

### Fonts

Two fonts are loaded:
- **Urbanist** — loaded via `next/font/google`, applied globally via `body` className in `layout.tsx`
- **Albra** — loaded via `@font-face` in `globals.css` (local files in `/public`), available as `font-miTipografia`

---

## Rendering Model

All pages are client components (`"use client"`). There are no server components in use beyond the root layout, no API routes, no server actions, and no dynamic data fetching. The site is fully static in behavior — it can be exported as a static site with `next export` if needed.

| Aspect | Detail |
|--------|--------|
| Data fetching | None — all content imported directly from `data.tsx` |
| State management | None — no global state |
| Auth | None |
| API routes | None |
| Image optimization | Next.js `<Image>` component used in most places; some pages use `<img>` tags |
| Environment variables | None required |
