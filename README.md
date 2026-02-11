# Multi-Gyn PH

A premium landing page and product hub for **Multi-Gyn Philippines**, a feminine care brand specializing in clinically-proven intimate health products. Built with React 19, Tailwind CSS 4, and Framer Motion, following a "Fluid Wellness — Soft Modernism" design philosophy.

## Key Features

- **Landing page** with hero, brand story, product showcase, benefits, testimonials, FAQ, and Where to Buy sections
- **4 detailed product pages** (ActiGel, FemiWash, LiquiGel, FloraPlus) with full ingredients, usage instructions, and reviews
- **Product comparison table** with responsive desktop grid and mobile tab views
- **Interactive product quiz** — 5-question recommender that suggests the best product for each user's concern
- **Blog / Health Hub** — 8 educational articles on intimate health with category filtering and individual article pages
- **Newsletter signup** — Email capture form on homepage and within blog articles
- **Fully responsive** — Mobile-first design with smooth scroll animations and organic wave section dividers

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Architecture](#architecture)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Design System](#design-system)
- [Pages & Routes](#pages--routes)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 19 |
| **Language** | TypeScript 5.6 |
| **Styling** | Tailwind CSS 4 |
| **UI Components** | shadcn/ui (Radix UI primitives) |
| **Animations** | Framer Motion 12 |
| **Routing** | Wouter 3 |
| **Build Tool** | Vite 7 |
| **Package Manager** | pnpm 10 |
| **Fonts** | Figtree (headings) + Noto Sans (body) via Google Fonts |

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 20 or higher — [Download](https://nodejs.org/)
- **pnpm** 10 or higher — Install via `npm install -g pnpm` or [standalone installer](https://pnpm.io/installation)
- **Git** — [Download](https://git-scm.com/)

No database, backend server, or API keys are required. This is a fully static frontend application.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/multigyn-ph.git
cd multigyn-ph
```

### 2. Install Dependencies

```bash
pnpm install
```

This installs all production and development dependencies defined in `package.json`. The `pnpm-lock.yaml` ensures deterministic installs.

### 3. Start the Development Server

```bash
pnpm dev
```

The Vite development server starts with hot module replacement (HMR). Open [http://localhost:3000](http://localhost:3000) in your browser.

The dev server features:
- **Instant HMR** — Changes reflect immediately without full page reload
- **TypeScript checking** — Errors surface in the terminal and browser overlay
- **Tailwind JIT** — Utility classes are generated on-demand

### 4. Build for Production

```bash
pnpm run build:static
```

This compiles and bundles the application into `dist/public/`. The output is a set of static HTML, CSS, and JS files ready for deployment to any static hosting provider.

### 5. Preview the Production Build

```bash
pnpm preview
```

Serves the production build locally at [http://localhost:4173](http://localhost:4173) for final verification before deployment.

---

## Project Structure

```
multigyn-ph/
├── client/                          # Frontend application
│   ├── index.html                   # HTML entry point (Google Fonts, meta tags)
│   ├── public/                      # Static assets (copied verbatim to build output)
│   └── src/
│       ├── App.tsx                  # Root component with routing and lazy loading
│       ├── main.tsx                 # React entry point
│       ├── index.css                # Global styles, Tailwind config, design tokens
│       ├── pages/                   # Page-level components
│       │   ├── Home.tsx             # Landing page (assembles all homepage sections)
│       │   ├── ActiGelPage.tsx      # ActiGel product detail page
│       │   ├── FemiWashPage.tsx     # FemiWash product detail page
│       │   ├── LiquiGelPage.tsx     # LiquiGel product detail page
│       │   ├── FloraPlusPage.tsx    # FloraPlus product detail page
│       │   ├── BlogPage.tsx         # Blog listing with category filters
│       │   ├── BlogArticlePage.tsx  # Individual blog article with sidebar
│       │   ├── QuizPage.tsx         # Interactive product recommender quiz
│       │   └── NotFound.tsx         # 404 page
│       ├── components/              # Reusable UI components
│       │   ├── Navbar.tsx           # Sticky floating navigation bar
│       │   ├── HeroSection.tsx      # Homepage hero with CTA
│       │   ├── AboutSection.tsx     # Brand story section
│       │   ├── ProductsSection.tsx  # Product cards grid with real images
│       │   ├── ComparisonSection.tsx # Side-by-side product comparison table
│       │   ├── BenefitsSection.tsx  # Benefits/features grid
│       │   ├── WhyMultiGynSection.tsx # 3-step care routine
│       │   ├── TestimonialsSection.tsx # Testimonial carousel
│       │   ├── BlogPreviewSection.tsx  # Homepage blog preview (3 latest)
│       │   ├── NewsletterSection.tsx   # Email signup form
│       │   ├── WhereToBuySection.tsx   # Pharmacy & online retailer tabs
│       │   ├── FAQSection.tsx       # Accordion FAQ
│       │   ├── CTASection.tsx       # Bottom call-to-action
│       │   ├── Footer.tsx           # Site footer with links
│       │   └── ui/                  # shadcn/ui primitives (accordion, button, card, etc.)
│       ├── contexts/                # React contexts (ThemeContext)
│       ├── hooks/                   # Custom React hooks
│       └── lib/                     # Utility helpers
├── server/                          # Express server (for local preview, not deployed)
│   └── index.ts                     # SPA fallback server
├── shared/                          # Shared constants
│   └── const.ts
├── DESIGN.md                        # Comprehensive design system documentation
├── vercel.json                      # Vercel deployment configuration
├── vite.config.ts                   # Vite build configuration
├── tsconfig.json                    # TypeScript configuration
├── package.json                     # Dependencies and scripts
└── pnpm-lock.yaml                   # Lockfile for deterministic installs
```

---

## Architecture

### Request Lifecycle (Client-Side)

This is a **single-page application (SPA)** with client-side routing:

```
Browser URL Change
  → Wouter Router matches path
    → React.lazy() loads the page chunk (if not cached)
      → Page component renders with Framer Motion entrance animations
        → User interacts → State updates → Re-render
```

### Code Splitting Strategy

The application uses `React.lazy()` for route-based code splitting. Only the homepage is eagerly loaded; all other pages are loaded on demand:

| Chunk | Contents | Gzipped Size |
|-------|----------|-------------|
| `index` | Home page, shared components, core framework | ~108 KB |
| `vendor` | React, React DOM | ~4 KB |
| `framer-motion` | Animation library | ~39 KB |
| `ui` | Radix UI primitives (accordion, tabs, tooltip, dialog) | ~15 KB |
| Product pages | Individual product detail pages | ~10 KB each |
| Blog pages | Blog listing + article pages | ~7–10 KB each |
| `QuizPage` | Product recommender quiz | ~5 KB |

**Total initial load** (homepage): ~166 KB gzipped
**Total with all chunks**: ~210 KB gzipped

### Data Flow

All product data, blog articles, and quiz logic are embedded as static constants within their respective components. There is no backend API or database. This makes the site fully cacheable and deployable as static files.

### Key Design Decisions

1. **Static data over API calls** — Product information, blog content, and quiz logic are hardcoded for maximum performance and zero backend dependency.
2. **Route-based code splitting** — Each product page and the blog/quiz are lazy-loaded to keep the initial bundle small.
3. **Framer Motion for all animations** — Consistent animation API across scroll-triggered entrances, hover effects, and page transitions.
4. **Tailwind CSS custom tokens** — Brand colors (violet-deep, teal, lavender, cream) are defined as CSS custom properties in `index.css` and referenced via Tailwind's `@theme` directive.

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start Vite development server with HMR on port 3000 |
| `pnpm run build:static` | Build static frontend for deployment (output: `dist/public/`) |
| `pnpm build` | Full build including server bundle (for Express hosting) |
| `pnpm start` | Start Express production server (serves `dist/public/`) |
| `pnpm preview` | Preview production build locally via Vite |
| `pnpm check` | Run TypeScript type checking without emitting files |
| `pnpm format` | Format all files with Prettier |

---

## Deployment

### Vercel (Recommended)

The project includes a `vercel.json` configuration file. To deploy:

1. **Push to GitHub** — Commit and push the repository to GitHub.

2. **Import in Vercel** — Go to [vercel.com/new](https://vercel.com/new), import the GitHub repository.

3. **Vercel auto-detects the configuration:**
   - **Build Command**: `pnpm run build:static`
   - **Output Directory**: `dist/public`
   - **Install Command**: `pnpm install`
   - **Framework**: Vite

4. **Deploy** — Click "Deploy". Vercel handles the build and provides a production URL.

The `vercel.json` includes SPA rewrites so all routes (e.g., `/products/actigel`, `/blog/article-slug`) correctly serve `index.html` for client-side routing.

### Netlify

Create a `netlify.toml` in the project root (or configure via the Netlify dashboard):

```toml
[build]
  command = "pnpm run build:static"
  publish = "dist/public"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### GitHub Pages

1. Build the project: `pnpm run build:static`
2. Deploy the `dist/public/` directory using [gh-pages](https://www.npmjs.com/package/gh-pages) or GitHub Actions.
3. Add a `404.html` that redirects to `index.html` for SPA routing support.

### Any Static Host

The build output (`dist/public/`) is a standard set of static files. Deploy to any host that serves HTML/CSS/JS:

1. Run `pnpm run build:static`
2. Upload the contents of `dist/public/` to your hosting provider
3. Configure a catch-all redirect: all routes should serve `index.html` (required for client-side routing)

---

## Design System

The project follows a comprehensive design system documented in [`DESIGN.md`](./DESIGN.md). Key highlights:

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Violet Deep | `#4A1A6B` | Headings, navbar, footer, primary brand |
| Violet Mid | `#6B3FA0` | Hover states, gradient endpoints |
| Teal | `#2ABFBF` | CTAs, accents, interactive elements |
| Teal Dark | `#1A9E9E` | Pressed/active states |
| Lavender | `#C4A7D7` | Decorative accents |
| Lavender Light | `#E8DCF0` | Borders, dividers |
| Cream | `#FAF7F5` | Page background |

### Typography

- **Headings**: Figtree (300–800 weights) — clean, geometric, medical-friendly
- **Body**: Noto Sans (300–700 weights) — excellent readability, broad Unicode support

### Product Color Themes

Each product page uses a distinct accent color:
- **ActiGel**: Violet Deep (`#4A1A6B`)
- **FemiWash**: Teal (`#2ABFBF`)
- **LiquiGel**: Rose (`#c47a8e`)
- **FloraPlus**: Sage Green (`#5a7a5a`)

---

## Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with 12+ sections |
| `/products/actigel` | ActiGel | Product detail: BV treatment gel |
| `/products/femiwash` | FemiWash | Product detail: Daily intimate wash |
| `/products/liquigel` | LiquiGel | Product detail: Vaginal dryness gel |
| `/products/floraplus` | FloraPlus | Product detail: Vaginal flora support |
| `/blog` | Blog | 8 educational articles with category filters |
| `/blog/:slug` | Article | Individual article with sidebar and newsletter |
| `/quiz` | Quiz | 5-question product recommender |

### Homepage Sections (in order)

1. **Hero** — Full-width with lifestyle imagery and trust indicators
2. **About** — Brand story highlighting the 2QR Complex
3. **Products** — 4 product cards with real product photos
4. **Comparison** — Side-by-side feature comparison table
5. **Benefits** — 6 benefit cards (clinically proven, natural, etc.)
6. **How It Works** — 3-step care routine guide
7. **Testimonials** — Carousel with verified user reviews
8. **Blog Preview** — 3 latest articles
9. **Newsletter** — Email signup with gradient card
10. **Where to Buy** — Pharmacies (Mercury Drug, Watsons, Rose Pharmacy) + Online (Shopee, Lazada)
11. **FAQ** — 9 questions across 3 categories
12. **CTA** — Final call-to-action with Shopee/Facebook links
13. **Footer** — Navigation links, social media, copyright

---

## Customization

### Changing Brand Colors

All colors are defined as CSS custom properties in `client/src/index.css` under the `@theme inline` block and `:root` selector. Update the OKLCH values to change the palette globally:

```css
:root {
  --color-violet-deep: oklch(0.32 0.14 300);
  --color-teal: oklch(0.72 0.12 190);
  --color-cream: oklch(0.98 0.005 80);
  /* ... */
}
```

### Changing Fonts

Fonts are loaded in `client/index.html` via Google Fonts CDN. To change:

1. Update the `<link>` tag in `client/index.html` with new Google Fonts URLs
2. Update the `font-family` declarations in `client/src/index.css`
3. Replace `font-['Figtree']` and `font-['Noto_Sans']` references in components

### Adding New Products

1. Create a new page in `client/src/pages/` following the pattern of `ActiGelPage.tsx`
2. Add a lazy import and route in `client/src/App.tsx`
3. Add the product to the `products` array in `ProductsSection.tsx`
4. Add comparison data in `ComparisonSection.tsx`
5. Update quiz scoring logic in `QuizPage.tsx`

### Adding New Blog Articles

Blog articles are defined as a static array in `BlogPage.tsx`. To add a new article:

1. Add a new entry to the `articles` array in `client/src/pages/BlogPage.tsx`
2. Add the full article content to the `articleContent` object in `client/src/pages/BlogArticlePage.tsx`
3. The article will automatically appear in the blog listing and homepage preview

---

## Troubleshooting

### Development Server Won't Start

**Error:** `Port 3000 is already in use`

**Solution:** The dev server will automatically find the next available port. Alternatively, kill the process using port 3000:

```bash
lsof -ti:3000 | xargs kill -9
pnpm dev
```

### Build Fails with TypeScript Errors

**Solution:** Run the type checker to see all errors:

```bash
pnpm check
```

Fix the reported issues, then rebuild.

### Styles Not Applying

**Possible causes:**
1. Tailwind class not in the content scan path — ensure the file is under `client/src/`
2. Custom color token misspelled — check `index.css` for the exact token name
3. Browser cache — hard refresh with `Ctrl+Shift+R`

### Routes Return 404 on Deployment

This is a client-side routing issue. Your hosting provider needs to serve `index.html` for all routes. Solutions:

- **Vercel**: Already configured in `vercel.json` with rewrites
- **Netlify**: Add `_redirects` file with `/* /index.html 200`
- **Apache**: Add `.htaccess` with `FallbackResource /index.html`
- **Nginx**: Add `try_files $uri $uri/ /index.html;` to the server block

### Images Not Loading

All images are served from external CDN URLs. If images fail to load:
1. Check your network connection
2. Verify the CDN URLs are accessible (they are public S3/CDN links)
3. Check the browser console for CORS or mixed-content errors

---

## License

MIT
