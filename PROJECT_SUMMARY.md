# Project Summary: Sam Daugherty Design Portfolio

**Live Site:** https://sambuilt.it  
**Framework:** Nuxt 3 (Vue 3)  
**Styling:** Tailwind CSS  
**Deployment:** Vercel  
**Analytics:** Google Analytics 4 (GA4)

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture & Structure](#architecture--structure)
3. [Key Design Principles](#key-design-principles)
4. [Adding New Blog Posts](#adding-new-blog-posts)
5. [Adding New Portfolio Projects](#adding-new-portfolio-projects)
6. [Component Philosophy](#component-philosophy)
7. [Important Files & Their Roles](#important-files--their-roles)
8. [Styling Conventions](#styling-conventions)
9. [SEO & Meta Tags](#seo--meta-tags)
10. [Development Workflow](#development-workflow)
11. [Known Issues & Decisions](#known-issues--decisions)
12. [Future Enhancements](#future-enhancements)

---

## Project Overview

This is a personal design portfolio and blog for Sam Daugherty, a UX/UI Designer. The site showcases:
- **Work Portfolio:** Case studies for major design projects (Blueprint, Today Card, Better Recommendations, Workforce Equity Initiative)
- **Blog/Writing Section:** Long-form articles about design, creativity, career, and personal reflections
- **About Page:** Bio and professional experience
- **Contact Page:** Get in touch form

### Design Philosophy
The site has a **bold, editorial design** inspired by print journalism layouts. Key visual elements include:
- Large, overlapping typography with orange outlined background text
- Custom font pairing: Alumni Sans (headings) + Lato (body)
- Dark mode support throughout
- Orange accent color (#F32929) used strategically
- Generous white space and asymmetric layouts
- Drop shadows on hero images for depth

---

## Architecture & Structure

### Tech Stack
- **Framework:** Nuxt 3 (Vue 3 with Composition API)
- **Routing:** File-based routing (pages directory)
- **State Management:** Composables (useTheme.ts for dark mode)
- **Styling:** Tailwind CSS with custom configuration
- **Build Tool:** Vite (bundled with Nuxt 3)
- **Type Safety:** TypeScript (minimal, mostly in composables and utils)

### Directory Structure
```
design-portfolio-nuxt/
├── assets/styles/           # Global styles
│   └── tailwind.css         # Tailwind imports + custom CSS
├── components/              # Vue components (see Component Philosophy)
├── composables/             # Reusable Vue composition functions
│   └── useTheme.ts          # Dark mode state management
├── data/                    # Static data files
│   └── blogPosts.js         # Blog post metadata (CRITICAL - see below)
├── layouts/                 # Layout wrappers
│   └── default.vue          # Main layout with Navigation & Footer
├── pages/                   # File-based routes
│   ├── index.vue            # Homepage
│   ├── About.vue
│   ├── Contact.vue
│   ├── Work.vue
│   ├── Writing.vue
│   ├── TLDR.vue
│   ├── work/                # Portfolio case studies
│   └── writing/             # Individual blog posts
├── plugins/                 # Nuxt plugins
│   └── ga4.client.ts        # Google Analytics 4 integration
├── public/                  # Static assets (images, SVGs)
├── utils/                   # Utility functions
│   └── meta.ts              # SEO meta utilities
└── nuxt.config.ts           # Nuxt configuration
```

---

## Key Design Principles

### 1. Component-Based Architecture
**Every page is composed of small, focused components.** Even if a component is only used once (like `HeroSection.vue`), it's extracted for:
- **Readability:** Pages act as a table of contents
- **Maintainability:** Easy to find and modify specific sections
- **Scoped Styles:** CSS doesn't leak between components
- **Performance:** Vite can code-split at component level

**Example:** `pages/index.vue` looks like this:
```vue
<template>
  <div>
    <HeroSection />
    <ProjectShowcase />
    <ProjectShowcaseToday />
    <ProjectShowcaseRecs />
    <BioSection />
    <TalkSoon />
  </div>
</template>
```

### 2. Dark Mode Support
- Implemented via `composables/useTheme.ts`
- Uses Tailwind's `dark:` prefix throughout
- Persists preference to localStorage
- Toggleable via Navigation component

### 3. Accessibility
- Semantic HTML (`<main>`, `<section>`, `<article>`)
- ARIA labels on interactive elements
- Proper heading hierarchy
- Alt text on all images

---

## Adding New Blog Posts

**This is a multi-step process. Follow these steps in order:**

### Step 1: Add Entry to `data/blogPosts.js`
1. Open `data/blogPosts.js`
2. Add new entry **at the TOP** of the `blogPosts` array (newest first)
3. Required fields:
   - `id`: Slug for URL (e.g., `'my-blog-post-title'`)
   - `title`: Full title
   - `excerpt`: 2-3 sentence summary (shows on blog grid)
   - `date`: Format as "Month Day, Year" (e.g., "August 21st, 2025")
   - `image`: Path to hero image (e.g., `'/my-blog-header.png'`)
   - `route`: Full route path (e.g., `'/writing/my-blog-post-title'`)

**Example:**
```javascript
{
  id: 'my-blog-post-title',
  title: 'My Blog Post Title',
  excerpt: 'This is a brief summary of what the post is about...',
  date: 'August 21st, 2025',
  image: '/my-blog-header.png',
  route: '/writing/my-blog-post-title'
}
```

### Step 2: Create the Blog Post Page
1. **Template:** Use `pages/writing/good-enough-design.vue` as the template
2. **Create new file:** `pages/writing/[your-blog-id].vue`
3. **Update the following:**
   - **Background text** (line ~12): Large outlined text behind the title
   - **Main title** (line ~19): The visible h1 heading
   - **Read time** (line ~27): Estimate based on word count (1 minute per 200-250 words)
   - **Date** (line ~27): Match the date from blogPosts.js
   - **Intro paragraph** (line ~102): Use the excerpt from blogPosts.js
   - **Hero image** (line ~111-112): Update src and alt text
   - **Photo credit** (line ~117): Add Unsplash photographer credit (placeholder initially)
   - **All SEO meta tags** (script section, lines ~127-148): Update title, description, ogImage, ogUrl, twitterImage, canonical link
   - **Social sharing functions** (lines ~158, 164): Update the encoded text to match your title

### Step 3: Add Hero Image
1. Save hero image to `/public/` directory
2. Name should match what you specified in blogPosts.js
3. Recommended size: ~1200-1600px wide
4. Format: PNG or WebP preferred

### Step 4: Add Content Manually
1. Write the full blog post content in the Vue file
2. Use the existing blog posts as style guides for:
   - Section headings
   - Paragraph spacing
   - Image placement and sizing
   - Blockquotes
   - Link styling (use `class="text-accent"`)

### Step 5: Push to Git
```bash
git add .
git commit -m "Add new blog post: [Your Title]"
git push
```

### 🤖 AI Assistant Workflow
When Sam asks to create a new blog post, the AI should:
1. Read `data/blogPosts.js` to get the first entry (newest post)
2. Read `pages/writing/good-enough-design.vue` as the template
3. Create new file with all metadata updated
4. Leave placeholder for Unsplash credit
5. Confirm the page is ready for manual content addition
6. When Sam says "I'm finished" or "push to git," commit and push the changes

---

## Adding New Portfolio Projects

Portfolio projects are more complex than blog posts. Here's the workflow:

### Step 1: Create Hero Section Component
1. **Template:** Use existing hero components like `BlueprintHeroSection.vue` or `TodayCardHeroSection.vue`
2. **Create:** `components/[ProjectName]HeroSection.vue`
3. **Update:**
   - Project title and tagline
   - Hero image(s)
   - Background text styling
   - Any custom layout requirements

### Step 2: Create Project Showcase Component (Optional)
If the project needs a custom showcase for the homepage:
1. **Template:** Use `ProjectShowcase.vue`, `ProjectShowcaseToday.vue`, or `ProjectShowcaseRecs.vue`
2. **Create:** `components/ProjectShowcase[ProjectName].vue`
3. Update screenshots, labels, and layout

### Step 3: Create Project Case Study Page
1. **Template:** Use `pages/work/blueprint-mobile-banking-app.vue` as reference
2. **Create:** `pages/work/[project-slug].vue`
3. **Include:**
   - Hero section component
   - Project overview/context
   - Problem statement
   - Design process sections
   - Wireframes/mockups/prototypes
   - Final designs
   - Results/outcomes
   - SEO meta tags (title, description, OG tags)

### Step 4: Add Project to Homepage
1. Open `pages/index.vue`
2. Import new showcase component
3. Add component to template in desired order

### Step 5: Add Project to Work Page
1. Open `pages/Work.vue`
2. Add project card with:
   - Project title
   - Brief description
   - Thumbnail image
   - Link to case study

### Step 6: Add Assets
1. Save all project images to `/public/`
2. Use descriptive names (e.g., `project-name-wireframe-1.png`)
3. Optimize images before uploading (use the `optimize.js` script if needed)

---

## Component Philosophy

### When to Create a Component
✅ **DO create a component when:**
- Content appears on multiple pages (e.g., `Navigation.vue`, `SiteFooter.vue`)
- A page section is complex and self-contained (e.g., `HeroSection.vue`)
- You want scoped styles that don't affect other elements
- The section has its own logic or state

❌ **DON'T create a component when:**
- It's a single line of HTML with no logic
- It would make the code less clear (rare, but possible)

### Component Naming Conventions
- **PascalCase** for file names (e.g., `HeroSection.vue`)
- **Descriptive names** that indicate purpose (e.g., `BlogGrid.vue`, not `Grid.vue`)
- **Suffixes for specificity:**
  - `[Name]Section.vue` for page sections
  - `[Name]Button.vue` for interactive elements
  - `[Name]Flourish.vue` for decorative elements

### Props vs. Multiple Components
**Current approach:** We have separate components for similar layouts (e.g., `ProjectShowcase.vue`, `ProjectShowcaseToday.vue`, `ProjectShowcaseRecs.vue`)

**Potential optimization:** These could be consolidated into a single `ProjectShowcaseCard.vue` component that accepts props for title, screenshots, labels, etc. This would reduce code duplication while maintaining flexibility.

---

## Important Files & Their Roles

### `data/blogPosts.js` ⭐ CRITICAL
This file is the **single source of truth** for all blog post metadata. The `/writing` page dynamically reads from this file to populate the blog grid.

**Key functions:**
- `getLatestPost()` - Returns the newest post (index 0)
- `getPreviousPost()` - Returns second newest (index 1)
- `getRemainingPosts()` - Returns all posts from index 2 onward (excludes placeholders)
- `getOldestPost()` - Returns the last post in the array
- `getEvergreenPost()` - Returns the special evergreen post ("Why I Still Write")

**⚠️ Important:** When adding a new post, add it to the **TOP** of the array, not the bottom.

### `components/Navigation.vue`
Global navigation with:
- Logo (links to homepage)
- Desktop menu (Work, Writing, About, Contact, TLDR)
- Mobile hamburger menu
- Dark mode toggle
- Smooth scroll behavior

### `layouts/default.vue`
Wraps all pages with:
- Navigation component
- Main content slot
- Footer component
- Background stripes (decorative)

### `composables/useTheme.ts`
Manages dark mode state:
- Reads from localStorage on mount
- Provides `isDarkMode` reactive ref
- Provides `toggleDarkMode()` function
- Syncs to `<html>` class and localStorage

### `plugins/ga4.client.ts`
Google Analytics 4 integration:
- Measurement ID: `G-N91D97KHET`
- Loads GA script client-side only
- Tracks pageviews automatically

### `utils/meta.ts`
Utility functions for generating SEO meta tags (if needed in the future - currently each page handles its own meta tags inline).

---

## Styling Conventions

### Tailwind CSS
This project uses **Tailwind CSS** extensively. Custom styles are minimal and scoped to components.

**Responsive breakpoints:**
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px
- `2xl:` - 1536px

**Custom colors** (defined in `tailwind.config.js`):
- `accent` - Orange (#F32929)
- `body` - Body text color

### Typography
**Fonts:**
- **Alumni Sans** - Display/headings (via Google Fonts)
- **Lato** - Body text (via Google Fonts)

**Font classes:**
- `font-alumni` - Alumni Sans
- `font-lato` - Lato

**Common text sizes:**
- Headings: `text-[clamp(4rem,10vw,9rem)]` (responsive with clamp)
- Body: `text-body` (custom Tailwind class)
- Small text: `text-[12px]` or `text-sm`

### Common Patterns

**Orange outlined background text:**
```html
<div 
  class="font-alumni font-bold uppercase text-[clamp(4.5rem,11.5vw,10.5rem)] opacity-25"
  style="-webkit-text-stroke: 1px #F32929; -webkit-text-fill-color: transparent;"
>
  Background Text
</div>
```

**Hero image with drop shadow:**
```html
<img 
  src="/image.png" 
  alt="Description"
  class="max-w-4xl w-full h-auto hero-drop-shadow"
/>

<style scoped>
.hero-drop-shadow {
  filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
}
</style>
```

**Accent links:**
```html
<a href="https://example.com" class="text-accent" target="_blank">Link Text</a>
```

---

## SEO & Meta Tags

Every page should include:

### 1. Dynamic Meta Tags (via `useSeoMeta`)
```typescript
useSeoMeta({
  title: 'Page Title',
  description: 'Page description (155 characters max)',
  ogTitle: 'Open Graph Title',
  ogDescription: 'OG Description',
  ogImage: 'https://sambuilt.it/image.png',
  ogUrl: 'https://sambuilt.it/page-url',
  ogType: 'article', // or 'website'
  ogSiteName: 'Sam Daugherty Portfolio',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Twitter Title',
  twitterDescription: 'Twitter Description',
  twitterImage: 'https://sambuilt.it/image.png',
  twitterImageAlt: 'Image description'
})
```

### 2. Canonical Link (via `useHead`)
```typescript
useHead({
  link: [
    { rel: 'canonical', href: 'https://sambuilt.it/page-url' }
  ]
})
```

### 3. Social Sharing Image
- Size: **1200x630px** (optimal for OG tags)
- Format: PNG or JPG
- Must be hosted at full URL (https://sambuilt.it/image.png)

---

## Development Workflow

### Local Development
```bash
npm run dev
```
Runs at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Git Workflow
```bash
# Stage all changes
git add .

# Commit with descriptive message
git commit -m "Descriptive message about changes"

# Push to main branch
git push
```

**Note:** Vercel automatically deploys when changes are pushed to the `main` branch.

### Image Optimization
If you need to optimize images before adding them:
```bash
node optimize.js
```

---

## Known Issues & Decisions

### 1. TypeScript Linter Warnings
Some blog post pages show TypeScript warnings for `useSeoMeta` and `useHead`:
```
Cannot find name 'useSeoMeta'
Cannot find name 'useHead'
```

**Status:** These are **safe to ignore**. The functions are auto-imported by Nuxt 3 and work correctly at runtime. The TypeScript language server sometimes doesn't recognize Nuxt's auto-imports.

### 2. AOS Animation Library (Removed)
We attempted to add AOS (Animate On Scroll) for subtle animations but encountered conflicts with existing CSS transforms on decorative elements. The library was removed.

**Future animation considerations:**
- GSAP (more control, larger bundle)
- Custom CSS animations with Intersection Observer
- Framer Motion (if migrating to React)

### 3. Component Consolidation Opportunity
The three `ProjectShowcase` components (`ProjectShowcase.vue`, `ProjectShowcaseToday.vue`, `ProjectShowcaseRecs.vue`) are very similar and could be consolidated into a single prop-driven component to reduce duplication.

**Decision:** Kept separate for now for quick iteration. Consider consolidating if adding more projects.

### 4. Blog Post Helper Functions
The `blogPosts.js` file originally had hardcoded indices (e.g., `blogPosts[8]` for oldest post) which broke when placeholder posts were removed. These have been updated to:
- `getRemainingPosts()` - Now uses `blogPosts.slice(2)` instead of `blogPosts.slice(2, 8)`
- `getOldestPost()` - Now uses `blogPosts[blogPosts.length - 1]` for robustness

---

## Future Enhancements

### Potential Features
- [ ] Search functionality for blog posts
- [ ] Tag/category system for blog posts
- [ ] Related posts section at bottom of blog posts
- [ ] RSS feed for blog
- [ ] Newsletter signup integration
- [ ] Contact form backend (currently static)
- [ ] Reading progress indicator on blog posts
- [ ] Table of contents for long blog posts
- [ ] Estimated read time calculation (currently manual)

### Performance Optimizations
- [ ] Lazy load images below the fold
- [ ] Convert all images to WebP format
- [ ] Implement proper image srcset for responsive images
- [ ] Add loading skeletons for content
- [ ] Code split larger pages

### Design Enhancements
- [ ] Custom cursor (discussed but not implemented)
- [ ] Smooth page transitions
- [ ] Parallax effects on hero sections
- [ ] More print-inspired layouts on blog posts

---

## Quick Reference: Common Tasks

### Start Development Server
```bash
npm run dev
```

### Add a New Blog Post
1. Add entry to top of `data/blogPosts.js`
2. Copy `pages/writing/good-enough-design.vue` to new file
3. Update all content and meta tags
4. Add hero image to `/public/`
5. Write content
6. Push to git

### Add a New Portfolio Project
1. Create hero section component
2. Create project showcase component (optional)
3. Create case study page
4. Add to homepage and Work page
5. Add all project images
6. Push to git

### Toggle Dark Mode
Click the sun/moon icon in the navigation

### Deploy to Production
Push to `main` branch - Vercel handles the rest

---

## Project Maintenance

### Regular Tasks
- Review and optimize images quarterly
- Update dependencies monthly (`npm update`)
- Check Google Analytics for insights
- Review and update SEO meta tags as needed
- Backup blog post content (git is the backup, but consider exporting)

### Before Major Changes
- Create a new branch for testing
- Test locally before pushing to main
- Check responsive design on multiple devices
- Validate all links are working

---

## Contact & Support

**Developer:** Sam Daugherty  
**Website:** https://sambuilt.it  
**Project Start Date:** 2024  
**Last Updated:** October 15, 2025

---

## Changelog

### October 15, 2025
- Added PROJECT_SUMMARY.md for documentation
- Published new blog post: "I Tested AI, and All I Got Was This Existential Crisis"

### August 4, 2025
- Published blog post: "How 'API' Makes Me a Better Communicator and Partner"
- Fixed `getRemainingPosts()` and `getOldestPost()` functions in blogPosts.js

### July 29, 2025
- Published blog post: "I Say I Don't Care, But I'm Lying"

### Earlier 2025
- Added Google Analytics 4 integration
- Completed multiple blog posts
- Implemented dark mode throughout site
- Launched initial portfolio with 4 case studies

---

**End of Project Summary**

*This document should be updated whenever major changes are made to the project structure, workflows, or design decisions.*

