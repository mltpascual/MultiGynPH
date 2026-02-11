# Design System: Multi-Gyn PH

**Project:** Multi-Gyn PH Landing Page & Product Hub
**Design Philosophy:** Fluid Wellness — Soft Modernism
**Last Updated:** February 11, 2026

---

## 1. Visual Theme & Atmosphere

The Multi-Gyn PH design language draws from **Scandinavian wellness aesthetics** and **premium skincare branding** (think Aesop, Glossier). The overall atmosphere is **airy, nurturing, and medically trustworthy** — a page that feels like one continuous, breathing surface rather than a stack of rigid blocks.

The design conveys clinical credibility without feeling cold or sterile. Organic wave dividers between sections create a sense of flow and continuity. Frosted-glass effects on cards add depth without heaviness. The palette balances feminine softness (lavender tones) with professional authority (deep violet) and fresh vitality (teal accents).

**Mood Keywords:** Airy, Nurturing, Premium, Trustworthy, Organic, Flowing, Clean

---

## 2. Color Palette & Roles

### Primary Colors

| Name | OKLCH Value | Hex Equivalent | Role |
|------|-------------|----------------|------|
| **Violet Deep** — Brand Authority | `oklch(0.32 0.14 300)` | `#4A1A6B` | Primary brand color. Used for headings, navbar text, footer background, and primary UI elements. Conveys medical authority and premium positioning. |
| **Violet Mid** — Supporting Depth | `oklch(0.45 0.15 300)` | `#6B3FA0` | Hover states for violet-deep elements, gradient endpoints, and secondary emphasis. Provides tonal variation within the purple family. |
| **Teal** — Vitality & Action | `oklch(0.72 0.12 190)` | `#2ABFBF` | All call-to-action buttons, accent highlights, interactive hover states, and health/freshness indicators. The "action" color that draws the eye. |
| **Teal Dark** — Pressed States | `oklch(0.58 0.12 190)` | `#1A9E9E` | Active/pressed states for teal buttons, checkmark icons, and emphasized teal text. |

### Secondary Colors

| Name | OKLCH Value | Hex Equivalent | Role |
|------|-------------|----------------|------|
| **Lavender** — Soft Femininity | `oklch(0.78 0.07 300)` | `#C4A7D7` | Decorative accents, scrollbar thumb, chart colors, and soft background washes. Bridges the gap between violet-deep and the light background. |
| **Lavender Light** — Whisper Borders | `oklch(0.92 0.03 300)` | `#E8DCF0` | Card borders, section dividers, table row alternation, and subtle background tints. Barely visible but structurally important. |
| **Cream** — Warm Canvas | `oklch(0.98 0.005 80)` | `#FAF7F5` | Page background. A warm off-white that avoids the clinical coldness of pure white while maintaining readability. |
| **Blush** — Gentle Warmth | `oklch(0.88 0.04 10)` | `#F0D5D0` | Occasional decorative accent, chart color, and soft highlight for feminine warmth. |

### Product-Specific Color Themes

Each product page has a distinct accent color to aid visual differentiation while maintaining the overall design language:

| Product | Accent Color | Hex | Usage |
|---------|-------------|-----|-------|
| **ActiGel** | Violet Deep | `#4A1A6B` | Hero gradient, headings, CTA buttons |
| **FemiWash** | Teal | `#2ABFBF` | Hero gradient, headings, CTA buttons |
| **LiquiGel** | Rose | `#c47a8e` | Hero gradient, headings, CTA buttons |
| **FloraPlus** | Sage Green | `#5a7a5a` | Hero gradient, headings, CTA buttons |

### Contrast Rules

- **On dark backgrounds** (violet-deep, gradients): Use white text (`#FFFFFF`) with opacity modifiers (`/80`, `/65`, `/50`) for hierarchy.
- **On light backgrounds** (cream, white): Use violet-deep for headings, `foreground/70` for body text, `foreground/45` for captions.
- **On hero images**: Always overlay a gradient (`from-violet-deep via-violet-deep/60 to-transparent`) to ensure text legibility.

---

## 3. Typography Rules

### Font Families

| Role | Font | Source | Character |
|------|------|--------|-----------|
| **Headings** | [Figtree](https://fonts.google.com/specimen/Figtree) | Google Fonts | Clean, geometric, medical-friendly. Slightly rounded terminals give warmth without sacrificing professionalism. |
| **Body** | [Noto Sans](https://fonts.google.com/specimen/Noto+Sans) | Google Fonts | Excellent readability at all sizes. Neutral enough to not compete with Figtree headings. Broad Unicode support for Philippine market. |

### Type Scale & Hierarchy

| Element | Font | Size (Desktop) | Size (Mobile) | Weight | Additional |
|---------|------|----------------|---------------|--------|------------|
| **H1 — Page Title** | Figtree | `text-4xl` to `text-5xl` | `text-3xl` | `font-bold` (700) | `leading-tight` |
| **H2 — Section Title** | Figtree | `text-3xl` to `text-4xl` | `text-2xl` to `text-3xl` | `font-bold` (700) | `leading-tight`, color: violet-deep |
| **H3 — Card/Sub Title** | Figtree | `text-base` to `text-lg` | `text-base` | `font-bold` (700) | `leading-snug` |
| **Section Label** | Figtree | `text-sm` | `text-sm` | `font-semibold` (600) | `tracking-[0.15em] uppercase`, color: teal |
| **Body Text** | Noto Sans | `text-base` | `text-sm` to `text-base` | `font-normal` (400) | `leading-relaxed`, color: foreground/65–75 |
| **Caption/Meta** | Noto Sans | `text-xs` to `text-sm` | `text-xs` | `font-normal` (400) | color: foreground/40–50 |
| **Button Text** | Figtree | `text-sm` | `text-sm` | `font-semibold` (600) | — |
| **Nav Links** | Noto Sans | `text-sm` | `text-base` | `font-medium` (500) | — |

### Typography Patterns

- **Section headers** always follow the pattern: `<span>UPPERCASE LABEL</span>` (teal, tracked) → `<h2>Title</h2>` (violet-deep, bold) → `<p>Description</p>` (muted body).
- **Emphasis within body text** uses `<strong>` with `text-violet-deep/70` to subtly highlight key terms without disrupting reading flow.
- **Links in body text** use teal color with underline on hover.

---

## 4. Component Stylings

### Buttons

| Variant | Shape | Background | Text | Shadow | Hover |
|---------|-------|------------|------|--------|-------|
| **Primary CTA** | Pill-shaped (`rounded-full`) | `bg-teal` | White, Figtree semibold | `shadow-[0_4px_16px_rgba(42,191,191,0.3)]` | `bg-teal-dark`, shadow grows |
| **Secondary CTA** | Pill-shaped (`rounded-full`) | `bg-violet-deep` | White, Figtree semibold | `shadow-[0_4px_16px_rgba(74,26,107,0.25)]` | `bg-violet-mid`, shadow grows |
| **Ghost/Outline** | Pill-shaped (`rounded-full`) | Transparent, `border border-white/20` | White or violet-deep | None | `bg-white/10` or `bg-lavender-light/30` |
| **Tab Button (Active)** | Pill-shaped (`rounded-full`) | Dynamic (product color) | White | `shadow-lg` | — |
| **Tab Button (Inactive)** | Pill-shaped (`rounded-full`) | White | `text-violet-deep/60` | None, `border border-lavender-light/50` | `text-violet-deep` |

### Cards

| Type | Corners | Background | Border | Shadow | Hover |
|------|---------|------------|--------|--------|-------|
| **Product Card** | Generously rounded (`rounded-2xl`) | White | `border-lavender-light/50` | `shadow-[0_4px_24px_rgba(74,26,107,0.06)]` | Lift `-translate-y-2`, shadow intensifies |
| **Benefit Card** | Generously rounded (`rounded-2xl`) | White | `border-lavender-light/50` | `shadow-[0_2px_16px_rgba(74,26,107,0.04)]` | Background tint `bg-lavender-light/10` |
| **Blog Card** | Generously rounded (`rounded-2xl`) | White | `border-lavender-light/50` | `shadow-[0_2px_16px_rgba(74,26,107,0.04)]` | Lift `-translate-y-1`, shadow intensifies |
| **Testimonial Card** | Generously rounded (`rounded-2xl`) | White | `border-lavender-light/30` | `shadow-[0_4px_24px_rgba(74,26,107,0.06)]` | — |
| **Featured Card** | Very rounded (`rounded-3xl`) | White | `border-lavender-light/50` | `shadow-[0_4px_24px_rgba(74,26,107,0.06)]` | Shadow intensifies |
| **Quiz Option Card** | Rounded (`rounded-xl`) | White | `border-lavender-light/50` | `shadow-sm` | Border teal, lift `-translate-y-1` |
| **Newsletter Card** | Very rounded (`rounded-3xl`) | Gradient `violet-deep → violet-mid` | None | `shadow-[0_8px_32px_rgba(74,26,107,0.2)]` | — |

### Icon Containers

- **Small icon badge**: `w-10 h-10 rounded-xl bg-teal/10` with teal icon inside.
- **Large icon badge**: `w-14 h-14 rounded-2xl bg-teal/10` with teal icon inside.
- **Step number**: `w-10 h-10 rounded-full bg-teal text-white` with Figtree bold number.
- **Quiz step indicator**: `w-8 h-8 rounded-full` — active: `bg-teal text-white`, completed: `bg-teal/20 text-teal`, upcoming: `bg-lavender-light/50 text-foreground/30`.

### Comparison Table

- **Desktop**: Full grid layout (`grid-cols-[240px_repeat(4,1fr)]`) with alternating row backgrounds.
- **Mobile**: Tab-based card view — one product at a time with pill-shaped tab switcher.
- **Check marks**: Teal circle (`bg-teal/15`) with teal check icon.
- **X marks**: Gray circle (`bg-gray-100`) with gray X icon.

### Accordion (FAQ)

- **Trigger**: Full-width, left-aligned text with right-side chevron indicator.
- **Content**: Slides down with `duration-300` ease. Body text in Noto Sans at `text-foreground/65`.
- **Dividers**: `border-lavender-light/30` between items.

### Navigation

- **Desktop Navbar**: Floating, sticky. Transparent on top → `bg-white/85 backdrop-blur-xl` on scroll. Height: `h-20`.
- **Mobile Navbar**: Same scroll behavior. Hamburger menu with `AnimatePresence` slide-down.
- **Nav link hover**: Underline animation from left (`after:w-0 → after:w-full`) in teal.
- **Product page navbars**: Simplified with contextual links (Ingredients, How to Use, etc.).

---

## 5. Layout Principles

### Spacing System

| Context | Value | Usage |
|---------|-------|-------|
| **Section vertical padding** | `py-16 md:py-24` | Standard section spacing |
| **Container max-width** | `max-width: 1280px` | Content constraint on desktop |
| **Container padding** | `px-4` → `px-6` → `px-8` | Mobile → Tablet → Desktop |
| **Card grid gap** | `gap-6` to `gap-8` | Between card items |
| **Card internal padding** | `p-5` to `p-8` | Depending on card size |
| **Section header margin-bottom** | `mb-10` to `mb-12` | Space between header and content |

### Grid Patterns

- **Product cards**: `grid sm:grid-cols-2 lg:grid-cols-4 gap-6`
- **Benefit cards**: `grid sm:grid-cols-2 lg:grid-cols-3 gap-6`
- **Blog cards**: `grid sm:grid-cols-2 lg:grid-cols-3 gap-6`
- **Article layout**: `grid lg:grid-cols-[1fr_320px] gap-12` (content + sidebar)
- **About section**: Asymmetric `grid lg:grid-cols-2 gap-12` (image left, text right)
- **Quiz layout**: Centered single-column `max-w-2xl mx-auto` with step indicator
- **Newsletter**: Full-width gradient card with centered content `max-w-xl mx-auto`

### Wave Dividers

Organic SVG wave shapes separate major sections, creating the "flowing" feel:

- **Wave height**: 60–80px
- **Wave fill**: Matches the next section's background color
- **Positioning**: Absolute bottom of the preceding section, with negative margin on the following section to prevent gaps.
- **Important**: Always add `padding-bottom` to the section above the wave to prevent content overlap.

### Responsive Breakpoints

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| **Mobile** | `< 640px` | Single column, stacked layout, hamburger nav |
| **Tablet** | `640px – 1023px` | 2-column grids, expanded padding |
| **Desktop** | `≥ 1024px` | Full multi-column layouts, desktop nav, max-width container |

---

## 6. Animation & Motion

### Scroll-Triggered Animations

All section content uses `framer-motion` with `useInView` for entrance animations:

| Element | Animation | Duration | Delay Pattern |
|---------|-----------|----------|---------------|
| **Section headers** | `opacity: 0→1, y: 30→0` | `0.7s` | None |
| **Cards in grid** | `opacity: 0→1, y: 25→0` | `0.5s` | Staggered: `0.08s × index` |
| **Hero content** | `opacity: 0→1, y: 30→0` | `0.8s` | Sequential: title → description → CTA |
| **Stats counters** | `opacity: 0→1, y: 20→0` | `0.5s` | Staggered: `0.1s × index` |
| **Quiz transitions** | `opacity: 0→1, x: 50→0` | `0.4s` | Horizontal slide for step progression |

### Interaction Animations

| Trigger | Effect | Duration |
|---------|--------|----------|
| **Card hover** | `translateY(-4px to -8px)`, shadow intensifies | `0.4s` |
| **Button hover** | Background color shift, shadow grows | `0.3s` |
| **Nav link hover** | Underline grows from left | `0.3s` |
| **Blog card image hover** | `scale(1.05)` | `0.5s` |
| **Mobile menu** | Height expand with `AnimatePresence` | `0.3s ease-in-out` |
| **Accordion** | Height expand/collapse | `0.3s` |
| **Testimonial carousel** | Horizontal slide with `ease-in-out` | `0.5s` |
| **Quiz option select** | Border color + scale pulse | `0.2s` |
| **Quiz step transition** | `AnimatePresence` with directional slide | `0.4s` |
| **Progress bar fill** | Width transition with spring easing | `0.6s` |

### Motion Principles

- **Entrance**: Always from below (`y: 20–30`) with fade-in. Never from the sides (exception: quiz step transitions use horizontal slide).
- **Trigger**: `useInView` with `once: true` and `margin: "-80px"` to trigger slightly before element enters viewport.
- **Easing**: Default ease or `ease-in-out`. No bouncy or elastic curves — the brand is medical/professional.
- **Duration**: Keep animations between `0.3s` and `0.8s`. Anything longer feels sluggish.
- **Stagger**: Grid items stagger at `0.08s` intervals. Never exceed `0.15s` per item.

---

## 7. Image & Visual Asset Guidelines

### Image Sources (Priority Order)

1. **AI-Generated** (via `generate_image`): Hero backgrounds, abstract patterns. Used sparingly for high-impact areas only.
2. **Unsplash**: Blog article images, lifestyle photography. Higher quality than search results.
3. **Product Photos**: Real product images sourced from official Multi-Gyn channels and uploaded to CDN.

### Image Treatment

| Context | Treatment |
|---------|-----------|
| **Hero backgrounds** | Abstract flowing organic shapes in brand colors. Overlaid with gradient for text legibility. |
| **Product images** | Clean product photography on transparent/white background. `object-contain` to preserve proportions. |
| **Blog images** | Lifestyle/editorial photography. `object-cover` with `rounded-2xl` corners. |
| **About section** | Nature/wellness imagery. Paired with floating info badge overlay. |
| **Product page heroes** | Each product has a unique AI-generated abstract background in its accent color family. |

### Text-on-Image Contrast Rules

- **Light/watercolor backgrounds**: Use dark text (violet-deep or charcoal).
- **Dark backgrounds**: Use white text with opacity modifiers for hierarchy.
- **Always**: Apply gradient overlay (`from-violet-deep via-violet-deep/60 to-transparent`) on hero images before placing text.

---

## 8. Brand Voice in UI

### Microcopy Tone

- **Professional but warm**: "Gentle Care Rooted in Nature's Wisdom" (not "The Best Feminine Products")
- **Empowering, not clinical**: "Your Intimate Health, Naturally Balanced" (not "Vaginal Infection Treatment")
- **Trustworthy**: Always cite "clinically-proven," "patented 2QR Complex," "20+ years"
- **Inclusive**: "Women across the Philippines" — broad, welcoming language

### Section Label Patterns

All section labels follow: `UPPERCASE TRACKED TEXT` in teal, positioned above the main heading.

Examples:
- `OUR STORY` → "Gentle Care Rooted in Nature's Wisdom"
- `OUR PRODUCTS` → "Complete Intimate Care Range"
- `WHY CHOOSE US` → "The Multi-Gyn Difference"
- `FIND YOUR MATCH` → "Product Comparison"
- `HEALTH HUB` → "Intimate Health Insights"
- `STAY INFORMED` → "Join Our Wellness Community"
- `PRODUCT FINDER` → "Find Your Perfect Match"

---

## 9. File Architecture & Conventions

### Component Organization

```
client/src/
├── pages/
│   ├── Home.tsx              # Landing page (assembles sections)
│   ├── ActiGelPage.tsx       # Product detail page
│   ├── FemiWashPage.tsx      # Product detail page
│   ├── LiquiGelPage.tsx      # Product detail page
│   ├── FloraPlusPage.tsx     # Product detail page
│   ├── BlogPage.tsx          # Blog listing page
│   ├── BlogArticlePage.tsx   # Individual article page
│   └── QuizPage.tsx          # Product recommender quiz
├── components/
│   ├── Navbar.tsx            # Sticky floating navbar
│   ├── HeroSection.tsx       # Homepage hero
│   ├── AboutSection.tsx      # Brand story
│   ├── ProductsSection.tsx   # Product cards grid
│   ├── ComparisonSection.tsx # Product comparison table
│   ├── BenefitsSection.tsx   # Why choose us grid
│   ├── WhyMultiGynSection.tsx# 3-step routine
│   ├── TestimonialsSection.tsx# Testimonial carousel
│   ├── BlogPreviewSection.tsx# Homepage blog preview
│   ├── NewsletterSection.tsx # Newsletter signup form
│   ├── WhereToBuySection.tsx # Pharmacy & online tabs
│   ├── FAQSection.tsx        # Accordion FAQ
│   ├── CTASection.tsx        # Bottom call-to-action
│   └── Footer.tsx            # Site footer
```

### Route Structure

| Path | Page | Lazy Loaded |
|------|------|-------------|
| `/` | Home | No (critical path) |
| `/products/actigel` | ActiGelPage | Yes |
| `/products/femiwash` | FemiWashPage | Yes |
| `/products/liquigel` | LiquiGelPage | Yes |
| `/products/floraplus` | FloraPlusPage | Yes |
| `/blog` | BlogPage | Yes |
| `/blog/:slug` | BlogArticlePage | Yes |
| `/quiz` | QuizPage | Yes |

### Design Comment Convention

Every component file begins with a design comment block:

```tsx
/*
  DESIGN: Fluid Wellness — Soft Modernism
  Section: [Section Name]
  Purpose: [Brief description]
  Colors: violet-deep headings, teal accents, lavender-light borders
  Fonts: Figtree (headings), Noto Sans (body)
*/
```

This ensures any developer touching the file understands the design intent before making changes.

---

## 10. Interactive Features

### Product Quiz

The product recommender quiz guides users through 5 questions to suggest the best Multi-Gyn product:

- **Layout**: Centered single-column with step progress indicator at the top
- **Step indicator**: Numbered circles connected by lines — active (teal fill), completed (teal outline with check), upcoming (gray)
- **Progress bar**: Thin horizontal bar below step indicator, fills proportionally with teal gradient
- **Options**: Card-based selection (not radio buttons) — each option is a clickable card with hover lift
- **Transitions**: Horizontal slide between questions using `AnimatePresence` with `mode="wait"`
- **Result page**: Product recommendation card with match percentage, key benefits, and CTA to product page; secondary recommendation shown below

### Newsletter Signup

- **Homepage variant**: Full-width gradient card (`violet-deep → violet-mid`) with centered content, email input, and "Subscribe Now" button
- **Blog article variant**: Compact card at the bottom of each article with the same gradient treatment
- **Input styling**: White background, rounded-full, with teal submit button inline
- **Success state**: Animated checkmark with "Thank you!" message replacing the form

---

## 11. Performance & Deployment

### Code Splitting Strategy

The application uses React.lazy() for route-based code splitting:

| Chunk | Contents | Gzipped Size |
|-------|----------|-------------|
| **index** | Home page + shared components + framework | ~108 KB |
| **vendor** | React, React DOM | ~4 KB |
| **framer-motion** | Animation library | ~39 KB |
| **ui** | Radix UI primitives | ~15 KB |
| **Product pages** | Individual product detail pages | ~10 KB each |
| **Blog pages** | Blog listing + article pages | ~7–10 KB each |
| **QuizPage** | Product recommender quiz | ~5 KB |

### Vercel Deployment

The project is configured for Vercel with:

- `vercel.json` — Build command (`pnpm run build:static`), output directory (`dist/public`), and SPA rewrites
- `build:static` script — Frontend-only build (no server bundling)
- SPA fallback — All routes rewrite to `/index.html` for client-side routing

### Build Output

- Static files output to `dist/public/`
- CSS: ~24 KB gzipped (Tailwind with tree-shaking)
- Total JS: ~210 KB gzipped (across all chunks, only loads what's needed per route)

---

## 12. Accessibility Notes

- **Focus rings**: Visible focus indicators on all interactive elements via `outline-ring/50`.
- **Color contrast**: All text meets WCAG AA contrast ratios against their backgrounds.
- **Keyboard navigation**: All interactive elements are reachable via Tab key. Quiz options are keyboard-selectable.
- **Aria labels**: Icon-only buttons include `aria-label` attributes.
- **Reduced motion**: Consider adding `prefers-reduced-motion` media query for users who prefer less animation (not yet implemented).
- **Semantic HTML**: Proper heading hierarchy (h1 → h2 → h3), landmark elements (`<header>`, `<main>`, `<footer>`, `<nav>`).
- **Form accessibility**: Newsletter email input has associated label. Quiz options use semantic button elements.
