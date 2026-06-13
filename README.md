# Nathan Rhys - Project Monorepo

This repository contains both the **Sanity Studio** and the **Astro Frontend**.

## Structure
- `/studio`: The Sanity Studio for managing content.
- `/web`: The Astro frontend for displaying the site.

## Getting Started

### 1. Install Dependencies
From the root directory, run:
```bash
npm install
```

### 2. Run Development Servers
You can run both or either from the root:
- **Run Studio:** `npm run dev:studio` (default: localhost:3333)
- **Run Web:** `npm run dev:web` (default: localhost:4321)

## Deployment
- **Frontend:** Automatically deploys to GitHub Pages via GitHub Actions on every push to `main`.
- **Studio:** Can be deployed to Sanity's hosting by running `npm run build:studio` and then `npx sanity deploy` from the `studio` directory.
