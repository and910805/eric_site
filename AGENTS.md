# Project Agent Notes

## Overview
- The `my-app` directory contains the React single-page application built with Vite and TailwindCSS.
- Reusable data sources live under `src/data`. Keep profile-related constants there to avoid duplicating literals inside components.

## Development Workflow
- Install dependencies with `npm install` in `my-app/` before running local commands.
- Validate builds with `npm run build` prior to opening a pull request.
- Prefer colocating new pages under `src/pages` and shared UI under `src/components`.

## Code Style
- Use functional React components with TypeScript typings when adding new UI.
- Favor Tailwind utility classes for styling instead of custom CSS files.
- Keep translations bilingual (English & Traditional Chinese) when updating profile copy.

## Testing & Assets
- Store static images in `src/assets` and import them via ES modules.
- When introducing new data-driven sections, extend the relevant `src/data` module rather than hardcoding values in components.
