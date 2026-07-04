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
You can run these from the root in separate terminals:
- **Run Studio:** `npm run dev:studio` (default: localhost:3333)
- **Run Web:** `npm run dev:web` (default: localhost:4321). This command now includes a **Live Content Watcher** that automatically refreshes the frontend whenever you update content in Sanity.

## Deployment
- **Frontend:** Automatically deploys to GitHub Pages via GitHub Actions on every push to `main`.
- **Studio:** Can be deployed to Sanity's hosting by running `npm run build:studio` and then `npx sanity deploy` from the `studio` directory.

## Services
This project uses the following services:

- **[Astro](https://astro.build)** - The web framework used for the frontend.
- **[Sanity CMS](https://www.sanity.io)** - Used for content management and structured data.
- **[GitHub Pages](https://pages.github.com)** - Hosts the live production site.
- **[GitHub Actions](https://github.com/features/actions)** - Automates the build and deployment process.
- **[MailerLite](https://www.mailerlite.com)** - Used for newsletter subscriptions and email marketing.
- **[Google Fonts](https://fonts.google.com)** - Provides typography for the site.
- **[Bootstrap Icons](https://icons.getbootstrap.com)** - Used for iconography.
- **[Tailwind CSS](https://tailwindcss.com)** - Used for utility-first styling.
- **[RSS](https://www.rssboard.org/rss-specification)** - Auto-updating feed for newsletter entries available at `/rss.xml`.

## RSS Feed & Auto-Updating
The newsletter RSS feed is automatically generated at build time. 
To ensure the feed (and the rest of the site) stays up-to-date with content changes in Sanity without manual pushes:
1. **Sanity Webhooks:** Configure a webhook in your Sanity project settings (Manage -> API -> Webhooks) pointing to a service that can trigger the GitHub Actions workflow.
2. **GitHub Actions Trigger:** You can use a repository dispatch event or a specialized action to trigger the `deploy.yml` workflow when Sanity content is published.
