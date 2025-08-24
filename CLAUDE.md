# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production with optimized bundles and Terser minification  
- `npm run lint` - Run ESLint across the codebase
- `npm run preview` - Preview production build locally

## Architecture Overview

This is a React TypeScript health insurance comparison website built with Vite. The application uses React Router for client-side routing and React Helmet Async for SEO management.

### Key Architectural Patterns

**Page-Based Routing**: All routes are defined in `src/App.tsx` using React Router. Pages are organized in `src/pages/` with subdirectories for:
- `blog/` - Blog articles 
- `reviews/` - Insurance provider reviews
- `guides/` - Educational guides

**SEO-First Design**: Every page uses the `SEO` component (`src/components/SEO.tsx`) which integrates with:
- `src/config/constants.ts` for site-wide metadata defaults
- Structured data schema for search engines  
- Canonical URLs and OpenGraph tags

**Component Architecture**: 
- Reusable components in `src/components/`
- Type definitions centralized in `src/types/index.ts`
- Insurance product and coverage plan interfaces define the core data models

**Build Optimization**: Vite configuration includes:
- Manual code splitting: vendor bundle (React ecosystem) and UI bundle (Lucide icons)
- Production builds drop console logs and use Terser minification
- CSS code splitting enabled

### Content Management

**Insurance Data**: Core types like `InsuranceProduct` and `CoveragePlan` in `src/types/index.ts` define the structure for insurance comparison data.

**Static Content**: Netlify deployment configuration in `public/_redirects`, robots.txt, and sitemap.xml are managed in the public directory.

**Breadcrumbs**: The `Breadcrumbs` component provides navigation context and SEO breadcrumb markup.

### Special Page Behaviors

**Conditional UI**: The App component handles special cases:
- Footer is hidden on quotes pages (`/quotes` and `/quotes/thank-you`)
- Different layouts for specific pages like Adv1

**Form Handling**: Quote forms and contact forms use the `FormData` interface from types.

## Key Files to Understand

- `src/App.tsx` - Main routing and layout logic
- `src/config/constants.ts` - Site-wide configuration and SEO defaults
- `src/types/index.ts` - Core data model interfaces
- `vite.config.ts` - Build optimization settings