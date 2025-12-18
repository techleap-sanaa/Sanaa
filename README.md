# Sanaa

A React + Vite frontend for the Sanaa project. This repository contains the UI for Sanaa built with Vite, React (v19), Tailwind CSS and a collection of UI/UX libraries and utilities (Radix UI, Embla, React Query, Redux Toolkit, Clerk authentication, etc.). The codebase is component-driven and organized for a single-page application with protected/public routes.

---

## Table of contents
- Project overview
- Key features
- Tech stack (major dependencies)
- Prerequisites
- Quick start (install + run)
- Available scripts
- Environment variables
- Project structure (high level)
- Important components and pages
- Styling & design system
- Routing & auth
- Linting & development notes
- Build & deployment
- Contributing
- Troubleshooting & tips
- License

---

## Project overview
Sanaa is a localized creator platform purpose-built to centralize creators' presence, remove algorithmic unfairness, and enable direct monetization from fans. This documentation contains the product + technical reference intended for stakeholders, developers, QA, and operations teams. It includes UI explanations with embedded images, API endpoint definitions, data model designs, integration details, testing and deployment instructions

---

## Key features
- Vite-powered development (fast Hot Module Replacement) 
- React 19
- Tailwind CSS with animations plugin
- Component-based architecture (many reusable UI components)
- Client-side routing with react-router-dom
- Auth integration using Clerk
- Data fetching and caching using @tanstack/react-query
- Global state using Redux Toolkit
- Common UI primitives from Radix UI
- Carousel support via embla-carousel
- Accessibility-minded UI components

---

## Tech stack:
Notable packages from package.json:
- react, react-dom (v19)
- vite (v7)
- tailwindcss, tailwindcss-animate
- @clerk/clerk-react (auth)
- @reduxjs/toolkit, react-redux (state)
- @tanstack/react-query (data fetching)
- react-router-dom (routing)
- @radix-ui/* (UI primitives: avatar, dialog, tooltip, etc.)
- embla-carousel-react (carousel)
- lucide-react (icons)
- react-hook-form, zod (forms & validation)
- axios (HTTP client)
- clsx, class-variance-authority (class utilities)
- dotenv (environment)

Dev tools:
- eslint (with plugin configs)
- @vitejs/plugin-react

---

## Prerequisites
- Node.js (recommended >= 18)
- npm (or you can use an alternative package manager, but commands below assume npm)
- A Clerk account / keys if you want to run authenticated flows locally

---

## Quick start

1. Clone the repo
   npm clone the repository (or use your preferred git client)
   git clone https://github.com/techleap-sanaa/Sanaa.git
   cd Sanaa

2. Install dependencies
   npm install

3. Create environment variables
   Copy an env example or create a .env file in the project root (see "Environment variables" below).

4. Start dev server
   npm run dev
   - Open the URL shown in the terminal (Vite HMR enabled)

5. Build for production
   npm run build
   - A bundled app will be generated in the `dist/` folder

6. Preview production build locally
   npm run preview

---

## Available scripts
From package.json:
- npm run dev — start Vite dev server
- npm run build — build production bundle
- npm run preview — locally preview production build
- npm run lint — run ESLint across the project

---

## Environment variables
This project uses Vite. Vite only exposes env variables that start with VITE_. Create a .env file in the repo root and add the required keys. Example variables you may need (adjust names to what the app expects in code):

- VITE_API_BASE_URL — base URL for the backend API
- VITE_CLERK_FRONTEND_API — Clerk frontend API or publishable key used by ClerkProvider
- VITE_SOME_FEATURE_FLAG — any feature flags used by the app

Note: The repository includes dotenv in dependencies; Vite loads .env.* files automatically during dev/build. Confirm exact variable names by searching usage in src (e.g., process.env or import.meta.env.VITE_...).

---

## Project structure:
- index.html — Vite HTML entry
- package.json — scripts & dependencies
- tailwind.config.js — Tailwind config
- vite.config.js — Vite configuration
- src/
  - main.jsx — React app entry
  - App.jsx — top-level app, routing mount
  - index.css / App.css — global styles + Tailwind imports
  - assets/ — images/static assets
  - components/ — reusable UI components
    - layout/ — layout primitives (app header, sidebar, etc.)
    - ui/ — small UI building blocks
  - pages/ — page-level components
    - auth/ — authentication pages
    - landing/ — landing / fanpage pages
    - shared/ — shared pages between flows
  - lib/ — apis or helper libraries
  - hooks/ — custom React hooks
  - utils/ — utility functions
  - data/ — sample or static data used in components


Here is the project tree overview:

```
/src
  ├── app/
  │     ├── router.jsx
  │     ├── providers.jsx
  │     └── store.js
  │
  ├── modules/
  │     ├── auth/
  │     │     ├── slices/
  │     │     ├── services/
  │     │     ├── components/
  │     │     └── hooks/
  │     │
  │     ├── creators/
  │     ├── fans/
  │     ├── posts/
  │     ├── events/
  │     ├── payments/
  │     ├── notifications/
  │     └── kyc/
  │
  ├── pages/
  │     ├── landing/
  │     ├── auth/
  │     ├── fan/
  │     ├── creator/
  │     └── shared/
  │
  ├── components/
  │     ├── ui/
  │     ├── layout/
  │     ├── common/
  │     └── data/
  │
  ├── libs/
  │     ├── axios.js
  │     ├── auth.js*
  │     └── media.js
  │
  ├── constants/
  ├── hooks/
  ├── types/
  ├── assets/
  └── styles/

```
---

## Important components and their roles
Files present in src/component:
- AppHeader.jsx — top navigation/header of the app
- AppSidebar.jsx — application sidebar (navigation, user actions)
- AppAside.jsx — ancillary aside used on certain pages
- Hero.jsx & HeroOrbitCarousel.jsx — main landing hero and carousel visuals
- Header.jsx, Footer.jsx — page header/footer building blocks
- EventCard.jsx — card to display events
- FeedItem.jsx & FeedAside.jsx — main feed items and side feed
- FindYourNiche.jsx, FindInspo.jsx — landing sections for inspiration & discovery
- RecommendedUserCard.jsx — user recommendation card
- ProtectedRoute.jsx / PublicRoute.jsx — route wrappers enforcing auth
- FinalCta.jsx — final call-to-action block
- Accordion.jsx — collapsible content primitive
- findInspoImages.js, heroImages.js — static image lists used by components

These are entry points and should help you find where UI is implemented when you want to modify layout or content.

---

## Styling & design system
- Tailwind CSS is the primary utility-first framework (tailwind.config.js is included).
- tailwindcss-animate is installed for animation utilities.
- class-variance-authority + tailwind-merge + clsx are used to create composable class names and variant-based components.

When changing styles:
- Edit Tailwind config for global tokens and utilities.
- Prefer composing classes in components, and keep utility classes consistent.

---

## Routing & authentication
- react-router-dom is used for client-side routing.
- The app includes ProtectedRoute and PublicRoute wrappers to gate routes depending on authentication status.
- Clerk (via @clerk/clerk-react) is integrated for user authentication. Provide Clerk frontend configuration in env.

---

## Data fetching & state
- @tanstack/react-query and axios are sed for data fetching and caching (recommended to keep network logic in dedicated hooks under src/hooks or src/lib).
- Redux Toolkit is available for global state needs (store setup lives in src/lib or src/store — search the repo for exact location).
- Axios is used for HTTP requests.

---

## Linting, formatting & developer guidance
- ESLint is configured (eslint.config.js). Run:
  npm run lint
- Follow existing ESLint rules; add rules as needed in eslint.config.js.
- Add Prettier if you want opinionated formatting (not included by default).

---

## Build & deployment
- Build: npm run build
- The production build will be in dist/ and is ready to serve with any static hosting service (Netlify, Vercel, Surge, Cloudflare Pages, S3 + CloudFront, etc).
- Configure environment variables at deployment time using your host’s env settings (remember VITE_ prefix for variables that the app needs to read in runtime).

---

## Contributing
- Fork the repository and create a feature branch (branch naming like feature/<name>).
- Follow established patterns in src/components and pages for structure and Tailwind usage.
- Run linting before opening PRs.
- If changing environment variable names or adding new public API levels, update README and any .env.example file

Suggested PR checklist:
- [ ] New UI follows mobile-first responsive approach
- [ ] Tailwind classes or shared components reused where sensible
- [ ] ESLint passes
- [ ] Basic manual QA on routes affected

---

## Troubleshooting & tips
- If components fail to render, verify Vite dev server output and console errors for missing env variables (often Clerk or API base URL).
- If HMR doesn’t update, restart the dev server (rare Vite edge cases) or clear the browser cache.
- To find where a particular env var is used, search for import.meta.env in src files.
- For auth problems, check Clerk dashboard and the frontend key being used (and match allowed origins/callback URLs).

---

## Where to look first when working on layout / fanpage
- src/pages/landing — primary landing/fanpage pages
- src/components/Hero.jsx and HeroOrbitCarousel.jsx — hero visuals & carousel
- src/components/FindYourNiche.jsx, FindInspo.jsx — prominent landing sections
- src/components/layout/* — layout wrappers (header, sidebar, aside)

---

## Testing
- For testing, we're using Vitest and Jest for unit/integ tests.

---

## Notes from package.json (versions)
- React 19.x, React Router 7.x, Vite 7.x, TailwindCSS 3.x are used. Check package.json for the exact versions if you need to match local environment constraints.

---

## License
- MIT
