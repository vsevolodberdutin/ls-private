# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 (App Router) socionics consulting website built with TypeScript and Tailwind CSS. The architecture uses a single-page application pattern where all sections are rendered in one scrollable container (src/app/page.tsx).

## Development Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000

# Production
npm run build        # Build for production
npm run start        # Run production server

# Code Quality
npm run lint         # Run ESLint
```

## Architecture Patterns

### Section-Based Composition

The app follows a unique section-based architecture where src/app/page.tsx orchestrates all major sections in vertical flow:

1. Navigation (fixed header)
2. MainSection (hero with service menu)
3. AboutSection (biography blocks)
4. PrivateSession (pricing/info)
5. TeachingSection (placeholder)
6. FamilySection (placeholder)
7. SchoolSection (placeholder)

Each section is self-contained and imports its own data/constants.

### Data Management Pattern

Three-layer content management system:

1. **JSON Files** (src/data/) - Dynamic content lists
   - `about.json` - Professional credentials, education, publications, companies
   - `products.json` - Service offerings
   - `homepage-typography.json` - Homepage text
   - Import with: `import * as about from '@/data/about.json'`

2. **TypeScript Constants** (src/constants/) - Strongly typed structured data
   - `contacts.ts` - Contact info and pricing with `as const` for type safety
   - Import with: `import { CONTACTS, PRICING } from '@/constants/contacts'`

3. **Components** - Pure presentation logic

### Component Organization

```
src/app/
├── sections/          # Top-level page sections (main architectural units)
├── components/        # Reusable components
│   └── mainMenu/     # Sub-components for specific features
├── uiElements/        # UI primitives library
│   ├── wrappers/     # Layout wrapper components (GridWrapper, SectionWrapper, etc.)
│   ├── buttons/      # Button components (WhatsappBtn, ViberBtn, TelegramBtn)
│   ├── Typography.tsx # Typography system (Header, SubHeader, etc.)
│   └── Icon.tsx      # Icon + text label component
└── hooks/            # Custom React hooks (currently empty)
```

### Wrapper Pattern

The codebase uses custom wrapper components for consistent layouts:

- **GridWrapper/SectionWrapper** - Two-column layout: `grid-cols-1 lg:grid-cols-[450px_850px]`
- **MenuWrapper** - Responsive card grid: `grid-cols-1 md:grid-cols-2`
- **ShadowImgWrapper** - Complex gradient shadows using CSS pseudo-elements
- **RoundImgWrapper/MobileWrapper** - Responsive image containers

These wrappers maintain visual consistency across sections.

## Styling System

Multi-layered approach combining:

### 1. Global CSS Variables (src/app/globals.css)
```css
--background-start-rgb: #ffd9aa (peach/orange)
--background-end-rgb: #f78e74 (coral)
```

### 2. Custom CSS Classes
- `.section-flat` - Solid background
- `.section-odd` - Gradient ending in start color
- `.section-even` - Gradient ending in end color
- `.scroll-container` - Full viewport with hidden scrollbar

Sections alternate between these classes for flowing visual experience.

### 3. Design Tokens
- Primary palette: Pink/Orange gradient scheme
- Glass-morphism: `bg-white/60 backdrop-blur-xl`
- Hover animations: `hover:scale-[105%]`, `transition-all duration-200`

### 4. Typography System
Component-based typography exports from src/app/uiElements/Typography.tsx:
- `Header`, `SubHeader` - Main headings
- `CardHeader`, `CardSubHeader` - Card content
- `PageHeader`, `InfoTypography` - Specialized text

## Code Conventions

### Named Export Pattern
Multiple related component variations exported from single files:

```tsx
// Picture components
export const MainPicture: React.FC = () => { ... }
export const MobileMainPicture: React.FC = () => { ... }

// Button components
export const WhatsappBtn = () => { ... }
export const ViberBtn = () => { ... }
```

### Deep Link URLs
Contact buttons use platform-specific protocols:
- WhatsApp: `whatsapp://send?phone=...`
- Viber: `viber://chat?number=...`
- Telegram: `tg://resolve?domain=...`

### Responsive Strategy
- Desktop: Large shadow-wrapped components
- Mobile: Smaller rounded versions with separate components
- Breakpoints: `sm:`, `md:`, `lg:` (Tailwind defaults)

## Path Aliases

TypeScript configured with `@/*` alias mapping to `./src/*`:

```tsx
import { Icon } from '@/app/uiElements/Icon'
import * as about from '@/data/about.json'
```

## Configuration

- **TypeScript**: Strict mode enabled (tsconfig.json)
- **Prettier**: No semicolons, single quotes, tab width 2, print width 80
- **Tailwind**: Dark mode via 'class', tw-elements plugin, custom gradients
- **PostCSS**: postcss-import, tailwindcss/nesting, autoprefixer

## Current State

The codebase is under active development:
- Three sections (Teaching, Family, School) are placeholder stubs
- Recent refactoring migrated from hardcoded values to TypeScript constants (src/constants/)
- Modified files: PrivateSession, AboutBlocks, Icon, globals.css (per git status)

When adding new sections, follow the established pattern: create section component, add data files if needed, import into page.tsx, and apply appropriate gradient class.
- when you ask anything start with "My dear friend,"